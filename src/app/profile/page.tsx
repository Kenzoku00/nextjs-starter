import { Avatar, Button, Flex, Heading, Icon, Tag, Text, Arrow, SmartImage, LetterFx, InlineCode, } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import Link from 'next/link';

export async function generateMetadata() {
    const title = "Profile Dao";
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
                        { title: about.intro.title, display: about.intro.display, items: ["Introduction"] },
                    ]} 
                    about={about} />
                </Flex>
            )}

            <Flex fillWidth mobileDirection="column" justifyContent="center" className={styles.flexContainer}>
                <Flex
                    minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                    flex={3} direction="column" alignItems="center" marginTop="128">
                    <Avatar src={person.avatar} size="xl" />
                    <Flex gap="8" alignItems="center">
                        <Icon onBackground="accent-weak" name="globe" />
                        {person.location}
                    </Flex>
                    {person.languages.length > 0 && (
                        <Flex wrap gap="8">
                            {person.languages.map((language, index) => (
                                <Tag key={index} size="l">
                                    {language}
                                </Tag>
                            ))}
                        </Flex>
                    )}
                </Flex>

                <Flex className={`${styles.blockAlign} ${styles.top}`} fillWidth flex={9} maxWidth={40} direction="column" id="Introduction">
                    <Heading className={styles.textAlign} variant="display-strong-xl">
                        {person.name}
                    </Heading>
                    <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak" marginTop='s'>
                        {person.role}
                    </Text>

                    {about.intro.display && (
                        <Flex direction="column" textVariant="body-default-l" fillWidth gap="m" marginBottom="xl" marginTop='s' className={styles.description}>
                            {about.intro.description}
                        </Flex>
                    )}

                </Flex>
            </Flex>
        </Flex>
    );
}
