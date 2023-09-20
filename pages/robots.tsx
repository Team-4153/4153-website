import {Card, Image, Text, Badge, Button, Group, useMantineTheme, Modal, Stepper} from '@mantine/core';
import {useState} from "react";
import Link from "next/link";

enum EStatus {
    Ongoing,
    Success,
    Fail,
}

const robotsList = [
    {
        name:"Oppie",
        year:"2012",
        img:"/2012.JPG",
        description:"Our first robot from 2012",
        game:"Rebound Rumble",
        badges:[
        ],
        stage:{
            state:4,
            status:EStatus.Success
        }
    },
    {
        name:"Bradbury",
        year:"2013",
        img:"/2013.png",
        description:"Frisbee launcher",
        game:"Ultimate Ascent",
        badges:[
            {
                name:"Chairman's",
                color:"teal"
            }
        ],
        stage:{
            state:2,
            status:EStatus.Success
        }
    },
    {
        name:"Feynbot",
        year:"2014",
        img:"/2014.png",
        description:"Yoga ball launcher",
        game:"Aerial Assist",
        badges:[
            {
                name:"World's",
                color:"yellow"
            }
        ],
        stage:{
            state:6,
            status:EStatus.Fail
        }
    },
    {
        name:"Fermi",
        year:"2015",
        img:"/2015.png",
        description:"Tote stacker",
        game:"Recycle Rush",
        badges:[
            {
                name:"World's",
                color:"yellow"
            }
        ],
        stage:{
            state:6,
            status:EStatus.Fail
        }
    },
    {
        name:"Szilard",
        year:"2016",
        img:"/2016.JPG",
        description:"Rough terrain crosser, ball shooter",
        game:"Stringhold",
        badges:[
            {
                name:"World's",
                color:"yellow"
            }
        ],
        stage:{
            state:6,
            status:EStatus.Fail
        }
    },
    {
        name:"Test 2",
        year:"2017",
        img:"/2017.JPG",
        description:"Wiffle balls thrower, Rope climber",
        game:"Steamworks",
        badges:[
            {
                name:"World's",
                color:"yellow"
            }
        ],
        stage:{
            state:6,
            status:EStatus.Fail
        }
    },
    {
        name:"Test 2",
        year:"2019",
        img:"/2019.JPG",
        description:"Did stuff",
        game:"Deep Space",
        badges:[
            {
                name:"World's",
                color:"yellow"
            }
        ],
        stage:{
            state:6,
            status:EStatus.Fail
        }
    }
]

export default function robots(){
    return(
        <div className="flex justify-center">
            <div className="grid gap-4 grid-cols-3 py-12 w-[60%] items-center">
                { robotsList.map((value) => {
                    const [opened, setOpened] = useState(false);
                    const theme = useMantineTheme();

                    const secondaryColor = theme.colorScheme === 'dark'
                        ? theme.colors.dark[1]
                        : theme.colors.gray[7];
                    return(
                        <div key={value.name} style={{ width: 340, margin: 'auto' }}>
                            <Card shadow="sm" p="lg" className='transition ease-in-out hover:scale-110 duration-200'>
                                <Card.Section>
                                    <Image src={value.img} height={160} alt="Robot" />
                                </Card.Section>

                                <div className="flex">
                                    <div className="basis-1/2">
                                        <Text weight={500}>{value.name}</Text>
                                    </div>
                                    <div className="basis-1/2">
                                        {value.badges.map((value1)=>{return(
                                            <div key={value1.name} className="flex justify-end py-0.5">
                                                <Badge variant="filled" color={value1.color}>{value1.name}</Badge>
                                            </div>
                                        )})}
                                    </div>
                                </div>


                                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                                    {value.description}
                                </Text>

                                <Button variant="light" className='outline outline-1 bg-blue-100 hover:bg-blue-300 hover:text-blue-900' onClick={() => setOpened(true)} color="blue" fullWidth style={{ marginTop: 14 }}>
                                    Learn More
                                </Button>
                            </Card>
                            <Modal
                                opened={opened}
                                onClose={() => setOpened(false)}
                                size="55%"
                            >
                                <div className="flex px-6">
                                    <div className="basis-1/2">
                                        <h1 className="text-3xl py-2">
                                            Name: {value.name}
                                        </h1>
                                        <p>Year: {value.year}</p>
                                        <p>Game: {value.game}</p>
                                        <p>Description: {value.description}</p>
                                    </div>
                                    <div className="basis-1/2">
                                        <Stepper active={value.stage.state} orientation="vertical">
                                            <Stepper.Step label="Design" description="Planning the robot"/>
                                            <Stepper.Step label="Prototyping" description="Testing Ideas"/>
                                            <Stepper.Step label="Build" description="Building a V1 Robot for competition"/>
                                            <Stepper.Step label="District Qualifiers" description="First level of competition"/>
                                            <Stepper.Step label="District Finals" description="Second Level of competition"/>
                                            <Stepper.Step label="FIRST Championship" description="Highest level of competition"/>
                                        </Stepper>
                                    </div>
                                </div>
                            </Modal>
                        </div>)
                })}
            </div>
        </div>
)
}