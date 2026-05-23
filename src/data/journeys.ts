export interface Journey {
    id: string;
    image: string;
    title: string;
    date: string;
    days: number;
    regions: number;
    pages: number;
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
    },
];
