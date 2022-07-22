import { ReactNode } from 'react'
import { FormStyled } from './style'

interface IForm {
  children: ReactNode
  handleSubmit: (event: any) => void
}

const Form = ({ children, handleSubmit }: IForm) => {
  return (
    <FormStyled>
      <form onSubmit={handleSubmit}> {children} </form>
    </FormStyled>
  )
}

export default Form
