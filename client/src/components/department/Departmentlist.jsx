import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import {columns,DepartmentButtons} from "../../utils/DepartmentHelpers"
import axios from 'axios';

const Departmentlist = () => {
  const [departments,setDepartments]= useState ([])
  const [depLoading,setDepLoading] =useState(false)

useEffect(() => {
  const fetchDepartments =async () => {
    setDepLoading(true)
    try {
      const responnse = await axios.get('http://localhost:5000/api/department',{
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`,
        },
      })
      if(responnse.data.success) {
        const data = await responnse.data.departments.map((dep) => (
       {
        _id:dep._id,
        sno:sno++,
        dep_name:dep.dep_name,
        action: (<DepartmentButtons/>)
       }));
       setDepartments(data);
      }
    }catch(error) {
      if(error.response && !error.response.data.success){
        alert(error.response.data.error)
      }
    } finally{
      setDepLoading(false)
    }
  }
  fetchDepartments();

},[])

  return (
    <>{depLoading ? <div>Loading...</div> :
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-2x1 font-bold'> Manage Departments</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input type="text" placeholder="Search By Dep Name" className='px-4 py-0.5 border'/>
        <Link to="/admin-dashboard/add-department"
         className='px-4 py-1 bg-teal-600 ronded text-white'
         >
            Add New Department
            </Link>
      </div>
      <div>
        <DataTable
         columns={columns} data ={departments}/>
               </div>
    </div>
}</>
  )
}

export default Departmentlist

