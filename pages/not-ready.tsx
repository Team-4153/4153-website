import React from 'react';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from "next/link";
import Head from "next/head";
import SiteHeader from "../components/Header";

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },
}));

export default function NotFoundTitle() {
    const { classes } = useStyles();

    return (
        <div>
            <Container className={classes.root}>
                <Title className={classes.title}>You have found a secret place.</Title>
                <Text color="dimmed" size="lg" align="center" className={classes.description}>
                    Unfortunately, this page isn&apos;t ready for the public quite yet. It may be implemented on our <Link href={"https://new.team4153.org"}><a className="hover:text-primary inline underline" target="_blank">Beta Implementation</a></Link>
                </Text>
                <Group position="center">
                    <Link href='/'>
                        <Button variant="subtle" size="md">
                            Take me back to home page
                        </Button>
                    </Link>
                </Group>
            </Container>
        </div>
    );
}