import SiteHeader from "../components/Header";
import SiteFooter from "../components/Footer";
import {BrandDiscord, BrandTwitch, BrandYoutube, Calendar} from "tabler-icons-react";
import React from "react";
import { createStyles, Text } from '@mantine/core';


const programs =
  [
    {
      name:"Online Learning Network",
      icon:BrandDiscord,
      description:"An online learning network for students, by students"
    },
    {
      name:"Live Workshops",
      icon:BrandTwitch,
      description: "Live workshops on how to do basic things for an FRC robot"
    },
    {
      name:"Recorded Lessons",
      icon:BrandYoutube,
      description: "Recorded lessons to help teams get started on their robot"
    },
    {
      name:"Live Events",
      icon: Calendar,
      description: "In person events for educators and students. Check our calendar."
    }
  ]
const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, #22d3ee 0%, #0ea5e9 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,
    
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  
  title: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },
  
  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  
  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },
  
  stat: {
    flex: 1,
    
    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      
      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}

export function StatsGroup({ data }: StatsGroupProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}


export default function Outreach(){
  return(
    <div className="bg-gradient-to-br from-white to-sky-100">
      <div className="sticky z-50 top-0">
        <SiteHeader title="Outreach" description="Team 4153's outreach operations and community relations"/>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">Outreach</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We&apos;re Expanding STEM in New Mexico
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
      
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {programs.map((program) => (
                <div key={program.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white">
                      <program.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{program.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{program.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <hr/>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center pb-6">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">By The Numbers</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We&apos;ve Accomplished So Far
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <StatsGroup
            data=
              {
                [
                  {
                    title:"Teams Founded",
                    stats:"XX",
                    description:""
                  },
                  {
                    title:"Students introduced to FIRST",
                    stats:"XX",
                    description:""
                  },
                  {
                    stats:"$XXK",
                    title:"Raised for STEM Education",
                    description:""
                  }
                ]
              }
          />
        </div>
      </div>
      <div className="w-full py-12 bottom-2 flex flex-col gap-4 justify-center items-center py-6">
        <div className="flex h-60 gap-4 w-[80%] flex-row">
          <img className="bg-blue-400 rounded-2xl basis-1/4 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-6/12 h-full object-cover" src="/placeholder.png"/>
        </div>
        <div className="flex h-60 gap-4 w-[80%] flex-row-reverse">
          <img className="bg-blue-400 rounded-2xl basis-1/4 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-6/12 h-full object-cover" src="/placeholder.png"/>
        </div>
        <div className="flex h-60 gap-4 w-[80%] flex-row-reverse">
          <img className="bg-blue-400 rounded-2xl basis-[44.444444444%] h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-1/3 h-full object-cover" src="/placeholder.png"/>
          <img className="bg-blue-400 rounded-2xl basis-[22.222222222%] h-full object-cover" src="/placeholder.png"/>
        </div>
      </div>
      <SiteFooter/>
    </div>
  )
}