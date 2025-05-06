import { Routes,Route,Navigate, BrowserRouter} from "react-router-dom";
import Login from "./pages/login";
import AdminDashboard from "./pages/adminDashboard";
import EmployeeDashboard from "./pages/employeeDashboard";
import PrivateRoutes from "./utils/privateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import AdminSummary from "./components/AdminSummary";
import Departmentlist from "./components/department/departmentlist";
import AddDepartment from "./components/department/AddDepartment";
import EditDepartment from "./EditDepartment";
function App() {
 

  return (
    
    <BrowserRouter>
     <Routes>
      <Route path="/"element={<Navigate to= "/admin-dashboard" />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin-dashboard" element={
        <PrivateRoutes>
          <RoleBaseRoutes requiredRole={["admin"]}>
               <AdminDashboard/>
          </RoleBaseRoutes>
        </PrivateRoutes>
       
        }>

         <Route index element ={<AdminSummary/>}></Route>
         <Route path="/admin-dashboard/departments" element ={<Departmentlist/>}></Route>
         <Route path="/admin-dashboard/add-department" element ={<AddDepartment/>}></Route>
         <Route path="/admin-dashboard/add-department/id" element ={<EditDepartment/>}></Route>

        </Route>
      <Route path="/employee-dashboard" element={<EmployeeDashboard/>}></Route>
     </Routes>
     </BrowserRouter>
     
  )
}

export default App
