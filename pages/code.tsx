import Link from "next/link";
import { BrandGithub } from "tabler-icons-react";
import Image from "next/image";


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
                            This code is the core of our 2022 competition robot. It uses a MKII swerve drive and the code is available to all teams on GitHub
                        </p>
                        <div className="h-20"/>
                        <div className="w-full h-fit flex justify-center items-center">
                                <button className="hover:scale-110 transition duration-0 hover:duration-150 relative flex w-fit items-center justify-center object-bottom px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-sm">
                                    <BrandGithub className="float-left h-full"/>
                                    <div className="w-2"></div>
                                    <Link href={"https://github.com/Team-4153/Basic-Swerve"}>
                                        <a target="_blank" className="hover:text-gray-300 inline underline">Access GitHub Repository</a>
                                    </Link> 
                                </button>
                        </div>
                        
                    </div>
                    <div className="basis-1/3 px-6 ">
                      <Image src="/placeholder.png" height="325" width="560" alt="placeholder.png"/>
                    </div>
                </div>
                <p className="text-black uppercase border-t-2 border-b-2 text-primary-600 font-light py-6 text-3xl ">
                    Autonomous
                </p>
                <div className="flex py-6 flex-row mx-60">
                    <div className="basis-1/3 px-6 border-r-2">
                    <Image src="/placeholder.png" height="325" width="560" alt="placeholder.png"/>
                    </div>
                    <div className="basis-2/3 px-6">
                        <p>
                            This is the base code that we use to build autonomous routines on top of. It really isn&apos;t for any game in particular but simply a starting point
                        </p>
                      <div className="h-20"/>
                      <div className="w-full h-fit flex justify-center items-center">
                        <button className="hover:scale-110 transition duration-0 hover:duration-150 relative flex w-fit items-center justify-center object-bottom px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-sm">
                          <BrandGithub className="float-left h-full"/>
                          <div className="w-2"></div>
                          <Link href={"https://github.com/Team-4153/Basic-Swerve"}>
                            <a target="_blank" className="hover:text-gray-300 inline underline">Access GitHub Repository</a>
                          </Link>
                        </button>
                      </div>
                    </div>
                </div>
                <p className="text-black uppercase border-b-2 text-primary-600 border-t-2 font-light py-6 text-3xl ">
                    Vision
                </p>
                <div className="flex py-6 flex-row mx-60">
                <div className="basis-2/3 px-6 border-r-2">
                  <p>
                    This is the base code that we use to give our robots vision capabilities
                  </p>
                  <div className="h-20"/>
                  <div className="w-full h-fit flex justify-center items-center">
                    <button className="hover:scale-110 transition duration-0 hover:duration-150 relative flex w-fit items-center justify-center object-bottom px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-sm">
                      <BrandGithub className="float-left h-full"/>
                      <div className="w-2"></div>
                      <Link href={"https://github.com/Team-4153/Basic-Swerve"}>
                        <a target="_blank" className="hover:text-gray-300 inline underline">Access GitHub Repository</a>
                      </Link>
                    </button>
                  </div>
                    </div>
                    <div className="basis-1/3 px-6 ">
                      <Image src="/placeholder.png" height="325" width="560" alt="placeholder.png"/>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        )
}