import { Avatar, Button, Flex, Heading, Icon, Tag, Text, Arrow } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import Link from 'next/link';  // Import Link for navigation

export async function generateMetadata() {
    const title = "Profile"; // Ganti dengan judul yang sesuai
    const description = "This is the profile page."; // Ganti dengan deskripsi yang sesuai
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/about`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
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
        name: "John Doe",
        role: "Developer",
        location: "City",
        languages: ["English"],
        avatar: "/images/p3.png"
    };

    const about = {
        intro: {
            title: "Introduction",
            display: true,
            description: "This is the introduction."
        },
        work: {
            title: "Work Experience",
            display: true,
            experiences: [
                { company: "Company A", role: "Role A" },
                { company: "Company B", role: "Role B" }
            ]
        },
        studies: {
            title: "Education",
            display: true,
            institutions: [
                { name: "Institution A" },
                { name: "Institution B" }
            ]
        },
        technical: {
            title: "Technical Skills",
            display: true,
            skills: [
                { title: "Skill A", description: "Description A" },
                { title: "Skill B", description: "Description B" }
            ]
        },
        tableOfContent: {
            display: true,
            subItems: true
        }
    };

    const structure = [
        {
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        {
            title: about.work.title,
            display: about.work.display,
            items: about.work.experiences.map(experience => experience.company)
        },
        {
            title: about.studies.title,
            display: about.studies.display,
            items: about.studies.institutions.map(institution => institution.name)
        },
        {
            title: about.technical.title,
            display: about.technical.display,
            items: about.technical.skills.map(skill => skill.title)
        },
    ];

    return (
        <Flex fillWidth maxWidth="m" direction="column" style={{ position: 'relative' }}>
            {/* Tombol Back To Home dengan posisi fixed */}
            <Link href="/">
                <Flex
                    style={{
                        position: 'fixed',
                        top: '3rem', // Jarak dari atas
                        left: '3rem', // Jarak dari kiri
                        zIndex: 1000, // Pastikan tombol berada di atas konten lain
                    }}
                    marginBottom="m">
                    <Button
                        id="readDocs"
                        href="/home"
                        variant="secondary">
                        <Flex alignItems="center">
                            Back To Home
                            <Arrow trigger="#readDocs" />
                        </Flex>
                    </Button>
                </Flex>
            </Link>
            
            {about.tableOfContent.display && (
                <Flex
                    style={{ position: 'fixed', left: '0', top: '50%', transform: 'translateY(-50%)', marginRight: '64px' }}
                    paddingLeft="24" // Tambahkan padding kiri di sini
                    gap="32"
                    direction="column" hide="s">
                    <TableOfContents structure={structure} about={about} />
                </Flex>
            )}

            <Flex fillWidth mobileDirection="column" justifyContent="center" className={styles.flexContainer}>
                <Flex
                    minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                    flex={3} direction="column" alignItems="center" marginTop="128"> {/* Mengganti "4xl" dengan 4 */}
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
                <Flex className={`${styles.blockAlign} ${styles.top}`} fillWidth flex={9} maxWidth={40} direction="column"> {/* Menggabungkan className di sini */}
                    <Heading className={styles.textAlign} variant="display-strong-xl">
                        {person.name}
                    </Heading>
                    <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
                        {person.role}
                    </Text>
                    
                    {about.intro.display && (
                        <Flex direction="column" textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                            {about.intro.description}
                        </Flex>
                    )}

                    {about.work.display && (
                        <Flex direction="column" fillWidth gap="l" marginBottom="40">
                            <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                                {about.work.title}
                            </Heading>
                            {about.work.experiences.map((experience, index) => (
                                <Flex key={index} fillWidth direction="column">
                                    <Text variant="heading-strong-l">
                                        {experience.company}
                                    </Text>
                                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                                        {experience.role}
                                    </Text>
                                </Flex>
                            ))}
                        </Flex>
                    )}

                    {about.studies.display && (
                        <Flex direction="column" fillWidth gap="l" marginBottom="40">
                            <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                                {about.studies.title}
                            </Heading>
                            {about.studies.institutions.map((institution, index) => (
                                <Flex key={index} fillWidth direction="column">
                                    <Text variant="heading-strong-l">
                                        {institution.name}
                                    </Text>
                                </Flex>
                            ))}
                        </Flex>
                    )}

                    {about.technical.display && (
                        <Flex direction="column" fillWidth gap="l" marginBottom="40">
                            <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="m">
                                {about.technical.title}
                            </Heading>
                            {about.technical.skills.map((skill, index) => (
                                <Flex key={index} fillWidth direction="column">
                                    <Text variant="heading-strong-l">
                                        {skill.title}
                                    </Text>
                                    {skill.description && (
                                        <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                                            {skill.description}
                                        </Text>
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
