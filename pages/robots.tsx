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
        name:"Test",
        year:"4153",
        img:"/placeholder.png",
        description:"Did stuff",
        game:"Do something",
        badges:[
            {
                name:"Einstein",
                color:"yellow"
            },
            {
                name:"World's",
                color:"yellow"
            }
        ],
        cad:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        stage:{
            state:2,
            status:EStatus.Ongoing
        }
    },
    {
        name:"Test 1",
        year:"4153",
        img:"/placeholder.png",
        description:"Did stuff",
        game:"Do something",
        badges:[
            {
                name:"Chairman's",
                color:"teal"
            }
        ],
        cad:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        stage:{
            state:2,
            status:EStatus.Success
        }
    },
    {
        name:"Test 2",
        year:"4153",
        img:"/placeholder.png",
        description:"Did stuff",
        game:"Do something",
        badges:[
            {
                name:"World's",
                color:"yellow"
            }
        ],
        cad:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        stage:{
            state:2,
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
                            <Card shadow="sm" p="lg">
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

                                <Button variant="light" onClick={() => setOpened(true)} color="blue" fullWidth style={{ marginTop: 14 }}>
                                    Learn More
                                </Button>
                            </Card>
                            <Modal
                                opened={opened}
                                onClose={() => setOpened(false)}
                                title={value.name}
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
                                        <p>CAD: <Link href={value.cad}><a className="text-primary underline">Click Here</a></Link></p>
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