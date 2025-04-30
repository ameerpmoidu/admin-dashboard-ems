import React from 'react'
import { Link } from 'react-router-dom'

const Departmentlist = () => {
  return (
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
    </div>
  )
}

export default Departmentlist

