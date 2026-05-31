/** @jsxImportSource react */
import type { ReactNode } from "react"

export interface LayoutArea {
    x: string
    y: string
    width: string
    height: string
    rotation?: string
}

export interface BookLayoutConfig {
    background: string
    width?: string
    height?: string
    leftPage: LayoutArea
    rightPage: LayoutArea
}

interface BookLayoutProps {
    layout: BookLayoutConfig
    scale?: number
    leftPage?: ReactNode
    rightPage?: ReactNode
}

export default function BookLayout({ layout, scale = 1, leftPage, rightPage }: BookLayoutProps) {
    return (
        <div
            className="book-layout"
            style={{
                width: layout.width,
                height: layout.height,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
            }}
        >
            <img
                className="book-frame"
                src={layout.background}
                alt=""
            />

            {leftPage && (
                <div
                    className="page-area"
                    style={{
                        left: layout.leftPage.x,
                        top: layout.leftPage.y,
                        width: layout.leftPage.width,
                        height: layout.leftPage.height,
                        transform: layout.leftPage.rotation ? `rotate(${layout.leftPage.rotation})` : undefined,
                    }}
                >
                    {leftPage}
                </div>
            )}

            {rightPage && (
                <div
                    className="page-area"
                    style={{
                        left: layout.rightPage.x,
                        top: layout.rightPage.y,
                        width: layout.rightPage.width,
                        height: layout.rightPage.height,
                        transform: layout.rightPage.rotation ? `rotate(${layout.rightPage.rotation})` : undefined,
                    }}
                >
                    {rightPage}
                </div>
            )}
        </div>
    )
}
