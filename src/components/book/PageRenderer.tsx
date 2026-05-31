/** @jsxImportSource react */
import BlockRenderer, { type Block } from "./BlockRenderer"

export interface Page {
    id: string
    background?: string
    blocks: Block[]
}

export default function PageRenderer({ page, isMobile = false }: { page: Page, isMobile?: boolean }) {
    return (
        <div
            className="book-page"
            style={{
                ...(page.background ? { backgroundImage: `url(${page.background})` } : {}),
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {page.blocks.map((block: Block, index: number) => (
                <BlockRenderer key={index} block={block} isMobile={isMobile} />
            ))}
        </div>
    )
}
