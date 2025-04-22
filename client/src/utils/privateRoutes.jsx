import React from 'react'

const privateRoutes = () => {
const {user,loading} = useAuth()

if(loading) {
    <div>loading....</div>
}

return user ? children :<Navigate to="/login"/>

}

export default privateRoutes

