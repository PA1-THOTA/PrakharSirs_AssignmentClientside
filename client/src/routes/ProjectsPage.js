import React, { useContext, useState, useEffect } from "react";
import "../css/projectspage.css";
import { employeeContext } from "../Context";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [
      employees,
      setEmployees,
      locations,
      setLocations,
      loading,
      setLoading,
      officelocations,
      setOfficelocations,
      searchterm,
      setSearchterm,
      projectnames,
      setProjects,
      officelocation,
      setOfficelocation,
      projectname,
      setProjectname,
    ] = useContext(employeeContext);
    console.log(locations)

    
  return (
    <>
      <h1 style={{ textDecoration: "underline" }}>Projects</h1>
      {!loading ? (
        <div id="projectspage">
          {projectnames.map((each, index) => {
            return (
              <h1 key={index}>
                <Link to={`/employeesstatusbasedonproject/${each.projectname}`}>
                  {each.projectname}
                </Link>
              </h1>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>Loading. Please wait</h1>
        </div>
      )}
    </>
  );


}

export default ProjectsPage
