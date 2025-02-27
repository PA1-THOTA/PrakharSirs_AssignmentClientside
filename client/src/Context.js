import React, { useState } from "react"; 
export const employeeContext = React.createContext()

export const EmployeeContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(false)
    const [officelocations, setOfficelocations] = useState([]);
    const [searchterm, setSearchterm] = useState("");
    const [projectnames, setProjects] = useState([]);
    const [officelocation, setOfficelocation] = useState("");
    const [projectname, setProjectname] = useState("");
    const [employeesworkingfromhome, setEmployeesworkingfromhome] =
      useState([]);
    const [employeesworkingfromoffice, setEmployeesworkingfromoffice] =
    useState([]);
  const [employeeid,
          setEmployeeid]=useState("")
    return (
      <employeeContext.Provider
        value={[
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
          setEmployeeid
        ]}
      >
        {children}
      </employeeContext.Provider>
    );
}