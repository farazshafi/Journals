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
}

export default function BlockRenderer({ block }: { block: Block }) {
    const style: React.CSSProperties = {
        position: "absolute",
        left: block.x || "50%",
        top: block.y || "50%",
        width: block.width,
        height: block.height,
        zIndex: block.zIndex ?? 1,
        transform: "translate(-50%, -50%)",
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
            <blockquote className="block block--quote" style={style}>
                {block.content}
            </blockquote>
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
