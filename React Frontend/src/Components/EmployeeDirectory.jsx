import React from 'react'
import Header from './Header'
import EmployeeList from './EmployeeList'
import EmployeeCard from './EmployeeCard'
import { useSelector } from 'react-redux'

export default function EmployeeDirectory({ className }) {
    const employeeList = useSelector((state) => state.employee.employees);

    if (className === "directory") {
        return (
            <>
                <Header className="directory" />
                <EmployeeList employeeList={employeeList}/>
            </>
        )
      }
      if (className === "employee") {
        return (
            <>
                <Header className="employee" />
                <EmployeeCard />
            </>
        )
      }
}
