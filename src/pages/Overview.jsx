import React from "react";
import { overviewTilesData, overviewStats, management } from "../data";
import OverviewMain from "../components/OverviewMain";
import Managment from "../components/Managment";
import MissionVission from "../components/MissionVission";
import Footer from "../components/Footer";

function Overview() {
  return (
    <div className="h-full">
      <OverviewMain />
      <Managment />
      <MissionVission />
      <Footer />
    </div>
  );
}

export default Overview;
