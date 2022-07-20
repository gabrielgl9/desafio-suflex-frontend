import { ReactNode } from 'react'
import { HeaderStyled } from './style'

interface IHeader {
  children: ReactNode
}

const Header = ({ children }: IHeader) => {
  return <HeaderStyled>{children}</HeaderStyled>
}

export default Header
