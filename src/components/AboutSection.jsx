/* eslint-disable no-unused-vars */
import Priorities from "../components/Priorities";
import SolutionsCard from "../components/SolutionsCard";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { impact, services } from "../data";

function AboutSection() {
  const [text, count] = useTypewriter({
    words: [
      "Include Satisying Our Clients.",
      "Revolve Around Ensuring The Success of Our Clients.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div  className="py-8 mt-16 ">
      <div id="services" className="pb-8  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -300, opacity: 0 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 md:px-20"
        >
          {
            services.map((itm)=>{
              return <SolutionsCard icon={itm.icon} heading={itm.title} content={itm.description} /> 
            })
          }
          
        </motion.div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 mt-16 px-4 md:px-24 md:space-x-12 overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -300, opacity: 0 },
            }}
            className="flex-1"
          >
            <img
              src="assets/team-meeting3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-sm"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -60, opacity: 0 },
            }}
            className="flex-1 flex flex-col "
          >
            <div className="block mb-4">
              <p className="text-white text-xs font-semibold bg-secondary p-2 rounded-full inline-block">
                Our Priorities
              </p>
            </div>
            <div className="h-20 ">
              <h2 className="text-2xl font-bold text-[#FFD700]">
                Our Priorities{" "}
                <span className="mr-3 text-2xl mb-4 font-bold text-secondary">
                  {text}
                </span>
                <Cursor />
              </h2>
            </div>
            <div className="flex flex-col mt-8">
              {
                impact.map((itm)=> <Priorities title={itm.title} content={itm.description}/>)
              }
              
            </div>
          </motion.div>
        </div>
      </div>
      <div
      id="about"
       className="flex flex-col md:flex-row items-start">
        <div className="flex-1 flex flex-col px-8 overflow-hidden">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 300, opacity: 0 },
            }}
            className="flex flex-col space-y-5"
          >
            <h2 className="text-2xl font-bold text-secondary">
              About us
            </h2>
            <p className="text-[#333]">
            At Career Launch Consultancy (CLC), we are more than just career advisors; we are your partners in propelling your career to new heights.


            </p>
            <h2 className="text-2xl font-bold text-secondary">
        Mission and Vision
            </h2>
            <p className="text-[#333]">
            Our mission is to empower individuals with the knowledge, skills, and connections needed to launch and navigate successful careers in an increasingly interconnected world. We believe that every professional journey is unique, and our goal is to provide you with the guidance and tools to make your career aspirations a reality.


            </p>
            <h2 className="text-2xl font-bold text-secondary">
              Who we are
            </h2>
            <p className="text-[#333]">
            At Career Launch Consultancy (CLC), we are more than just career advisors; we are your partners in propelling your career to new heights.


            </p>
            
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -300, opacity: 0 },
          }}
          className="flex-1 p-8 w-full"
        >
          <img
            src="assets/team-meeting.jpg"
            className="w-full rounded-sm transition-all duration-200 ease-in-out hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
