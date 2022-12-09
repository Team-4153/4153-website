import Link from "next/link";
import { BrandGithub } from "tabler-icons-react";


export default function code() {
    return(
        <div className=" w-full flex justify-center">
            <div>
            <div className="w-full bottom-2 flex flex-col justify-center items-center">
              <div className="lg:text-center flex-col justify-center">
                <p className="text-black uppercase border-b-2 text-primary-600 font-light py-6 text-3xl ">
                    Swerve
                </p>
                <div className="flex py-6 flex-row mx-60">
                <div className="basis-2/3 flex flex-col relative px-6 border-r-2">
                        <p>
                            This code is the core of our 2022 competition robot. It uses a MKII swerve drive and the code is availaible to all teams on GitHub
                        </p>
                        <br></br>
                        <div className="w-full h-fit flex justify-center items-center">
                                <button className="relative flex w-fit items-center justify-center object-bottom px-4 py-2 font-semibold text-sm bg-primary text-white rounded-full shadow-sm">
                                    <BrandGithub className="float-left h-full"/>
                                    <div className="w-2"></div>
                                    <Link href={"https://github.com/Team-4153/Basic-Swerve"}>
                                        <a target="_blank" className="hover:text-primary-600 inline underline">Access GitHub Repository</a>
                                    </Link> 
                                </button>
                        </div>
                        
                    </div>
                    <div className="basis-1/3 px-6 ">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tz5aEal91OM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <p className="text-black uppercase border-t-2 border-b-2 text-primary-600 font-light py-6 text-3xl ">
                    Drill Press
                </p>
                <div className="flex py-6 flex-row mx-60">
                    <div className="basis-1/3 px-6 border-r-2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/skLueD5ZWAg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="basis-2/3 px-6">
                        <p>
                            The drill press is a machine used for drilling holes vertically in a controlled manner. This training is recommended for all team members who will be working in the shop and on the robot throughout the year.
                        </p>
                        <p className="py-6 text-2xl font-light text-primary-500 uppercase">
                            Safety Forms
                        </p>
                        <p>
                            <Link href={"/drill-press.pdf"}><a target="_blank" className="hover:text-primary inline underline">Download Safety Form</a></Link>
                        </p>
                    </div>
                </div>
                <p className="text-black uppercase border-b-2 text-primary-600 border-t-2 font-light py-6 text-3xl ">
                    Band Saw
                </p>
                <div className="flex py-6 flex-row mx-60">
                <div className="basis-2/3 px-6 border-r-2">
                        <p>
                            Bandsaws are machines used for cutting stock down to size. There are 2 types of bandsaws, the vertical and the falling bandsaw. This video and document covers both.
                        </p>
                        <p className="py-6 text-2xl font-light text-primary-500 uppercase">
                            Safety Forms
                        </p>
                        <p>
                            <Link href={"/bandsaw.pdf"}><a target="_blank" className="hover:text-primary inline underline">Download Safety Form</a></Link>
                        </p>
                    </div>
                    <div className="basis-1/3 px-6 ">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BX8sc3GO6Uw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        )
}