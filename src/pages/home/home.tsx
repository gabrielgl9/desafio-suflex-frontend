import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import { Button, Card, Container, Header, NavbarFilter } from '../../components'
import { API_RICK_AND_MORTY } from '../../services'
import { Content, MoreItems } from './styles'

const Home = () => {
  const [allCharacters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const characters = await axios.get(
          `${API_RICK_AND_MORTY}/character/?page=${page}${filter}`,
        )

        if (!characters.data || !characters.data.results) {
          throw new Error()
        }
        const charactersArray = characters.data.results

        if (page === 1) {
          setCharacters(charactersArray)
          return
        }

        setCharacters(allCharacters.concat(charactersArray))
      } catch (e) {
        alert('Não foi possível realizar a busca de personagens do seriado.')
      }
    }

    fetchCharacters()
  }, [page, filter])

  const handleFilter = (strFilter: string) => {
    setPage(1)
    setFilter(strFilter)
  }

  return (
    <Container>
      <Header>
        <h4>Escolha seus</h4>
        <h1>Personagens</h1>
        <p> Estes são todos os personagens do seriado Rick and Morty</p>
      </Header>
      <NavbarFilter handleFilter={handleFilter} />
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
      <MoreItems>
        <Button
          type="button"
          value="Ver mais"
          clickButton={() => setPage(page + 1)}
        />
      </MoreItems>
    </Container>
  )
}

export default Home
