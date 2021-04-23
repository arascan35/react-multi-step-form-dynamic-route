import "./App.css";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router";
import UserInfo from "./Components/UserInfo";
import { useHistory } from "react-router-dom";
import { studentPath } from "./Paths";
import { studentRoute, unemployedRoute, workerRoute } from "./Routes";

function App() {
  let history = useHistory();
  const [steps, setSteps] = useState(studentPath);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleRoute = (values) => {
    if (values.status === "student") {
      return studentRoute();
    } else if (values.status === "worker") {
      return workerRoute();
    } else {
      return unemployedRoute();
    }
  };

  const next = () => {
    let routeTo = steps[activeStep + 1];
    setActiveStep(activeStep + 1);
    history.push(`/form/${routeTo}`);
  };

  const previous = () => {
    let routeTo = steps[activeStep - 1];
    setActiveStep(activeStep - 1);
    history.push(`/form/${routeTo}`);
  };

  const handleSubmit = async (values, bag) => {
    if (activeStep + 1 === steps.length) {
      // submit form
      window.confirm(JSON.stringify(values, null, 2));
    } else {
      bag.setTouched({});
      next();
    }
  };

  return (
    <div className="App">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          status: "student",
          address: "",
          city: "",
          likeJob: "",
          jobName: "",
          jobAddress: "",
          schoolName: "",
          schoolAddress: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, isValid }) => (
          <Form>
            <div className="container">
              <div className="form">
                <Switch>
                  <Redirect from="/" exact to={`/form/user-info`} />
                  <Route
                    path="/form/user-info"
                    render={() => <UserInfo setSteps={setSteps}></UserInfo>}
                  ></Route>
                  {handleRoute(values)}
                </Switch>
                <div>
                  {activeStep > 0 && (
                    <button type="button" onClick={() => previous()}>
                      previous
                    </button>
                  )}
                  <button type="submit" disabled={!isValid}>
                    {activeStep + 1 === steps.length ? "submit" : "next"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
