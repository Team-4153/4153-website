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
                  This code a simple swerve drive written in LabVIEW using the control and command framework.
                  This code was developed for Neo motor with Spark Max controller. However, this can be changed in the Begin.vi (under the framework folder).
                  The PID is on the RoboRIO, so any motor accepting a -1 to 1 drive command can be used with this code.
                  The design is a MKII swerve drive with an absolute encoder for the orientation of the wheels.
                  The main elements for the swerve drive can be found in the Swerve {">"} Implementation {">"} Infrastructure folder in the SwerveDrive2.0.vi.
                  In SwerveDrive2.0.vi, there are 4 constant that represent the value of the encoder when teh wheels are facing forward. Those need to be updated after a swerve module is assembled.

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
                    <Image src="https://opengraph.githubassets.com/02d9aa7a8a37532f33015b3bc5c8074e98725dba3f044477c446c886f248b384/Team-4153/Basic-Swerve" height="325" width="560" alt="https://opengraph.githubassets.com/02d9aa7a8a37532f33015b3bc5c8074e98725dba3f044477c446c886f248b384/Team-4153/Basic-Swerve"/>
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
                      This code is an example of autonomous driving using the LabVIEW command and control framework.
                      It uses a command to move the robot either to a specified distance or angle using a swerve drive.
                      To drive multiple segment, a loop can be implemented, using the while loop that check that the command is complete before moving to the next action.
                      Note that the implementation  of the {'"'}check for new command{'"'} VI had to be modified for the wait on successful completion to work. However, this will be corrected in the 2023 version of the framework.
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
                  This code is a LabVIEW example of a code that detect retro-reflective tape using a green LED ring. It controls a servo so that its arm is always pointing at the detected target.
                </p>
                <div className="h-20"/>
                <div className="w-full h-fit flex justify-center items-center">
                  <button className="hover:scale-110 transition duration-0 hover:duration-150 relative flex w-fit items-center justify-center object-bottom px-4 py-2 font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-sm">
                    <BrandGithub className="float-left h-full"/>
                    <div className="w-2"></div>
                    <Link href={"https://github.com/Team-4153/Vision-Test"}>
                      <a target="_blank" className="hover:text-gray-300 inline underline">Access GitHub Repository</a>
                    </Link>
                  </button>
                </div>
                  </div>
                  <div className="basis-1/3 px-6 ">
                    <Image src="https://opengraph.githubassets.com/2a7c28c76764dc71435285d1d05a2faf2aa65c0267ba919ffc00415cb6947648/Team-4153/Vision-Test" height="325" width="560" alt="https://opengraph.githubassets.com/2a7c28c76764dc71435285d1d05a2faf2aa65c0267ba919ffc00415cb6947648/Team-4153/Vision-Test"/>
                  </div>
              </div>
              </div>
          </div>
      </div>
    </div>
  )
}
