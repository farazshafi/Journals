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
}


export default function BlockRenderer({ block }: { block: Block }) {
    const style: React.CSSProperties = {
        position: "absolute",
        left: block.x || "50%",
        top: block.y || "50%",
        width: block.width,
        height: block.height,
        zIndex: block.zIndex ?? 1,
        textAlign: block.textAlign || "center",
        transform: `translate(-50%, -50%) ${block.rotation ? `rotate(${block.rotation})` : ""} scale(${block.scale || 1})`,
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
