import React from 'react'
import { useParams} from 'react-router-dom'

const EditDepartment = () => {
    const {id}= useParams()

  useEffect(() => {
    const fetchDepartments =async () => {
      setDepLoading(true)
      try {
        const responnse = await axios.get('http://localhost:3000/api/department',{
          headers: {
            Authorization : `Bearer ${localStorage.getItem('token')}`,
          },
        })
        if(responnse.data.success) {
         
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
    <div>
      EditDepartment
    </div>
  )
}

export default EditDepartment
