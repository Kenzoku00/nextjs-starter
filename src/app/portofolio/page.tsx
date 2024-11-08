import { Avatar, Button, Flex, Heading, Icon, Tag, Text, Arrow, SmartImage, LetterFx, InlineCode, } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import Link from 'next/link';

export async function generateMetadata() {
    const title = "Portofolio | Ilyasa Daffa Saskara";
    const description = "This is the profile page.";
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    const links = [
		{
			href: "/home",
			title: "Home",
			description: "Halaman Awal.",
		},
		{
			href: "/profile",
			title: "Profile",
			description: "Data diri saya.",
		},
        {
			href: "/portofolio",
			title: "Portofolio",
			description: "Project Saya.",
		},
	];

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/about`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function About() {
    const person = {
        name: "Ilyasa Daffa Saskara",
        role: "Game Developer",
        location: "Jawa Timur, Indonesia",
        languages: ["English", "Indonesia"],
        avatar: "/images/p3.png"
    };

    const about = {
        intro: {
            title: "Introduction",
            display: true,
            description: "Saya pelajar yang sedang belajar dalam dunia pengembangan game. Saya selalu berusaha untuk belajar hal baru dan mengasah keterampilan saya. Saya juga ikut berkolaborasi dengan rekan - rekan dalam proyek untuk mengasah keterampilan dan membantu satu sama lain dalam suatu proyek."
        },
        work: {
            title: "Game Project",
            display: true,
            projects: [
                {
                    id: "guess-strange-animal",
                    title: "Guess Strange Animal",
                    date: "Jan 2024 - Jan 2024",
                    role: "Game Design",
                    description: [
                        "Game created for the Global Game Jam Malang 2024 event.",
                        "Developed within 3 days; my role was to source strange animal images and design hints for this game.",
                        "A puzzle game where players guess various strange animal images using the available hints."
                    ],
                    images: ["/images/GSA/GSA 6.png"]
                },
                {
                    id: "a-way-up",
                    title: "A Way Up",
                    date: "Jan 2024 - Feb 2024",
                    role: "Indie Developer",
                    description: [
                        "A 3D adventure game inspired by the game Only Up.",
                        "Players will explore a dream world filled with various obstacles to reach the highest point.",
                    ],
                    images: ["/images/AWU/AWU 1.png", "/images/AWU/AWU 2.png"]
                },
                {
                    id: "lunc-zombies",
                    title: "Lunc Zombies",
                    date: "Mar 2024 - May 2024",
                    role: "Programmer",
                    description: [
                        "A platformer adventure game for Windows.",
                        "Players have the mission to eliminate all enemies and defeat the boss at each level.",
                    ],
                    images: ["/images/LZ/LZ 1.png", "/images/LZ/LZ 2.png"]
                },
                {
                    id: "bouncy-ball",
                    title: "Bouncy Ball",
                    date: "Jun 2024 - Agu 2024",
                    role: "Programmer",
                    description: [
                        "A 3D puzzle game for mobile platforms.",
                        "Players are required to complete levels by solving puzzles.",
                    ],
                    images: ["/images/BB/BB 1.png", "/images/BB/BB 2.png"]
                },
                {
                    id: "chess-empire",
                    title: "Chess Empire",
                    date: "Agu 2024 - Sep 2024",
                    role: "Designer",
                    description: [
                        "A game inspired by the game Shotgun King, developed for mobile platforms.",
                        "Features a deep and engaging lore, requiring players to upgrade weapons and gear to make it easier to clear each level.",
                    ],
                    images: ["/images/CE/CE 3.png", "/images/CE/CE 4.png"]
                },
                {
                    id: "lost-case",
                    title: "Lost Case",
                    date: "Oct 2024 - Sekarang",
                    role: "Programmer dan Designer",
                    description: [
                        "A story-based, puzzle, and horror game where players take on the role of a detective to solve a case.",
                        "Players must find clues to complete the game as the story progresses.",
                    ],
                    images: ["/images/LS/LS 1.png", "/images/LS/LS 2.png"]
                }
            ]
        },
        tableOfContent: {
            display: true,
            subItems: true
        }
    };

    return (
        <Flex fillWidth maxWidth="m" direction="column" style={{ position: 'relative' }}>
            <Link href="/">
                <Flex
                    style={{
                        position: 'fixed',
                        top: '3rem',
                        left: '3rem',
                        zIndex: 1000,
                    }}
                    marginBottom="m">
                    <Button
                        id="readDocs"
                        href="/home"
                        variant="secondary">
                        <Flex alignItems="center">
                            Back To Home
                            <Arrow trigger="#readDocs"/>
                        </Flex>
                    </Button>
                </Flex>
            </Link>

            {about.tableOfContent.display && (
                <Flex
                    style={{ position: 'fixed', left: '0', top: '50%', transform: 'translateY(-50%)', marginRight: '64px' }}
                    paddingLeft="24"
                    gap="32"
                    direction="column" hide="s">
                    <TableOfContents structure={[ 
                        { title: about.work.title, display: about.work.display, items: about.work.projects.map(project => project.id) }
                    ]} 
                    about={about} />
                </Flex>
            )}

            <Flex fillWidth mobileDirection="column" justifyContent="center" className={styles.flexContainer}>

                <Flex className={`${styles.blockAlign} ${styles.top}`} fillWidth flex={9} direction="column" id="Introduction" >
					
                    {about.work.display && (
                        <Flex direction="column" fillWidth gap="l" marginBottom="40" className={styles.rightleft}>
                            <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                                {about.work.title}
                            </Heading>
                            {about.work.projects.map((project, index) => (
                                <Flex key={index} fillWidth direction="column" marginBottom="32">
                                    <Flex justifyContent="space-between" alignItems="center">
                                        <Text variant="heading-strong-xl" id={project.id}>
                                            {project.title}
                                        </Text>
                                        <Text variant="body-default-s" style={{ color: 'gray' }}>
                                            {project.date}
                                        </Text>
                                    </Flex>
                                    <Text variant="body-default-s" style={{ color: 'blue', fontSize: '1em' }} marginBottom="s">
                                        {project.role}
                                    </Text>
                                    <Flex direction="column" gap="m" marginBottom="m">
                                        {project.description.map((point, idx) => (
                                            <Text key={idx} variant="body-default-m" style={{ fontSize: '1em' }}>
                                                <span style={{ color: 'blue', marginRight: '8px' }}>•</span>
                                                {point}
                                            </Text>
                                        ))}
                                    </Flex>
                                    {/* Render Gambar */}
                                    {project.images && project.images.length > 0 && (
                                        <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                                            {project.images.map((image, imgIdx) => (
                                                <Flex
                                                    key={imgIdx}
                                                    border="neutral-medium"
                                                    borderStyle="solid-1"
                                                    radius="m"
                                                    maxWidth={1920}
                                                    style={{ position: 'relative', width: '254px', height: '142px', marginRight: '16px' }}
                                                    className={styles.imagetop}
                                                >
                                                    <SmartImage
                                                        enlarge
                                                        radius="m"
                                                        alt={`${project.title} image ${imgIdx + 1}`}
                                                        src={image}
                                                        sizes="(max-width: 1920px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                </Flex>
                                            ))}
                                        </Flex>
                                    )}
                                </Flex>
                            ))}
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
