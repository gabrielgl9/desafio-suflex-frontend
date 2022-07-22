import { Link } from 'react-router-dom'
import { MenuStyled } from './style'

const Menu = () => {
  return (
    <MenuStyled>
      <ul>
        <li>
          <Link to={'/'}>
            <span> Home </span>
          </Link>
        </li>
        <li>
          <Link to={'/login'}>
            <span> Login </span>
          </Link>
          <Link to={'/register'}>
            <span> Cadastre-se </span>
          </Link>
        </li>
      </ul>
    </MenuStyled>
  )
}

export default Menu
