import { Container, Header, Menu } from '../../components'
import { Content } from './styles'

const Login = () => {
  return (
    <>
      <Menu></Menu>
      <Container>
        <Header>
          <h4>Faça seu</h4>
          <h1>Login</h1>
          <p> Para aproveitar todas funcionalidades do portal</p>
        </Header>
        <Content></Content>
      </Container>
    </>
  )
}

export default Login
