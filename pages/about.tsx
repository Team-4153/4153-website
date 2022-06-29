import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import React from "react";
import {Container, createStyles, SimpleGrid, Text} from "@mantine/core";
import {Bulb, Compass, MapPin, School, Settings, Truck} from "tabler-icons-react";
import * as colors from "../tailwind.config"

const mission = [
  {
    icon: School,
    title: 'Education',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Bulb,
    title: 'Inspiration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Compass,
    title: 'Exploration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const info = [
  {
    icon: MapPin,
    title: 'Local',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: School,
    title: 'Student Led',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Compass,
    title: 'Exploration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },
  
  overlay: {
    position: 'absolute',
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(colors.theme.colors.primary["300"], 0.2)
        : theme.fn.rgba(colors.theme.colors.primary["300"], 0.2),
    zIndex: 1,
  },
  
  content: {
    position: 'relative',
    zIndex: 2,
  },
  
  icon: {
    color: theme.fn.rgba(colors.theme.colors.primary["500"], 1)
  },
  
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

export interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<React.ComponentProps<typeof Truck>>;
  title: string;
  description: string;
}

export function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();
  
  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />
      
      <div className={classes.content}>
        <Icon size={38} className={classes.icon} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <div className="divide-y-2">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-6">
              <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Our Mission</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <Container mt={30} mb={30} size="lg">
              <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
                {mission.map((item) => <Feature {...item} key={item.title} />)}
              </SimpleGrid>
            </Container>
          </div>
        </div>
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-6">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                Who We Are
              </p>
            </div>
            <img src="/placeholder.png" className="w-72 float-left"/>
            <p className="text-justify">
            FIRST Team 4153—Project Y is the Los Alamos High School robotics team. FIRST Team 4153 encourages students to explore STEM through practical application while making it fun. It is our mission to create a sustainable FIRST program that incorporates the ideals of science, engineering, mathematics, and technology (STEM) in our community and in neighboring communities. Through the promotion of team-building, technical skills, leadership, and hard work, we hope to develop interest and inspiration in STEM for students and mentors alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}