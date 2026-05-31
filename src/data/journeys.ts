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
            mobileLayout: {
                background: "/assets/mobile-book.webp",
                width: "100%",
                leftPage: {
                    x: "18%",
                    y: "9%",
                    width: "70%",
                    height: "81%",
                    rotation: "356deg",
                },
                rightPage: {
                    x: "18%",
                    y: "9%",
                    width: "70%",
                    height: "81%",
                    rotation: "356deg",
                },
            },
            chapters: [
                {
                    id: "chapter-1",
                    title: "The Long Train North",
                    pages: [
                        // page 1
                        {
                            id: "page-1",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Leaving Kasaragod",
                                    x: "50%",
                                    y: "7%",
                                    textAlign: "center",
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
                                    zIndex: 10,
                                    mobile:{
                                        width:"70%",
                                        y:"48%"
                                    }
                                },

                                {
                                    type: "quote",
                                    content: "The journey of a thousand miles begins with a single step.",
                                    x: "80%",
                                    width: "48%",
                                    textAlign: "center",
                                    y: "50%",
                                    zIndex: 10,
                                    rotation: "-9deg",
                                    scale: 0.9,
                                    fontSize: "1.2rem",
                                    mobile: {
                                        x: "80%",
                                        y:"50%",
                                        width: "50%",
                                        // height:"18%",
                                        fontSize: "0.9rem"
                                    }
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
                                    textAlign: "center",
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
                        // page 2
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
                                    zIndex: 11
                                },

                                {
                                    type: "image",
                                    src: "/assets/train.webp",
                                    x: "70%",
                                    y: "35%",
                                    width: "50%",
                                    zIndex: 4
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
                        // page 3
                        {
                            id: "page-3",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Gujarat Heat",
                                    x: "50%",
                                    y: "7%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "The air became heavier. Heat entered the train like fire. The farther north we moved, the more unbearable it became. Gujarat felt endless — dry, burning, suffocating. Sweat never left our bodies. Water became our biggest expense, something we had never even thought about before starting the trip. We kept buying bottle after bottle, trying to stay alive in that heat.",
                                    x: "50%",
                                    y: "47%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "quote",
                                    content:
                                        "But every beautiful thing slowly changed after Gujarat.",
                                    x: "50%",
                                    y: "20%",
                                    width: "90%",
                                    rotation: "-2deg",
                                    zIndex: 10,
                                    scale: 0.9
                                },

                                {
                                    type: "text",
                                    content:
                                        "I remember sitting near the window without my T-shirt, wearing only my beanie, desperately trying to catch whatever little air entered the compartment. Sometimes the train stopped for long periods under the harsh sun, and those moments felt endless. The heat, the exhaustion, the struggle for space, water, and breath — everything became difficult.",
                                    x: "50%",
                                    y: "78%",
                                    width: "90%",
                                    zIndex: 10
                                }
                            ]
                        },
                        // page 4
                        {
                            id: "page-4",
                            blocks: [
                                {
                                    type: "title",
                                    content: "A New Friend Along the Way",
                                    x: "50%",
                                    y: "7%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/bilal.webp",
                                    x: "75%",
                                    y: "30%",
                                    width: "50%",
                                    zIndex: 9
                                },

                                {
                                    type: "text",
                                    content:
                                        "Somewhere during the journey, we met Arsh Bilal. He worked in Kozhikode, but Delhi was his home. He had been curious about us after seeing the four of us praying. Later, he came over and told us how much he respected Kerala Muslims because they always pray on time.",
                                    x: "32%",
                                    y: "28%",
                                    textAlign: "center",
                                    width: "55%",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "But the funniest part was when he revealed he had a Hindu girlfriend — we laughed so much about the irony. Very quickly, he became part of our trip. We spent hours talking, laughing, and forgetting how long the journey actually was. We spoke about everything — girls in Kerala versus Delhi, people, random stories. At one point, we joked that Adhi’s father owned an “adukka” business, and somehow that became the reason for “pan parang.” Nobody even cared if it made sense. The entire compartment burst into laughter. It was one of those stupid, unforgettable moments that only become beautiful during long train journeys.",
                                    x: "50%",
                                    y: "74%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                // {
                                //     type: "divider",
                                //     x: "50%",
                                //     y: "75%",
                                //     width: "80%",
                                //     zIndex: 10
                                // }
                            ]
                        },
                        // page 5
                        {
                            id: "page-5",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Delhi welcomed us with something terrible.",
                                    x: "50%",
                                    y: "9%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "As the train slowly entered the city, I saw something I wish I never had to see. Near the tracks, a man was lying motionless, bleeding heavily from his head. Dark red blood had spread across the ground beside him. I still don’t know what happened to him — whether it was an accident, violence, or something worse. The train moved slowly past him, forcing us to witness every second of it. That image stayed in my head silently after that.",
                                    x: "50%",
                                    y: "32%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/delhi.webp",
                                    x: "30%",
                                    y: "70%",
                                    width: "75%",
                                    zIndex: 9
                                },

                                {
                                    type: "quote",
                                    content:
                                        "Some memories do not leave when the train moves forward.",
                                    x: "70%",
                                    y: "60%",
                                    width: "65%",
                                    textAlign: "left",
                                    rotation: "-8deg",
                                    scale: 0.9,
                                    zIndex: 10
                                }
                            ]
                        },
                        // page 6
                        {
                            id: "page-6",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Chaos Near the Tracks",
                                    x: "50%",
                                    y: "7%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "Delhi itself felt harsh to my eyes. Near the railway tracks and stations, I saw people openly using the sides of the tracks as toilets. Dirt, smell, and chaos everywhere. It felt shocking and uncomfortable because it was so different from what I had imagined.",
                                    x: "33%",
                                    y: "26%",
                                    width: "59%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/poo.webp",
                                    x: "80%",
                                    y: "25%",
                                    width: "50%",
                                    zIndex: 9
                                },

                                {
                                    type: "divider",
                                    x: "50%",
                                    y: "44%",
                                    width: "65%",
                                    zIndex: 10
                                },

                                {
                                    type: "title",
                                    content: "Punjab Stops",
                                    x: "50%",
                                    y: "49%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "Later, somewhere in Punjab, the train stopped for a long time. I remember seeing Punjabis properly for the first time — the turbans, long beards, the way they carried themselves. Everything felt unfamiliar, but interesting at the same time.",
                                    x: "50%",
                                    y: "62%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "divider",
                                    x: "50%",
                                    y: "73%",
                                    width: "65%",
                                    zIndex: 10
                                },

                                {
                                    type: "title",
                                    content: "Yafi's Power Bank",
                                    x: "50%",
                                    y: "78%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content: "Yafi proudly carried the “best” power bank for the whole journey, but when we finally tried it on the train, it turned out to be completely dead — and the rest of the trip became endless trolling and laughter.",
                                    x: "50%",
                                    y: "88%",
                                    width: "90%",
                                    zIndex: 10
                                },

                            ]
                        },
                        // page 7
                        {
                            id: "page-7",
                            blocks: [
                                {
                                    type: "title",
                                    content: "The Cold Wind at Pathankot",
                                    x: "50%",
                                    y: "7%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "quote",
                                    content:
                                        "After suffering in endless heat for days, that wind felt like freedom.",
                                    x: "74%",
                                    y: "26%",
                                    width: "46%",
                                    textAlign: "center",
                                    rotation: "-4deg",
                                    scale: 0.92,
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "As we passed near a military area, the weather changed suddenly, almost magically. The burning sun disappeared behind clouds, and a strong cold wind rushed into the train.",
                                    x: "28%",
                                    y: "27%",
                                    width: "48%",
                                    textAlign: "left",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "All four of us immediately stood up and went near the doorway just to feel it properly. We stood there smiling, silent for once, letting the cold air hit our faces while the train kept moving forward. For the first time in days, the journey felt light again.",
                                    x: "50%",
                                    y: "52%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "divider",
                                    x: "50%",
                                    y: "62%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "title",
                                    content: "Welcome to Pathankot",
                                    x: "50%",
                                    y: "67%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content:
                                        "After surviving heat, hunger, and endless train travel, cow dung became my final enemy. One funny memory still makes me laugh whenever I think about it. The moment we stepped out at Pathankot, I walked confidently for barely a minute and directly stepped into fresh cow dung. Everyone laughed like crazy, including me. Somehow, that became our real welcome to North India.",
                                    x: "50%",
                                    y: "83%",
                                    width: "90%",
                                    zIndex: 10
                                }
                            ]
                        },
                        // page 8
                        {
                            id: "page-8",
                            blocks: [
                                {
                                    type: "title",
                                    content: "First Glimpse of the Himalayas",
                                    x: "50%",
                                    y: "10%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/mountain.webp",
                                    x: "50%",
                                    y: "25%",
                                    width: "80%",
                                    zIndex: 9
                                },

                                {
                                    type: "text",
                                    content: "The bus ride from Pathankot to Dharamshala became one of the most unforgettable parts of the journey. Hours passed, everyone slowly fell asleep from exhaustion, but me and Adhil stayed awake — because for the first time in my life, I was watching the distant Himalayan peaks appear outside the window like something from a movie.",
                                    x: "50%",
                                    y: "52%",
                                    width: "75%",
                                    zIndex: 10
                                },
                                {
                                    type: "text",
                                    content: "I still remember spotting a mountain far away and refusing to even turn my head for a second, afraid the perfect angle would disappear before I could show anyone. As the road continued endlessly through the hills, the mountains slowly stopped feeling unreal — and started feeling alive.",
                                    x: "50%",
                                    y: "80%",
                                    width: "90%",
                                    zIndex: 10
                                }
                            ]
                        },
                        // page 9
                        {
                            id: "page-9",
                            blocks: [
                                {
                                    type: "title",
                                    content: "A Hotel Instead of a Tent",
                                    x: "50%",
                                    y: "10%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content: "When we finally reached Dharamshala, reality felt different from the dream. We thought this trip would be simple — just tents, mountains, and almost no money — but the busy streets, endless vehicles, and crowded city gave us no place to stay the way we imagined.",
                                    x: "50%",
                                    y: "25%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/park.webp",
                                    x: "50%",
                                    y: "50%",
                                    width: "90%",
                                    zIndex: 9
                                },

                                {
                                    type: "text",
                                    content: "We dropped our heavy bags for the first time inside Gandhi Park and sat there quietly, feeling strangely light after the long journey. For a while we talked, rested, argued about where to pitch the tent, split up to search for possibilities, and by the end of the night, our “survival trip” slowly turned into four tired travelers sharing a small ₹1000 room in the city.",
                                    x: "50%",
                                    y: "80%",
                                    width: "90%",
                                    zIndex: 10
                                }
                            ]
                        },
                        // page 10
                        {
                            id: "page-10",
                            blocks: [
                                {
                                    type: "title",
                                    content: "Exploring Dharamshala",
                                    x: "50%",
                                    y: "10%",
                                    width: "90%",
                                    textAlign: "center",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content: "That morning in Dharamshala felt calm and slow — walking through the streets, eating Lays on the way to the State War Memorial.",
                                    x: "29%",
                                    y: "33%",
                                    width: "38%",
                                    zIndex: 10
                                },

                                {
                                    type: "text",
                                    content: "Then later stepping into the famous Himachal Pradesh Cricket Association Stadium for the first time in my life. There was no match that day, yet the stadium was overflowing with people, and beyond the crowd stood the silent mountains watching everything.",
                                    x: "50%",
                                    y: "60%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "image",
                                    src: "/assets/army.webp",
                                    x: "76%",
                                    y: "32%",
                                    width: "40%",
                                    zIndex: 9
                                },

                                {
                                    type: "image",
                                    src: "/assets/stadium.webp",
                                    x: "50%",
                                    y: "81%",
                                    width: "90%",
                                    zIndex: 10
                                },
                            ]
                        },
                        // page 11
                        {
                            id: "page-11",
                            blocks: [
                                {
                                    type: "text",
                                    content: "But one moment stayed with me more than the stadium itself — finding a quiet corner to pray in a place where we felt unfamiliar and unnoticed. Two of us stood guard while the other two prayed on Adhi’s small musalla, carrying a strange mix of fear, peace, and belonging before we finally took the bus back down the Dharamshala Town.",
                                    x: "50%",
                                    y: "20%",
                                    width: "90%",
                                    zIndex: 10
                                },

                                {
                                    type: "divider",
                                    x: "50%",
                                    y: "35%",
                                    width: "70%",
                                    zIndex: 10
                                }

                            ]
                        },

                    ]
                }
            ]
        }
    },
];

