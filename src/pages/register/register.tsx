import { useState } from 'react'
import {
  Button,
  Container,
  Form,
  Header,
  Menu,
  Textfield,
} from '../../components'
import { Content } from './styles'

const Register = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return (
    <>
      <Menu></Menu>
      <Container>
        <Header>
          <h4>Faça seu</h4>
          <h1>Cadastro</h1>
          <p> Para aproveitar todas funcionalidades do portal</p>
        </Header>
        <Content>
          <Form handleSubmit={handleSubmit}>
            <Textfield
              type="text"
              label="Nome"
              name="name"
              value={name}
              handleChange={(event) => setName(event.target.value)}
            ></Textfield>
            <Textfield
              type="password"
              label="Senha"
              name="password"
              value={password}
              handleChange={(event) => setPassword(event.target.value)}
            ></Textfield>
            <Button type="submit" value="Cadastrar"></Button>
          </Form>
        </Content>
      </Container>
    </>
  )
}

export default Register
