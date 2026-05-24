/** @jsxImportSource react */
import BlockRenderer, { type Block } from "./BlockRenderer"

export interface Page {
    id: string
    background?: string
    blocks: Block[]
}

export default function PageRenderer({ page }: { page: Page }) {
    return (
        <div
            className="book-page"
            style={{
                backgroundImage: page.background ? `url(${page.background})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {page.blocks.map((block: Block, index: number) => (
                <BlockRenderer key={index} block={block} />
            ))}
        </div>
    )
}
