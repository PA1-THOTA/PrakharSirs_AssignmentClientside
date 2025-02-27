import React,{useContext,useState,useEffect} from 'react'
import "../css/location.css";
import { employeeContext } from "../Context";
import { Link } from 'react-router-dom';

const Location = () => {
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
    // console.log(locations)

    
  return (
    <>
      <h1 style={{textDecoration:"underline"}}>Locations</h1>
      {!loading ? (
        <div id="locationpage">
          {officelocations.map((each, index) => {
            return (
              <h1 key={index}>
                <Link
                  to={`/employeesstatusbasedonlocation/${each.officelocation}`}
                >
                  {each.officelocation}
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

export default Location
