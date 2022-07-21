import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import { Card, Container, Header, NavbarFilter } from '../../components'
import { API_RICK_AND_MORTY } from '../../services'
import { Content } from './styles'

const Home = () => {
  const [allCharacters, setCharacters] = useState([])
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const characters = await axios.get(
          `${API_RICK_AND_MORTY}/character/?page=1`,
        )

        if (!characters.data || !characters.data.results) {
          throw new Error()
        }

        const charactersArray = characters.data.results
        setCharacters(allCharacters.concat(charactersArray))
      } catch (e) {
        alert('Não foi possível realizar a busca de personagens do seriado.')
      }
    }

    fetchCharacters()
  }, [])

  return (
    <Container>
      <Header>
        <h4>Escolha seus</h4>
        <h1>Personagens</h1>
        <p> Estes são todos os personagens do seriado Rick and Morty</p>
      </Header>
      <NavbarFilter></NavbarFilter>
      <Content>
        {allCharacters &&
          allCharacters.map(
            (character: { name: string; image: string }, key: Key) => (
              <Card
                key={key}
                title={character.name}
                image={character.image}
              ></Card>
            ),
          )}
      </Content>
    </Container>
  )
}

export default Home
