import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Dashboard from './pages/Dashboard'
import ProductCreateEdit from './pages/ProductCreateEdit'
import Signup from './pages/Signup'
import Login from './pages/Login'
import UserRoute from './components/UserRoute'
import AdminRoute from './components/AdminRoute'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={
          <UserRoute>
            <AllProducts />
          </UserRoute>
        } />
        <Route path='/dashboard' element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        } />
        <Route path='/form' element={<ProductCreateEdit />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
