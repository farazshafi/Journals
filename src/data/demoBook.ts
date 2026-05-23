export const demoBook = {
    title: "The Forgotten Kingdom",

    chapters: [
        {
            id: "chapter-1",

            title: "The Awakening",

            pages: [
                {
                    id: "page-1",

                    blocks: [
                        {
                            type: "title",
                            content: "Chapter I",
                            position: "top-center",
                        },

                        {
                            type: "image",
                            src: "/images/castle.png",
                            position: "center",
                        },

                        {
                            type: "text",
                            content:
                                "Beyond the mountains stood a forgotten kingdom buried beneath ash.",

                            position: "bottom-center",
                        },
                    ],
                },

                {
                    id: "page-2",

                    blocks: [
                        {
                            type: "text",
                            content:
                                "The air smelled of rain and ancient paper.",

                            position: "center",
                        },
                        {
                            type: "text",
                            content: "Another text",
                            position: "top-center",
                        }
                    ],
                },
            ],
        },
    ],
}
