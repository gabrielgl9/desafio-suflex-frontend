import { Key, useEffect, useState } from 'react'
import { FavoriteCharacter } from '../../@interfaces/IFavoriteCharacter'
import { Card, Container, Header, Menu, NoResultsFound } from '../../components'
import { API_LOCAL } from '../../services'
import api from '../../services/api'
import { Content } from './styles'

const FavoriteCharactersPage = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  const [favoriteCharacterState, setFavoriteCharacterState] = useState(false)

  useEffect(() => {
    const fetchFavoriteCharacters = async () => {
      try {
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

  const setFavoriteCharacter = async (character: FavoriteCharacter) => {
    try {
      const favoriteCharacterSavedOrRemoved = await api.post(
        `${API_LOCAL}/favorite-character`,
        {
          id_api: character?.id_api,
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
        {favoriteCharacters && favoriteCharacters.length ? (
          <Header>
            <h4>Estes são seus</h4>
            <h1>Personagens</h1>
            <p> favoritos do seriado Rick and Morty</p>
          </Header>
        ) : (
          <NoResultsFound
            title="Nenhum personagem foi encontrado"
            subtitle="Parece que você não favoritou nenhum personagem"
          />
        )}

        <Content>
          {favoriteCharacters &&
            favoriteCharacters.map((character: FavoriteCharacter, key: Key) => (
              <Card
                key={key}
                link={`/detail/${character.id_api}`}
                title={character.name}
                image={character.image}
                checkedStar={true}
                handleClick={() => setFavoriteCharacter(character)}
              ></Card>
            ))}
        </Content>
      </Container>
    </>
  )
}

export default FavoriteCharactersPage
