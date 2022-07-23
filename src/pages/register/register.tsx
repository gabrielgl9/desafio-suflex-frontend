import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Header,
  Menu,
  Textfield,
} from '../../components'
import { API_LOCAL } from '../../services'
import { login } from '../../services/auth'
import { Content } from './styles'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const results = await axios.post(`${API_LOCAL}/user`, {
        name,
        password,
      })
      login(results.data.token)
      navigate('/')
    } catch (e) {
      alert('Ops! Ocorreu um erro: ' + e?.response?.data?.message)
    }
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
