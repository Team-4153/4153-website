import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import React from "react";
import {Container, createStyles, SimpleGrid, Text} from "@mantine/core";
import {Bulb, Certificate, Coin, Compass, MapPin, School, Settings, Truck} from "tabler-icons-react";
import {LightBulbIcon} from "@heroicons/react/outline";
import {StatsGroup} from "./outreach";
import Image from "next/image";

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
        ? theme.fn.rgba("#0ea5e9", 0.2)
        : theme.fn.rgba("#0ea5e9", 0.2),
    zIndex: 1,
  },
  
  content: {
    position: 'relative',
    zIndex: 2,
  },
  
  icon: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
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
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50">
      <div className="sticky z-50 top-0">
        <SiteHeader title="About" description="FRC Team 4153 Project Y"/>
      </div>
      <div className="divide-y-2">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center pb-6">
              <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Our Mission</h2>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien. Elit ut aliquam purus sit amet luctus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ac odio tempor orci dapibus ultrices in. Arcu ac tortor dignissim convallis aenean et tortor. Tempus quam pellentesque nec nam. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. In nisl nisi scelerisque eu ultrices. A arcu cursus vitae congue mauris rhoncus. Odio facilisis mauris sit amet massa. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Pharetra sit amet aliquam id diam maecenas ultricies mi eget. Ut eu sem integer vitae justo eget magna fermentum iaculis. Euismod lacinia at quis risus sed vulputate odio. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.
            </p>
          </div>
        </div>
        {/*<div className="py-12">*/}
        {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="lg:text-center pb-6">*/}
        {/*      <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Who we are</h2>*/}
        {/*      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">*/}
        {/*        Our Team by the Numbers*/}
        {/*      </p>*/}
        {/*      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">*/}
        {/*        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in*/}
        {/*        accusamus quisquam.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <StatsGroup*/}
        {/*      data=*/}
        {/*        {*/}
        {/*          [*/}
        {/*            {*/}
        {/*              stats:"10",*/}
        {/*              title:"Years of bringing STEM to NM",*/}
        {/*              description:""*/}
        {/*            },*/}
        {/*            {*/}
        {/*              stats:"11",*/}
        {/*              title:"Generations of Students",*/}
        {/*              description:""*/}
        {/*            },*/}
        {/*            {*/}
        {/*              stats:"500+",*/}
        {/*              title:"Lives Changed",*/}
        {/*              description:""*/}
        {/*            }*/}
        {/*          ]*/}
        {/*        }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <SiteFooter/>
    </div>
  )
}