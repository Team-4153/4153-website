import React from 'react';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from "next/link";
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

export default function ServerErrorTitle() {
  const { classes } = useStyles();
  
  return (
    <div>
      <SiteHeader links={[{link:'/about',label:'About'}, {link:'/calendar',label:'events'}]}/>
      <Container className={classes.root}>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Uh Oh</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          It appears our website may have met the same fate as our climber. Try again later or <Link href={'/'}>return to our Home page</Link>
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md">
            Take me back to home page
          </Button>
        </Group>
      </Container>
    </div>
  );
}