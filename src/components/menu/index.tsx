import { Link, useNavigate } from 'react-router-dom'
import List from '../list'
import { MenuStyled } from './style'

const Menu = () => {
  const navigate = useNavigate()

  const lis = [
    '<span><a href="/"> Home </a></span>',
    '<span><a href="/register"> Cadastre-se </a></span>' +
      '<span><a href="/login"> Login </a></span>',
  ]

  return (
    <MenuStyled>
      <List lis={lis} linkFilter={(url) => navigate(url)}></List>
    </MenuStyled>
  )
}

export default Menu
