import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/auth/AuthLayout'

import Register from './pages/auth/Register'
import Login from './pages/auth/login'
import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/AdminDashboard'
import AdminFeatures from './pages/admin-view/AdminFeatures'
import AdminOrders from './pages/admin-view/AdminOrders'
import AdminProducts from './pages/admin-view/AdminProducts'

function App() {
  return (
    <>
      <div className='flex flex-col border-red-700 border overflow-hidden bg-white'>
        {/* Header Component  */}
        <h1>Header Component</h1>
        <div>
          <Routes>
          <Route path='/auth' element={<AuthLayout></AuthLayout>}>
              <Route path='login' element={<Login></Login>}></Route>
              <Route path='register' element={<Register></Register>}></Route>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route path='dashboard' element={<AdminDashboard/>}></Route>
              <Route path='Features' element={<AdminFeatures/>}></Route>
              <Route path='orders' element={<AdminOrders/>}></Route>
              <Route path='products' element={<AdminProducts/>}></Route>
          </Route>
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App
