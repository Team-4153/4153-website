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
      <Head>
        <title>404</title>
        <meta name="description" content="Resource not found" />
        <link rel="icon" href="/globe_notext.png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YYB5P642PC}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYB5P642PC', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <SiteHeader/>
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Unfortunately, this is only a 404 page. You may have mistyped the address, clicked on a link that hasn&apos;t been implemented yet or the page has
          been moved to another URL.
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