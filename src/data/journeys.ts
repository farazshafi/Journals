export interface Journey {
    id: string;
    image: string;
    title: string;
    date: string;
    days: number;
    regions: number;
    pages: number;
    bookData?: any; // To keep it flexible for now
}

export const journeys: Journey[] = [
    {
        id: "1",
        image: "/assets/himachal.webp",
        title: "Himachal",
        date: "Jul 2025",
        days: 12,
        regions: 3,
        pages: 18,
        bookData: {
            layout: {
                width: "1000px",
                background: "/assets/emptybook.webp",
                // height: "800px",
                leftPage: {
                    x: "12%",
                    y: "10%",
                    width: "36%",
                    height: "80%",
                },
                rightPage: {
                    x: "51%",
                    y: "10%",
                    width: "36%",
                    height: "80%",
                },
            },
            chapters: [
                {
                    id: "chapter-1",
                    title: "The Long Train North",
                    pages: [
                        {
                            id: "page-1",
                            blocks: [
                                { type: "title", content: "Departure From kerala", x: "50%", y: "12%", zIndex: 10 },
                                { type: "quote", content: "Some journeys begin long before the train moves.", x: "50%", y: "28%", zIndex: 10 },
                                { type: "text", content: "We boarded the sleeper train from Kasaragod without proper seats. Tatkal tickets saved us somehow. Four of us shared space, bags, food, and excitement while the train slowly pulled us away from home.", x: "50%", y: "78%", width: "76%", zIndex: 10 }
                            ]
                        },

                        {
                            id: "page-2",
                            blocks: [
                                { type: "title", content: "Night sms", x: "50%", y: "14%", zIndex: 10 },
                                { type: "text", content: "The compartment was surprisingly calm that night. A strange man who spoke broken Malayalam kept trying to talk with everyone around him. His words never came out clearly. We quietly avoided him and continued laughing among ourselves.", x: "50%", y: "38%", width: "72%", zIndex: 10 },
                                { type: "quote", content: "The train carried strangers together through darkness.", x: "50%", y: "82%", zIndex: 10 }
                            ]
                        },

                    ]
                },
                {
                    id: "chapter-1",
                    title: "The Long Train North",
                    pages: [
                        {
                            id: "page-1",
                            blocks: [
                                { type: "title", content: "Departure From Kasaragod", x: "50%", y: "12%", zIndex: 10 },
                                { type: "quote", content: "Some journeys begin long before the train moves.", x: "50%", y: "28%", zIndex: 10 },
                                { type: "text", content: "We boarded the sleeper train from Kasaragod without proper seats. Tatkal tickets saved us somehow. Four of us shared space, bags, food, and excitement while the train slowly pulled us away from home.", x: "50%", y: "78%", width: "76%", zIndex: 10 }
                            ]
                        },

                        {
                            id: "page-2",
                            blocks: [
                                { type: "title", content: "Night Conversations", x: "50%", y: "14%", zIndex: 10 },
                                { type: "text", content: "The compartment was surprisingly calm that night. A strange man who spoke broken Malayalam kept trying to talk with everyone around him. His words never came out clearly. We quietly avoided him and continued laughing among ourselves.", x: "50%", y: "38%", width: "72%", zIndex: 10 },
                                { type: "quote", content: "The train carried strangers together through darkness.", x: "50%", y: "82%", zIndex: 10 }
                            ]
                        },

                    ]
                }
            ]
        }
    },
];

