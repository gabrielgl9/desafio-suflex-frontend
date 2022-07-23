import { useNavigate } from 'react-router-dom'
import { isAuthenticated, logout } from '../../services/auth'
import List from '../list'
import { MenuStyled } from './style'

const Menu = () => {
  const navigate = useNavigate()
  const lisFromRigth = isAuthenticated()
    ? '<a href="/favorite-characters"><span> Meus Personagens</span></a>' +
      '<a href="/logout"><span> Sair </span></a>'
    : '<a href="/register"><span> Cadastre-se</span></a>' +
      '<a href="/login"><span> Login </span></a>'

  const lis = ['<a href="/"><span> Home </span></a>', lisFromRigth]

  return (
    <MenuStyled>
      <List lis={lis} linkFilter={(url) => navigate(url)}></List>
    </MenuStyled>
  )
}

export default Menu
