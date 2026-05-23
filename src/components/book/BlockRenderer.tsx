/** @jsxImportSource react */
export default function BlockRenderer({ block }) {
    const className = `block ${block.position || "center"}`

    if (block.type === "title") {
        return (
            <h1 className={className}>
                {block.content}
            </h1>
        )
    }

    if (block.type === "text") {
        return (
            <p className={className}>
                {block.content}
            </p>
        )
    }

    if (block.type === "image") {
        return (
            <img
                className={className}
                src={block.src}
                alt=""
            />
        )
    }

    return null
}
