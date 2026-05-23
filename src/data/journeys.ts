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
            chapters: [
                {
                    id: "chapter-1",
                    title: "The Awakening",
                    pages: [
                        {
                            id: "page-1",
                            blocks: [
                                { type: "title", content: "Chapter I", position: "top-center" },
                                { type: "image", src: "/images/castle.png", position: "center" },
                                { type: "text", content: "Beyond the mountains stood a forgotten kingdom buried beneath ash.", position: "bottom-center" }
                            ]
                        },
                        {
                            id: "page-2",
                            blocks: [
                                { type: "title", content: "The Discovery", position: "top-center" },
                                { type: "text", content: "We found the entrance hidden behind a frozen waterfall. The air grew colder with every step, carrying the scent of ancient pine and silence.", position: "center" },
                                {
                                    type: "text",
                                    content: "Another text",
                                    position: "bottom-center",
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
];

