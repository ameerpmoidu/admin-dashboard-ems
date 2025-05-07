import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'

const EditDepartment = () => {
    const {id}= useParams()
    const [department,setDepartment] =useState([])
    const [deploading,setDepLoading] = useState(false)

  useEffect(() => {
    const fetchDepartments =async () => {
      setDepLoading(true)
      try {
        const responnse = await axios.get(`http://localhost:3000/api/department/${id}`,{
          headers: {
            Authorization : `Bearer ${localStorage.getItem('token')}`,
          },
        })
        if(responnse.data.success) {
         setDepartment(responnse.data.department)
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
    <>{deploading ? <div>Loading...</div> :
    <div className='max-w-3x1 mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
      
    <h3 className='text-2x1 font-bold mb-6'>Edit Department</h3>
    <form>
      <div>
        <label
         htmlFor='dep_name'
         className='text-sm font-medium text-gray-700'
         >Department Name</label>
        <input type="text"
        name='dep_name'
        onChange={handleChange}
        value={department.dep_name}
        placeholder="Enter Dep Name" className='mt-1 w-full p-2 border-gray-300 rounded-md' required/>          
        </div>
        <div className='mt-3'>
          <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
          <textarea name="description" placeholder="Description" onChange={handleChange} value={department.description}className='mt-1 p-2 block w-full border-gray-300 rounded-md' rows="4"></textarea>
        </div>
        <button className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
          >Edit Department</button>
    </form>
  
</div>
}</>
  )
}

export default EditDepartment
