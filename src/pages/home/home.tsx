import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import { FavoriteCharacter } from '../../@interfaces/IFavoriteCharacter'
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
import { getToken } from '../../services/auth'
import { Content, MoreItems } from './styles'

const Home = () => {
  const [allCharacters, setAllCharacters] = useState([])
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [favoriteCharacterState, setFavoriteCharacterState] = useState(false)

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
        if (!getToken()) return new Error()

        const characters = await api.get(`${API_LOCAL}/favorite-character`)

        if (!characters.data || !characters.data.favoriteCharacters) {
          throw new Error()
        }

        setFavoriteCharacters(characters.data.favoriteCharacters)
      } catch (e) {
        setFavoriteCharacters([])
      }
    }

    fetchFavoriteCharacters()
  }, [favoriteCharacterState])

  const handleFilter = (strFilter: string) => {
    setPage(1)
    setFilter(strFilter)
  }

  const setFavoriteCharacter = async (character: FavoriteCharacter) => {
    try {
      const favoriteCharacterSavedOrRemoved = await api.post(
        `${API_LOCAL}/favorite-character`,
        {
          id_api: character?.id,
          name: character?.name,
          status: character?.status,
          species: character?.species,
          type: character?.type,
          gender: character?.gender,
          origin: character?.origin,
          location: character?.location,
          image: character?.image,
          episode: character?.episode,
          url: character?.url,
          created: character?.created,
        },
      )

      if (
        !favoriteCharacterSavedOrRemoved.data ||
        !favoriteCharacterSavedOrRemoved.data.result
      ) {
        throw new Error()
      }

      setFavoriteCharacterState(!favoriteCharacterState) // force use effect
    } catch (e) {
      alert('Não foi possível favoritar ou desfavoritar o personagem')
    }
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
            allCharacters.map((character: FavoriteCharacter, key: Key) => (
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
                handleClick={() => setFavoriteCharacter(character)}
              ></Card>
            ))}
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
