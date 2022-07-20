import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './pages/detail/detail'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/detail" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
