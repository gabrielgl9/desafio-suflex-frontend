import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import {
  Button,
  Card,
  Container,
  Header,
  Menu,
  NavbarFilter,
  NoResultsFound,
} from '../../components'
import { API_LOCAL, API_RICK_AND_MORTY } from '../../services'
import api from '../../services/api'
import { Content, MoreItems } from './styles'

const Home = () => {
  const [allCharacters, setAllCharacters] = useState([])
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        const characters = await axios.get(
          `${API_RICK_AND_MORTY}/character/?page=${page}${filter}`,
        )

        if (!characters.data || !characters.data.results) {
          throw new Error()
        }

        setTotalPages(characters.data.info.pages)
        const charactersArray = characters.data.results

        if (page === 1) {
          setAllCharacters(charactersArray)
          return
        }

        setAllCharacters(allCharacters.concat(charactersArray))
      } catch (e) {
        setAllCharacters([])
      }
    }

    fetchAllCharacters()
  }, [page, filter])

  useEffect(() => {
    const fetchFavoriteCharacters = async () => {
      try {
        const characters = await api.get(`${API_LOCAL}/favorite-character`)

        console.log(characters)

        if (!characters.data || !characters.data.favoriteCharacters) {
          throw new Error()
        }

        setFavoriteCharacters(characters.data.favoriteCharacters)
      } catch (e) {
        setFavoriteCharacters([])
      }
    }

    fetchFavoriteCharacters()
  }, [])

  const handleFilter = (strFilter: string) => {
    setPage(1)
    setFilter(strFilter)
  }

  return (
    <>
      <Menu></Menu>
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
              (
                character: { id: number; name: string; image: string },
                key: Key,
              ) => (
                <Card
                  key={key}
                  link={`/detail/${character.id}`}
                  title={character.name}
                  image={character.image}
                  checkedStar={
                    favoriteCharacters &&
                    favoriteCharacters.find(
                      (favoriteCharacter: { id_api: number }) =>
                        character.id === favoriteCharacter.id_api,
                    )!
                  }
                ></Card>
              ),
            )}
        </Content>
        {!allCharacters.length && (
          <NoResultsFound
            title="Nenhum personagem foi encontrado"
            subtitle="Não foi possível realizar a busca dos dados para o filtro informado"
          />
        )}
        {totalPages > 1 && (
          <MoreItems>
            <Button
              type="button"
              value="Ver mais"
              disabled={totalPages === page}
              clickButton={() => setPage(page + 1)}
            />
          </MoreItems>
        )}
      </Container>
    </>
  )
}

export default Home
