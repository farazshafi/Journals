/** @jsxImportSource react */
import BlockRenderer from "./BlockRenderer"

export default function PageRenderer({ page }) {
    return (
        <div className="book-page">
            {page.blocks.map((block, index) => (
                <BlockRenderer
                    key={index}
                    block={block}
                />
            ))}
        </div>
    )
}
