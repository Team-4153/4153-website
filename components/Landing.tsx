import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://cdn.discordapp.com/attachments/878062415797952523/1014750763819479040/2022_Project_Y_Backgroung.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'100vh',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
    fontFamily:'Cantarell'
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    paddingTop: "2rem",
    paddingBottom:"2rem",

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.md,
    },
    fontFamily: 'Verdana, sans-serif',
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function Landing() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Team 4153 Project Y</Title>
        <Text className={classes.description}>Bringing STEM to Los Alamos and Northern New Mexico for {new Date().getFullYear()-2011} Years</Text>
        <Link href={"#about"}><button className="rounded-full bg-gradient-to-r from-blue-500 to-primary"><div className="py-2 px-4">Learn More</div></button></Link>
      </Container>
    </div>
  );
}