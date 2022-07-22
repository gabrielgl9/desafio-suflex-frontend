import { Link, useNavigate } from 'react-router-dom'
import List from '../list'
import { MenuStyled } from './style'

const Menu = () => {
  const navigate = useNavigate()

  const lis = ['Home', '<span> Cadastre-se </span>' + '<span> Login </span>']
  const links = ['/', '/register', '/login']

  return (
    <MenuStyled>
      <List lis={lis} linkFilter={(url) => navigate(url)} links={links}></List>
    </MenuStyled>
  )
}

export default Menu
