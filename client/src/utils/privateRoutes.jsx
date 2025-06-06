import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const privateRoutes = ({children}) => {
const {user,loading} = useAuth()

if(loading) {
   return <div>loading....</div>
}

return user ? children :<Navigate to="/login"/>

}

export default privateRoutes

