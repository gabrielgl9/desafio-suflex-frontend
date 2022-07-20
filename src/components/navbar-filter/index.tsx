import { NavbarFilterStyled } from './style'

const NavbarFilter = () => {
  return (
    <NavbarFilterStyled>
      <div className="filter-by-search">
        <input type="search" placeholder="Buscar" />
      </div>
      <div className="filter-by-categories">
        <ul>
          <li>Todos</li>
          <li>Humanos</li>
          <li>Aliens</li>
        </ul>
      </div>
    </NavbarFilterStyled>
  )
}

export default NavbarFilter
