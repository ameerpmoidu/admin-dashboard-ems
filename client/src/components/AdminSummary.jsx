import React from 'react'
import SummaryCard from './SummaryCard'
import { FaUsers } from 'react-icons/fa'

const AdminSummary = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2x1 font-bold'>DashBoard Overview</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <SummaryCard icon={<FaUsers />} text="Total Employees" number={13}/>
      </div>
    </div>
  )
}

export default AdminSummary
