import { ReactNode } from 'react'
import { ContainerStyled } from './style'

interface IContainer {
  children: ReactNode
}

const Container = ({ children }: IContainer) => {
  return <ContainerStyled>{children}</ContainerStyled>
}

export default Container
