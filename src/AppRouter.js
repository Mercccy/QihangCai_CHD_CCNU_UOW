import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home"; // 请根据实际情况调整路径
import Publication from "../Publication"; // 请根据实际情况调整路径
import ResearchProject from "../Research_Project"; // 请根据实际情况调整路径
import AwardsHonors from "../Awards_Honors"; // 请根据实际情况调整路径
import VolunteerServices from "../Volunteer_Services"; // 请根据实际情况调整路径

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Publication.html" component={Publication} />
        <Route path="/Research_Project.html" component={ResearchProject} />
        <Route path="/Awards_Honors.html" component={AwardsHonors} />
        <Route path="/Volunteer_Services.html" component={VolunteerServices} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
