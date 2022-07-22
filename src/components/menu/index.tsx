import { Link, useNavigate } from 'react-router-dom'
import List from '../list'
import { MenuStyled } from './style'

const Menu = () => {
  const navigate = useNavigate()

  const lis = [
    '<a href="/"><span> Home </span></a>',
    '<a href="/register"><span> Cadastre-se</span></a>' +
      '<a href="/login"><span> Login </span></a>',
  ]

  return (
    <MenuStyled>
      <List lis={lis} linkFilter={(url) => navigate(url)}></List>
    </MenuStyled>
  )
}

export default Menu
