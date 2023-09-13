import React from 'react';
import { Container, Title, Accordion, createStyles } from '@mantine/core';

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
    A:"Check out our calendar for a meeting date and time and feel free to drop by! If you have any questions, please contact us!"
  },
  {
    Q:"What are the benefits of participating in FRC and FIRST?",
    A:"FIRST helps students connect with a vast community of students, mentors, colleges, and future employers. Beyond helping students make connections, FIRST also teaches them important technical and life skills including (but not limited to) machining, programming, business, design, leadership, and teamwork. FIRST alumni are much more likely to pursue careers in STEM in the future. The vast majority report a major increase in life skills like team work, collaboration, and time management. Additionally, FIRST provides numerous opportunities to such as millions of dollars in scholarships."
  },
  {
    Q:"How can I get involved as a parent/other adult?",
    A:"Parents are super important! Student’s parents are a vital part of our team as they help out with transportation, fundraising, other team activities, and last but not least, supporting their child. Parents are always welcome to stop into the shop to see what the team is up to. If you’re not a parent but you’d still like to get involved, Project Y is also always looking for more mentors! Our mentors help guide our students and help them develop students new skills. If you’re interested in being a mentor, please feel free to contact us"
  },
  {
    Q:"I'm a member of the press that wants to run a story.",
    A:"The team provides a general information packet for members of the public wanting to get involved and members of the press wanting to run a story. Check the Press Kit page under our Resources tab"
  },
  {
    Q:"Are there any costs associated with membership in the team?",
    A:"Yes. We charge a $100/season student fee to cover materials, competition registration and other things. You may be asked to pay additional fees for every competition that your student attends. Financial aid is available"
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
    <div>
      <FaqSimple/>
    </div>
  )
}