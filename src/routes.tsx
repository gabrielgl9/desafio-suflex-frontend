import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './pages/detail/detail'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Logout from './pages/logout'
import Register from './pages/register/register'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/detail/:characterId" />
        <Route element={<Login />} path="/login" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
