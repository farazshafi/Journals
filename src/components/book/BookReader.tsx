/** @jsxImportSource react */
import { useState, useEffect, useRef } from "react"
import BookLayout, { type BookLayoutConfig } from "./BookLayout"
import PageRenderer from "./PageRenderer"
import "./book.css"

interface BookReaderProps {
    book: {
        layout?: BookLayoutConfig
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
    const rightPage = pages[pageIndex + 1]

    function nextPage() {
        if (pageIndex < pages.length - 2) {
            setPageIndex(pageIndex + 2);
            playFlip();
        }
    }

    function prevPage() {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 2);
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

    const leftContent = leftPage ? <PageRenderer page={leftPage} /> : null
    const rightContent = rightPage ? <PageRenderer page={rightPage} /> : null

    return (
        <div className="book-reader">
            <div className="book-main-view">
                {book.layout ? (
                    <div style={{ transformOrigin: 'center center' }}>
                        <BookLayout
                            layout={book.layout}
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
            </nav>
        </div>
    )
}
