import React from 'react'
import {useAuth} from '../context/authContext'


const adminDashboard = () => {
       const {user,loading} = useAuth()
       



  return (
    <div>
      adminDashboard{ user&& user.name}
    </div>
  )
}

export default adminDashboard
