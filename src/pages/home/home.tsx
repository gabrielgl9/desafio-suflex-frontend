import { Card, Header, NavbarFilter } from '../../components'
import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Header>
        <h4>Escolha seus</h4>
        <h1>Personagens</h1>
        <p> Estes são todos os personagens do seriado rick and morty</p>
      </Header>
      <NavbarFilter></NavbarFilter>
      <main className="content">
        <Card></Card>
      </main>
    </Container>
  )
}

export default Home
