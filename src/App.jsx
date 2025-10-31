import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Dashboard from './pages/Dashboard'
import ProductCreateEdit from './pages/ProductCreateEdit'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<AllProducts />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/form' element={<ProductCreateEdit />} />
      </Routes>
    </div>
  )
}

export default App
