"use client";

import React from 'react';
import { Flex, Grid, Text, Button, Icon, Avatar } from '@/once-ui/components';
import Link from 'next/link';

export default function Profile() {
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

    // Data diri
    const personalInfo = {
        name: "Ilyasa Daffa Saskara",
        bio: "Web Developer & Designer",
        location: "Jawa Timur, Indonesia",
        email: "ilyasadaffa2197@gmail.com",
        website: "www.ilyasadaffa.com",
        github: "https://github.com/Kenzoku00",
        linkedin: "https://www.linkedin.com/in/ilyasadaffasaskara/",
    };

    return (
        <Flex
            fillWidth paddingTop="l" paddingX="l"
            direction="column" alignItems="center" flex={1}>
            <Flex
                as="main"
                direction="column" justifyContent="flex-start"
                fillWidth fillHeight padding="l" gap="l">
                <Grid
                    radius="l"
                    border="neutral-medium"
                    borderStyle="solid-1"
                    columns="repeat(3, 1fr)"
                    tabletColumns="1col"
                    mobileColumns="1col"
                    fillWidth>
                    {links.map((link) => (
                        <Link
                            style={{ padding: 'var(--responsive-space-l)' }}
                            key={link.href}
                            href={link.href}>
                            <Flex
                                fillWidth paddingY="8" gap="8"
                                direction="column">
                                <Flex
                                    fillWidth gap="12"
                                    alignItems="center">
                                    <Text
                                        variant="body-strong-m" onBackground="neutral-strong">
                                        {link.title}
                                    </Text>
                                    <Icon size="s" name="arrowUpRight" />
                                </Flex>
                                <Text
                                    variant="body-default-s" onBackground="neutral-weak">
                                    {link.description}
                                </Text>
                            </Flex>
                        </Link>
                    ))}
                </Grid>
                <Flex
                    as="section"
                    marginTop="l"
                    fillWidth
                    gap="l"
                >
                    {/* Kolom Kiri - Foto dan Lokasi */}
                    <Flex
                        direction="column"
                        alignItems="center"
                        gap="8"
                        flex={1} // Membuat kolom kiri memiliki ukuran fleksibel
                    >
                        <Avatar
                            src="/images/p3.png"
                            size="xl"
                        />
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            📍 {personalInfo.location}
                        </Text>
                    </Flex>

                    {/* Kolom Kanan - Nama, Bio, dan Tombol Sosial */}
                    <Flex
                        direction="column"
                        flex={2} // Kolom kanan lebih besar
                        justifyContent="flex-start"
                        gap="8"
                    >
                        <Text variant="body-strong-l" onBackground="neutral-strong">
                            {personalInfo.name}
                        </Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            {personalInfo.bio}
                        </Text>

                        <Flex gap="12">
                            <Button
                                href={personalInfo.github}
                                prefixIcon="github"
                                size="s"
                                variant="tertiary"
                            >
                                GitHub
                            </Button>
                            <Button
                                href={personalInfo.linkedin}
                                prefixIcon="linkedin"
                                size="s"
                                variant="tertiary"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                href={`mailto:${personalInfo.email}`}
                                prefixIcon="email"
                                size="s"
                                variant="tertiary"
                            >
                                Email
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                as="footer"
                position="relative"
                fillWidth paddingX="l" paddingY="m"
                justifyContent="space-between">
                <Text
                    variant="body-default-s" onBackground="neutral-weak">
                    © 2024 Once UI, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
                </Text>
                <Flex
                    gap="12">
                    <Button
                        href="https://github.com/Kenzoku00"
                        prefixIcon="github" size="s" variant="tertiary">
                        GitHub
                    </Button>
                    <Button
                        href="https://discord.com/invite/5EyAQ4eNdS"
                        prefixIcon="discord" size="s" variant="tertiary">
                        Discord
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
}
