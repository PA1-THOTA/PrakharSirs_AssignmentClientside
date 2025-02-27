import React, { useState, useContext, useEffect } from 'react'
import { employeeContext } from "../Context";
import { useParams } from 'react-router-dom'
import "../css/EmployeeDetails.css";

const EmployeeDetails = () => {
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
      employeesworkingfromhome,
      setEmployeesworkingfromhome,
      employeesworkingfromoffice,
      setEmployeesworkingfromoffice,
      employeeid,
      setEmployeeid,
    ] = useContext(employeeContext);
    // const { employeeid } = useParams()
    const [employeedetails, setemployeedetails] = useState(
      {}
    );
    console.log(useParams().employeeid)
    console.log(employeeid)
    useEffect(() => {
        setemployeedetails(
              employees.find((each) => each._id == employeeid)
            
        );
    },[employeeid])
  return (
    <div id='employeedetails'>
      <h1 style={{textDecoration:"underline"}}>EmployeeDetails</h1>
      <h3>Employee Name :- {employeedetails.employeename}</h3>
      <h3>Project Name :- {employeedetails.projectname}</h3>
      <h3>Office Location :- {employeedetails.officelocation}</h3>
      <h3>Working From.. :- {employeedetails.workingfromname}</h3>
    </div>
  );
}

export default EmployeeDetails
