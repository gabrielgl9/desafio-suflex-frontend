import { useState } from 'react'
import { NavbarFilterStyled } from './style'

interface INavbarFilter {
  handleFilter: (filterString: string) => void
}

const NavbarFilter = ({ handleFilter }: INavbarFilter) => {
  const [emphasisTextState, setEmphasisTextState] = useState('all')
  const lis: any = {
    all: 'Todos',
    human: 'Humanos',
    alien: 'Aliens',
  }

  const handleSpecieFilter = (emphasisText: string) => {
    setEmphasisTextState(emphasisText)
    handleFilter(`&species=${emphasisText === 'all' ? '' : emphasisText}`)
  }

  return (
    <NavbarFilterStyled>
      <div className="filter-by-search">
        <input type="search" placeholder="Buscar" />
      </div>
      <div className="filter-by-categories">
        <ul>
          {lis &&
            Object.keys(lis).map((li: string, index: number) => (
              <li
                className={li === emphasisTextState ? 'emphasisStyle' : ''}
                key={index}
                onClick={() => handleSpecieFilter(li)}
              >
                {lis[li]}
              </li>
            ))}
        </ul>
      </div>
    </NavbarFilterStyled>
  )
}

export default NavbarFilter
