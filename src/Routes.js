import Survey from "./Components/Survey";
import SchoolDetail from "./Components/SchoolDetail";
import Contact from "./Components/Contact";
import JobDetail from "./Components/JobDetail";
import { Switch, Route } from "react-router";

export const studentRoute = () => {
  return (
    <Switch>
      <Route path="/form/school-info" component={SchoolDetail} />
      <Route path="/form/contact" component={Contact} />
    </Switch>
  );
};
export const workerRoute = () => {
  return (
    <Switch>
      <Route path="/form/job-info" component={JobDetail} />
      <Route path="/form/survey" component={Survey} />
      <Route path="/form/contact" component={Contact} />
    </Switch>
  );
};
export const unemployedRoute = () => {
  return (
    <Switch>
      <Route path="/form/contact" component={Contact} />
    </Switch>
  );
};
