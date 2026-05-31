/** @jsxImportSource react */
export interface Block {
    type: "title" | "text" | "image" | "quote" | "divider" | "spacer";
    content?: string;
    src?: string;
    x?: string;
    y?: string;
    width?: string;
    height?: string;
    zIndex?: number;
    textAlign?: "left" | "center" | "right";
    rotation?: string;
    scale?: number;
    fontSize?: string;
    mobile?: Partial<Block>; // Mobile-specific overrides
}


export default function BlockRenderer({ block, isMobile = false }: { block: Block, isMobile?: boolean }) {
    // Merge mobile overrides if we are on mobile
    const activeBlock = isMobile && block.mobile ? { ...block, ...block.mobile } : block;

    const style: React.CSSProperties = {
        position: "absolute",
        left: activeBlock.x || "50%",
        top: activeBlock.y || "50%",
        width: activeBlock.width,
        height: activeBlock.height,
        zIndex: activeBlock.zIndex ?? 1,
        textAlign: activeBlock.textAlign || "center",
        fontSize: activeBlock.fontSize,
        transform: `translate(-50%, -50%) ${activeBlock.rotation ? `rotate(${activeBlock.rotation})` : ""} scale(${activeBlock.scale || 1})`,
    }

    if (block.type === "title") {
        return (
            <h1 className="block" style={style}>
                {block.content}
            </h1>
        )
    }

    if (block.type === "text") {
        return (
            <p className="block" style={style}>
                {block.content}
            </p>
        )
    }

    if (block.type === "image") {
        return (
            <img
                className="block"
                style={style}
                src={block.src}
                alt=""
            />
        )
    }

    if (block.type === "quote") {
        return (
            <div className="block block--sticky-note" style={style}>
                <blockquote className="quote-content">
                    {block.content}
                </blockquote>
            </div>
        )
    }

    if (block.type === "divider") {
        return (
            <hr
                className="block block--divider"
                style={{ ...style, height: block.height || "2px", border: "none" }}
            />
        )
    }

    if (block.type === "spacer") {
        return (
            <div
                className="block block--spacer"
                style={{ ...style, pointerEvents: "none" }}
            />
        )
    }

    return null
}
