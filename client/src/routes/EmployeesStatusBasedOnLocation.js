import React, { useContext, useState, useEffect } from "react";
import { employeeContext } from "../Context";
import { Link, useParams } from "react-router-dom";
import "../css/EmployeesStatusBasedOnLocation.css";

const EmployeesStatusBasedOnLocation = () => {
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
  const {location} = useParams()
  // console.log(locations);
  // console.log(location);
  useEffect(() => {
    setEmployeesworkingfromhome(
      employees.filter(
        (each) => each.officelocation == location && each.workingfromname
      =="home")
    );
    setEmployeesworkingfromoffice(
      employees.filter(
        (each) =>
          each.officelocation == location && each.workingfromname == "office"
      )
    );
    console.log(
      employees.filter(
        (each) =>
          each.officelocation == location && each.workingfromname == "office"
      )
    );
  },[])
  console.log(employeesworkingfromhome)
  console.log(employeesworkingfromoffice)
  return (
    <div>
      <h2>Location Name :- { location}</h2>
      <div id="employeesbasedonlocationcontainer">
        <Employeesbasedonlocation
          type={"Home"}
          list={employeesworkingfromhome}
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          setEmployeeid={setEmployeeid}
        />
        <Employeesbasedonlocation
          type={"Office"}
          list={employeesworkingfromoffice}
          src="https://e7.pngegg.com/pngimages/551/881/png-clipart-computer-icons-encapsulated-postscript-office-building-television-building-thumbnail.png"
          setEmployeeid={setEmployeeid}
        />
      </div>
    </div>
  );
}

const Employeesbasedonlocation = ({list,type,src,setEmployeeid}) => {
  return (
    <div id="employeesbasedonlocationeach">
      <h3>
        Employees working from {type}{" "}
        <img src={src} width="10%" style={{maxWidth:"50px"}}/>
      </h3>
      <hr />
      {list.map((each, index) => {
        return (
          <Link key={each._id}
            to={`/employeedetails/${each._id}`} onClick={()=>{setEmployeeid(each._id)}}
            style={{ display: "block", margin: "10px" }}
          >
            {each.employeename}
          </Link>
        );
      })}
    </div>
  );
}

export default EmployeesStatusBasedOnLocation
