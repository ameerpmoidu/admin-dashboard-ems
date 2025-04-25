import React from 'react'
import {useAuth} from '../context/authContext'
import AdminSidebar from '../components/dashboard/AdminSidebar'

const adminDashboard = () => {
       const {user,loading} = useAuth()
       



  return (
    <div>
    <AdminSidebar />
    </div>
  )
}

export default adminDashboard
