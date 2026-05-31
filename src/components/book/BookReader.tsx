/** @jsxImportSource react */
import { useState, useEffect, useRef } from "react"
import BookLayout, { type BookLayoutConfig } from "./BookLayout"
import PageRenderer from "./PageRenderer"
import "./book.css"

interface BookReaderProps {
    book: {
        layout?: BookLayoutConfig
        mobileLayout?: BookLayoutConfig
        chapters: { pages: any[] }[]
    }
    scale?: number
}

export default function BookReader({ book, scale: initialScale = 1 }: BookReaderProps) {
    if (!book || !book.chapters) {
        return <div className="book-reader">No journal content found.</div>
    }

    const pages = book.chapters.flatMap((chapter) => chapter.pages)
    const [pageIndex, setPageIndex] = useState(0)
    const [scale, setScale] = useState(initialScale)
    const [isMuted, setIsMuted] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("bookReaderMuted") === "true";
        }
        return false;
    });
    const [isMobile, setIsMobile] = useState(false);
    const [showLayoutTools, setShowLayoutTools] = useState(false);
    const [layoutAdjust, setLayoutAdjust] = useState({
        xOffset: 0,
        yOffset: 0,
        widthScale: 1,
        rotationOffset: 0
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const defaultMobileLayout = {
        background: "/assets/mobile-book.webp",
        width: "100%", // Full width
        height: "auto",
        leftPage: {
            x: "10%",
            y: "10%",
            width: "80%",
            height: "80%",
            rotation: "-2deg", // Default tilt
        },
        rightPage: {
            x: "10%",
            y: "10%",
            width: "80%",
            height: "80%",
        }
    };

    const activeMobileLayout = book.mobileLayout || defaultMobileLayout;

    // Audio Refs
    const windAudioRef = useRef<HTMLAudioElement | null>(null);
    const flipAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        windAudioRef.current = new Audio("/assets/sounds/wind.mp3");
        windAudioRef.current.loop = true;
        windAudioRef.current.volume = 0.25;

        flipAudioRef.current = new Audio("/assets/sounds/page flip.mp3");

        const startAudio = () => {
            if (!isMuted && windAudioRef.current) {
                windAudioRef.current.play().catch(() => { });
            }
        };

        window.addEventListener('click', startAudio, { once: true });

        return () => {
            if (windAudioRef.current) {
                windAudioRef.current.pause();
                windAudioRef.current = null;
            }
            window.removeEventListener('click', startAudio);
        };
    }, []);

    useEffect(() => {
        if (windAudioRef.current) {
            windAudioRef.current.muted = isMuted;
            if (!isMuted) {
                windAudioRef.current.play().catch(() => { });
            }
        }
        localStorage.setItem("bookReaderMuted", String(isMuted));
    }, [isMuted]);

    const playFlip = () => {
        if (!isMuted && flipAudioRef.current) {
            flipAudioRef.current.currentTime = 0;
            flipAudioRef.current.play().catch(() => { });
        }
    };

    const leftPage = pages[pageIndex]
    const rightPage = isMobile ? null : pages[pageIndex + 1]

    function nextPage() {
        const step = isMobile ? 1 : 2;
        if (pageIndex < pages.length - step) {
            setPageIndex(pageIndex + step);
            playFlip();
        }
    }

    function prevPage() {
        const step = isMobile ? 1 : 2;
        if (pageIndex > 0) {
            setPageIndex(Math.max(0, pageIndex - step));
            playFlip();
        }
    }

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "ArrowRight") nextPage()
            if (e.key === "ArrowLeft") prevPage()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [pageIndex, isMuted])

    const leftContent = leftPage ? <PageRenderer page={leftPage} isMobile={isMobile} /> : null
    const rightContent = rightPage ? <PageRenderer page={rightPage} isMobile={isMobile} /> : null

    const getAdjustedLayout = (baseLayout: BookLayoutConfig) => {
        if (!baseLayout) return baseLayout;

        // Parse current values
        const parseVal = (s: string) => parseFloat(s) || 0;

        return {
            ...baseLayout,
            leftPage: {
                ...baseLayout.leftPage,
                x: `${parseVal(baseLayout.leftPage.x) + layoutAdjust.xOffset}%`,
                y: `${parseVal(baseLayout.leftPage.y) + layoutAdjust.yOffset}%`,
                width: `${parseVal(baseLayout.leftPage.width) * layoutAdjust.widthScale}%`,
                rotation: `${parseVal(baseLayout.leftPage.rotation || "0") + layoutAdjust.rotationOffset}deg`
            },
            rightPage: baseLayout.rightPage ? {
                ...baseLayout.rightPage,
                x: `${parseVal(baseLayout.rightPage.x) + layoutAdjust.xOffset}%`,
                y: `${parseVal(baseLayout.rightPage.y) + layoutAdjust.yOffset}%`,
                width: `${parseVal(baseLayout.rightPage.width) * layoutAdjust.widthScale}%`,
                rotation: `${parseVal(baseLayout.rightPage.rotation || "0") + layoutAdjust.rotationOffset}deg`
            } : baseLayout.rightPage
        };
    };

    const finalLayout = isMobile ? getAdjustedLayout(activeMobileLayout) : (book.layout ? getAdjustedLayout(book.layout) : null);

    return (
        <div className={`book-reader ${isMobile ? 'is-mobile' : ''}`}>
            <div className="book-main-view">
                {isMobile ? (
                    <div style={{ width: '100%', transformOrigin: 'center center' }}>
                        <BookLayout
                            layout={finalLayout as BookLayoutConfig}
                            scale={scale}
                            leftPage={leftContent}
                            rightPage={null}
                        />
                    </div>
                ) : book.layout ? (
                    <div style={{ transformOrigin: 'center center' }}>
                        <BookLayout
                            layout={finalLayout as BookLayoutConfig}
                            scale={scale}
                            leftPage={leftContent}
                            rightPage={rightContent}
                        />
                    </div>
                ) : (
                    /* Fallback: no layout config, render pages side by side */
                    <div className="book-spread" style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
                        {leftContent}
                        {rightContent}
                    </div>
                )}
            </div>

            <nav className="book-navbar">
                {showLayoutTools && (
                    <div className="layout-tools-overlay">
                        <div className="tools-grid">
                            <div className="tool-control">
                                <label>X Pos</label>
                                <input type="range" min="-20" max="20" step="0.5" value={layoutAdjust.xOffset} onChange={(e) => setLayoutAdjust(prev => ({ ...prev, xOffset: parseFloat(e.target.value) }))} />
                            </div>
                            <div className="tool-control">
                                <label>Y Pos</label>
                                <input type="range" min="-20" max="20" step="0.5" value={layoutAdjust.yOffset} onChange={(e) => setLayoutAdjust(prev => ({ ...prev, yOffset: parseFloat(e.target.value) }))} />
                            </div>
                            <div className="tool-control">
                                <label>Width</label>
                                <input type="range" min="0.5" max="1.5" step="0.01" value={layoutAdjust.widthScale} onChange={(e) => setLayoutAdjust(prev => ({ ...prev, widthScale: parseFloat(e.target.value) }))} />
                            </div>
                            <div className="tool-control">
                                <label>Tilt</label>
                                <input type="range" min="-10" max="10" step="0.1" value={layoutAdjust.rotationOffset} onChange={(e) => setLayoutAdjust(prev => ({ ...prev, rotationOffset: parseFloat(e.target.value) }))} />
                            </div>
                        </div>
                        <button className="close-tools" onClick={() => setShowLayoutTools(false)}>Done</button>
                    </div>
                )}

                {isMobile ? (
                    <>
                        <div className="nav-section left">
                            <button
                                className="nav-btn prev"
                                onClick={prevPage}
                                disabled={pageIndex === 0}
                                title="Previous Page"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>
                        </div>

                        <div className="nav-section center">
                            <div className="page-indicator">
                                {pageIndex + 1} / {pages.length}
                            </div>
                        </div>

                        <div className="nav-section right">
                            <button className="nav-btn tools-toggle" onClick={() => setShowLayoutTools(!showLayoutTools)} title="Adjust Layout">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                            </button>
                            <button
                                className="nav-btn next"
                                onClick={nextPage}
                                disabled={pageIndex >= pages.length - 1}
                                title="Next Page"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="nav-section left">
                            <button
                                className="nav-btn prev"
                                onClick={prevPage}
                                disabled={pageIndex === 0}
                                title="Previous Page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                <span>Previous</span>
                            </button>
                        </div>

                        <div className="nav-section center">
                            <div className="tool-group">
                                <span className="tool-label">Size</span>
                                <input
                                    type="range"
                                    min="0.4"
                                    max="1.2"
                                    step="0.05"
                                    value={scale}
                                    onChange={(e) => setScale(parseFloat(e.target.value))}
                                    className="scale-slider"
                                />
                                <span className="scale-value">{Math.round(scale * 100)}%</span>
                            </div>

                            <div className="page-indicator">
                                {pageIndex + 1}–{Math.min(pageIndex + 2, pages.length)} / {pages.length}
                            </div>
                        </div>

                        <div className="nav-section right">
                            <button className="nav-btn tools-toggle" onClick={() => setShowLayoutTools(!showLayoutTools)} title="Adjust Layout">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                            </button>

                            <button
                                className="nav-btn mute-toggle"
                                onClick={() => setIsMuted(!isMuted)}
                                title={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
                                )}
                            </button>

                            <button
                                className="nav-btn next"
                                onClick={nextPage}
                                disabled={pageIndex >= pages.length - 2}
                                title="Next Page"
                            >
                                <span>Next</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>
                    </>
                )}
            </nav>
        </div>
    )
}
