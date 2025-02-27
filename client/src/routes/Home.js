import React, { useContext, useEffect, useState } from "react";
import { employeeContext } from "../Context";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "../css/home.css";

const Home = () => {
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
  // console.log(employees);
  const url = "https://prakhar-sirs-assignment.vercel.app";

  const [searchstate, setSearchstate] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/getemployees`).then((response) => {
      // console.log(response.data);
      setEmployees(response.data);
      const officelocations = response.data.slice(0, 10).map((each) => {
        return {
          officelocation: each.officelocation,
        };
      });
      // console.log(officelocations);
      setOfficelocations(officelocations);
      const projectnames = response.data.slice(0, 3).map((each) => {
        return {
          projectname: each.projectname,
        };
      });
      // console.log(projectnames);
      setProjects(projectnames);
      setLoading(false);
    });
    // .catch((error) => { setLoading(false); console.log(error)});
  }, []);
  return (
    <div id="home">
      <h1 id="homeh1">P99Soft's Employees Tracker</h1>
      <div id="home1stdiv">
        <input
          type="text"
          value={searchterm}
          onChange={(e) => {
            setSearchterm(e.target.value);
          }}
          onFocus={() => {
            setSearchstate(true);
          }}
          placeholder="Search Employee Here"
        />
        {searchstate && searchterm && (
          <Itemsmatchingsearchterm
            employees={employees}
            searchterm={searchterm}
            officelocation={officelocation}
            projectname={projectname}
            setSearchstate={setSearchstate}
            setEmployeeid={setEmployeeid}
          />
        )}
        <div id="home1stdiv1stdiv">
          <div>
            Search By Location :- &nbsp;
            <select
              value={officelocation}
              onChange={(e) => {
                setOfficelocation(e.target.value);
              }}
            >
              <option>select Location</option>
              {officelocations.map((each, id) => {
                return <option key={id}>{each.officelocation}</option>;
              })}
            </select>
          </div>
          <div>
            Search By Project :- &nbsp;
            <select
              value={projectname}
              onChange={(e) => {
                setProjectname(e.target.value);
              }}
            >
              <option>select Project</option>
              {projectnames.map((each, id) => {
                return <option key={id}>{each.projectname}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <div id="home2nddiv">
        <button>
          <NavLink to={"/locations"}>
            <h3>Locations Page</h3>
          </NavLink>
        </button>
        <button>
          <NavLink to={"/projectspage"}>
            <h3>Projects Page</h3>
          </NavLink>
        </button>
      </div>
    </div>
  );
};

const Itemsmatchingsearchterm = ({
  employees,
  searchterm,
  projectname,
  officelocation,
  setSearchstate,
  setEmployeeid,
}) => {
  console.log(searchterm);
  const matchingitems = employees.filter((each) => {
    if (projectname && officelocation) {
      return (
        each.employeename.includes(searchterm) &&
        each.officelocation == officelocation &&
        each.projectname == projectname
      );
    } else if (projectname && !officelocation) {
      return (
        each.employeename.includes(searchterm) &&
        each.projectname == projectname
      );
    } else if (!projectname && officelocation) {
      return (
        each.employeename.includes(searchterm) &&
        each.officelocation == officelocation
      );
    }
    return searchterm ? each.employeename.includes(searchterm) : "";
  });
  console.log(matchingitems);
  return (
    <div id="searchitems">
      {matchingitems.length ? (
        matchingitems.map((each, index) => {
          return (
            <Link
              to={`/employeedetails/${each._id}`}
              key={index}
              style={{ color: "rgb(130, 130, 130)" }}
              onClick={() => {
                setSearchstate(false);
                setEmployeeid(each._id);
              }}
            >
              <p style={{ border: "1px solid black", margin: "0px" }}>
                {each.employeename.slice(
                  0,
                  each.employeename.indexOf(searchterm)
                )}
                <b style={{ color: "black" }}>{searchterm}</b>
                {each.employeename.slice(each.employeename.indexOf(searchterm))}
              </p>
            </Link>
          );
        })
      ) : (
        <p style={{border:"1px solid black"}}>No results found</p>
      )}
    </div>
  );
};

export default Home;
