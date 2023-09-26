import React from "react";
import { overviewTilesData, overviewStats } from "../data";

function OverviewMain() {
  return (
    <div id="company" className="min-h-screen min-w-full overflow-hidden ">
      <div
        style={{
          backgroundImage: "url('/assets/light-bulb.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full h-[90vh]"
      >
        <div className="p-8 min-w-full min-h-full flex flex-col items-end justify-center pt-80 text-white space-y-4">
          <h1 className="block text-7xl font-bold">
            Ideate. Innovate. Create.
          </h1>
          <h3 className="block text-2xl font-light">
            Our principles define over 2500+ large scale successful projects
            delivered.
          </h3>
          <h4 className="block text-xg font-extralight">
            Discover how our 525+ strong team can ideate, innovate and create a
            difference for your business
          </h4>
        </div>
      </div>
      <div className="px-20 py-8 flex flex-col items-center text-center spacce-y-8">
        <h2 className="text-4xl font-extralight mb-4">About Us</h2>
        <p className="text-lg font-light">
          CG-VAK is a multimillion-dollar public limited organization, with over
          two decades of time-tested experience for clients across the globe. As
          a global software provider headquartered in India, CG-VAK employs over
          525+ professionals across the globe.
        </p>
        <div>
          <img src="/assets/team.jpg" alt="Team" className="w-[70vw] my-10" />
        </div>
        <p>
          We provide high quality & cost effective solutions that help you to
          leverage Information Technology, to improve your competitive advantage
          through improved services to your clients. Based on the three tenets
          ‘Ideate. Innovate. Create’ we help transform your businesses and
          organizations delivering Digital Innovation, Product Innovation, and
          Modernisation at business speed.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-20">
          {overviewTilesData.map((itm) => (
            <div className="h-[500px] w-[350px] border-[#007BFF] border-t-2 flex flex-col items-center py-20 space-y-4">
              <h2 className="text-3xl font-light text-[#007BFF]">
                {itm.title}
              </h2>
              <h3 className="text-lg font-extralight">{itm.subtitle}</h3>
              <p className="text-sm">{itm.content}</p>
            </div>
          ))}
        </div>
        <div className=" py-10 px-20 w-full">
          {overviewStats.map((itm) => (
            <div className="flex justify-between p-4 mb-2 text-white bg-[#007BFF] rounded-lg ">
              <p className="font-semibold">{itm.stat}</p>
              <p className="">{itm.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewMain;
