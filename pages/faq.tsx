import React from 'react';
import { Container, Title, Accordion, createStyles } from '@mantine/core';
import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import Head from "next/head";

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef('control');
  
  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },
    
    title: {
      fontWeight: 400,
      marginBottom: theme.spacing.xl * 1.5,
    },
    
    control: {
      ref: control,
      
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    
    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,
      
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },
    
    itemOpened: {
      [`& .${control}`]: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },
    },
  };
});

const questions = [
  {
    Q:"What is FIRST, FRC and Project Y?",
    A:"FIRST is a global non-profit with the goal of expanding STEM by providing students with hands-on, real-world, engineering experience. FRC is FIRST's high school level program where teams of students have 6 weeks to design, build, and test a robot to achieve a unique challenge every year. Project Y is a FRC team from Los Alamos NM"
  },
  {
    Q:"How can I join as a student?",
    A:"Look for a meeting time, show up"
  },
  {
    Q:"What are the benefits of participating in FRC and FIRST?",
    A:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. Adipiscing bibendum est ultricies integer. Sit amet venenatis urna cursus eget. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Vitae auctor eu augue ut lectus arcu bibendum. Et netus et malesuada fames ac turpis egestas maecenas. Ac felis donec et odio pellentesque diam. Neque laoreet suspendisse interdum consectetur. Purus gravida quis blandit turpis cursus."
  },
  {
    Q:"How can I get involved as a parent/other adult?",
    A:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non. Adipiscing bibendum est ultricies integer. Sit amet venenatis urna cursus eget. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Vitae auctor eu augue ut lectus arcu bibendum. Et netus et malesuada fames ac turpis egestas maecenas. Ac felis donec et odio pellentesque diam. Neque laoreet suspendisse interdum consectetur. Purus gravida quis blandit turpis cursus."
  },
  {
    Q:"I'm a member of the press that wants to run a story.",
    A:"Read our press kit which is linked in the Resources section of our page"
  },
  {
    Q:"Are there any costs associated with membership in the team?",
    A:"Yes. We charge a $300/season student fee to cover materials, competition registration and other things. You may be asked to pay additional fees for every competition that your student attends. Financial aid is available"
  }
]

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>
      
      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        {questions.map((question, _key)=>(
          <Accordion.Item key={_key} label={question.Q}>
            {question.A}
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
export default function Faq() {
  return(
    <div className="bg-gradient-to-br min-h-screen from-white to-sky-50">
      <Head>
        <title>Project Y - FAQ</title>
        <meta name="description" content="FIRST Team 4153 Project Y" />
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
      <FaqSimple/>
      <SiteFooter/>
    </div>
  )
}