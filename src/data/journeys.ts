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
                                {
                                    type: "title",
                                    content: "Leaving Kasaragod",
                                    x: "50%",
                                    y: "7%",
                                    textAlign: "left",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    textAlign: "center",
                                    width: "90%",
                                    content:
                                        "We started our journey from Kasaragod with nothing fully planned. The four of us didn’t even have proper seats at first, so we somehow managed through tatkal and shared whatever space we got. At first, everything felt calm. The compartment wasn’t crowded, and we spent the night talking, laughing, and quietly observing people around us.",
                                    x: "50%",
                                    y: "25%",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/leaving-kasaragod.webp",
                                    x: "34%",
                                    y: "45%",
                                    width: "78%",
                                    zIndex: 10
                                },

                                {
                                    type: "quote",
                                    content: "The journey of a thousand miles begins with a single step.",
                                    x: "80%",
                                    width: "48%",
                                    textAlign: "left",
                                    y: "50%",
                                    zIndex: 10,
                                    rotation: "-9deg",
                                    scale: 0.9
                                },

                                {
                                    type: "divider",
                                    x: "50%",
                                    y: "66%",
                                    width: "50%",
                                    zIndex: 10
                                },

                                {
                                    type: "title",
                                    content: "The Stranger",
                                    x: "50%",
                                    y: "72%", 
                                    textAlign: "left",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "I still remember one man from another state who could speak Malayalam. He tried hard to connect with us, but his words were unclear, his eyes heavy, like he was carrying something painful inside him. We stayed distant, unsure of him, and slowly drifted into sleep as the train rocked gently through the dark.",
                                    x: "50%",
                                    y: "86%",
                                    textAlign: "center",
                                    width: "90%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-2",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Best Eyesight from Train Window",
                                    x: "50%",
                                    y: "7%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "quote",
                                    content:
                                        "When the train came out of tunnels, everything looked even greener than before.",
                                    x: "28%",
                                    y: "35%",
                                    width: "65%",
                                    rotation: "1deg",
                                    textAlign: "left",
                                    scale: 0.9,
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/train.webp",
                                    x: "70%",
                                    y: "35%",
                                    width: "50%",
                                    zIndex: 9
                                },

                                {
                                    type: "text",
                                    content:
                                        "The beauty outside the window stayed with me deeply. Through Kerala, Karnataka, and Goa, the world looked alive. Endless greenery, rain-soaked mountains, waterfalls slipping through rocks, monkeys running near the tracks, dark tunnels cutting through cliffs. Sometimes the train disappeared into mountains for long minutes, and when it came out, everything looked even greener than before. It was one of the most beautiful sights I had ever seen from a train window.",
                                    x: "50%",
                                    y: "78%",
                                    width: "90%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-3",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Gujarat Heat",
                                    x: "50%",
                                    y: "12%",
                                    zIndex: 10
                                },

                                {
                                    type: "quote",
                                    content:
                                        "Water became our biggest expense.",
                                    x: "50%",
                                    y: "28%",
                                    width: "50%",
                                    rotation: "-2deg",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "But every beautiful thing slowly changed after Gujarat. The air became heavier. Heat entered the train like fire. Sweat never left our bodies. I remember sitting near the window without my T-shirt, desperately trying to catch whatever little air entered the compartment.",
                                    x: "50%",
                                    y: "74%",
                                    width: "76%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-4",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Bilal",
                                    x: "50%",
                                    y: "12%",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "Somewhere during the journey, we met Bilal. He worked in Kozhikode, but Delhi was his home. Very quickly, he became part of our trip. We spent hours talking, laughing, and forgetting how long the journey actually was.",
                                    x: "50%",
                                    y: "42%",
                                    width: "76%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-5",
                            blocks: [
                                {
                                    type: "quote",
                                    content:
                                        "Nobody even cared if it made sense. The entire compartment burst into laughter.",
                                    x: "50%",
                                    y: "24%",
                                    width: "60%",
                                    textAlign: "left",
                                    zIndex: 10,
                                    rotation: "2deg"
                                },

                                {
                                    type: "text",
                                    content:
                                        "We spoke about everything — girls in Kerala versus Delhi, life, people, random stories. At one point, we joked that Adhi’s father owned an adukka business, and somehow that became the reason for pan parang. It was one of those stupid, unforgettable moments that only become beautiful during long train journeys.",
                                    x: "50%",
                                    y: "70%",
                                    width: "76%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-6",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Delhi",
                                    x: "50%",
                                    y: "12%",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "As the train slowly entered the city, I saw something I wish I never had to see. Near the tracks, a man was lying motionless, bleeding heavily from his head. The train moved slowly past him, forcing us to witness every second of it.",
                                    x: "50%",
                                    y: "46%",
                                    width: "76%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-7",
                            blocks: [
                                {
                                    type: "quote",
                                    content:
                                        "For the first time in days, the journey felt light again.",
                                    x: "50%",
                                    y: "22%",
                                    width: "70%",
                                    rotation: "1.5deg",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "As we passed near a military area, the weather changed suddenly. The burning sun disappeared behind clouds, and a strong cold wind rushed into the train. All four of us immediately stood near the doorway, silent for once, letting the cold air hit our faces while the train kept moving forward.",
                                    x: "50%",
                                    y: "68%",
                                    width: "76%",
                                    zIndex: 10
                                }
                            ]
                        },

                        {
                            id: "page-8",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Pathankot Welcome",
                                    x: "50%",
                                    y: "12%",
                                    zIndex: 10
                                },

                                {
                                    type: "quote",
                                    content:
                                        "After surviving heat, hunger, and endless train travel, that was the grand welcome waiting for me in North India.",
                                    x: "50%",
                                    y: "28%",
                                    width: "80%",
                                    rotation: "-1.5deg",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "The moment we stepped out at Pathankot, I walked confidently for barely a minute and directly stepped into fresh cow dung. Everyone laughed like crazy, including me.",
                                    x: "50%",
                                    y: "74%",
                                    width: "70%",
                                    zIndex: 10
                                }
                            ]
                        }

                    ]
                }
            ]
        }
    },
];

