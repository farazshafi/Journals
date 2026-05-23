/** @jsxImportSource react */
import { useState } from "react"
import PageRenderer from "./PageRenderer"
import "./book.css"

export default function BookReader({ book }) {
    if (!book || !book.chapters) {
        return <div className="book-reader">No journal content found.</div>
    }

    const pages = book.chapters.flatMap((chapter) => chapter.pages)


    const [pageIndex, setPageIndex] = useState(0)

    const currentPage = pages[pageIndex]

    function nextPage() {
        if (pageIndex < pages.length - 1) {
            setPageIndex(pageIndex + 1)
        }
    }

    function prevPage() {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1)
        }
    }

    return (
        <div className="book-reader">
            <PageRenderer page={currentPage} />

            <div className="book-controls">
                <button onClick={prevPage}>
                    Prev
                </button>

                <button onClick={nextPage}>
                    Next
                </button>
            </div>
        </div>
    )
}
