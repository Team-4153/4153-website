import React from 'react';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from "next/link";
import SiteHeader from "../components/Header";
import Head from "next/head";

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

export default function ServerErrorTitle() {
  const { classes } = useStyles();
  
  return (
    <div>
      <Head>
        <title>500</title>
        <meta name="description" content="Internal Server Error" />
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
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Uh Oh</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          It appears our website may have met the same fate as our climber. Try again later or return to our Home page.
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