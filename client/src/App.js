import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import Location from "./routes/Location";
import ProjectsPage from "./routes/ProjectsPage";
import EmployeesStatusBasedOnLocation from "./routes/EmployeesStatusBasedOnLocation";
import EmployeesStatusBasedOnProjects from "./routes/EmployeesStatusBasedOnProject";
import EmployeeDetails from "./routes/EmployeeDetails";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route index element={<Location />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/projectspage" element={<ProjectsPage />} />
        <Route
          path="/employeesstatusbasedonlocation/:location"
          element={<EmployeesStatusBasedOnLocation />}
        />
        <Route
          path="/employeesstatusbasedonproject/:project"
          element={<EmployeesStatusBasedOnProjects />}
        />
        <Route path="/employeedetails/:employeeid" element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
