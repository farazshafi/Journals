/** @jsxImportSource react */
import { useState, useEffect } from "react"
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

export default function BookReader({ book, scale = 1 }: BookReaderProps) {
    if (!book || !book.chapters) {
        return <div className="book-reader">No journal content found.</div>
    }

    const pages = book.chapters.flatMap((chapter) => chapter.pages)
    const [pageIndex, setPageIndex] = useState(0)

    const leftPage = pages[pageIndex]
    const rightPage = pages[pageIndex + 1]

    function nextPage() {
        if (pageIndex < pages.length - 2) setPageIndex(pageIndex + 2)
    }

    function prevPage() {
        if (pageIndex > 0) setPageIndex(pageIndex - 2)
    }

    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "ArrowRight") nextPage()
            if (e.key === "ArrowLeft") prevPage()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [pageIndex])

    const leftContent = leftPage ? <PageRenderer page={leftPage} /> : null
    const rightContent = rightPage ? <PageRenderer page={rightPage} /> : null

    return (
        <div className="book-reader">
            {book.layout ? (
                <BookLayout
                    layout={book.layout}
                    scale={scale}
                    leftPage={leftContent}
                    rightPage={rightContent}
                />
            ) : (
                /* Fallback: no layout config, render pages side by side */
                <div className="book-spread">
                    {leftContent}
                    {rightContent}
                </div>
            )}

            <div className="book-controls">
                <button onClick={prevPage} disabled={pageIndex === 0}>← Prev</button>
                <span className="book-page-count">
                    {pageIndex + 1}–{Math.min(pageIndex + 2, pages.length)} / {pages.length}
                </span>
                <button onClick={nextPage} disabled={pageIndex >= pages.length - 2}>Next →</button>
            </div>
        </div>
    )
}
