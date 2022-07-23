import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Location, Origin } from '../../@interfaces/IFavoriteCharacter'
import { Button, Container, Header, Menu } from '../../components'
import { API_LOCAL, API_RICK_AND_MORTY } from '../../services'
import api from '../../services/api'
import { getToken, isAuthenticated } from '../../services/auth'
import { Content } from './styles'

interface ICharacterDetail {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
  episodesQtd: number
  createdAt: string
}

const Detail = () => {
  const [character, setCharacterState] = useState<ICharacterDetail>()
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  const navigate = useNavigate()

  const params = useParams()

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const characterInfo = await axios.get(
          `${API_RICK_AND_MORTY}/character/${params.characterId}`,
        )
        if (!characterInfo.data) {
          throw new Error()
        }
        characterInfo.data.episodesQtd = characterInfo.data.episode.length
        characterInfo.data.createdAt = new Date(
          characterInfo.data.created,
        ).toLocaleDateString()

        setCharacterState(characterInfo.data)
      } catch (e) {
        alert('Não foi possível realizar a busca do personagem.')
      }
    }

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

    fetchCharacterData()
    fetchFavoriteCharacters()
  }, [])

  const handleFavoriteCharacter = async () => {
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

      navigate('/favorite-characters')
    } catch (e) {
      alert('Não foi possível favoritar ou desfavoritar o personagem')
    }
  }

  return (
    <>
      <Menu></Menu>
      <Container>
        <Header>
          <h4>Detalhes do</h4>
          <h1>Personagem</h1>
          <p> Estes são todos os dados do personagem informado</p>
        </Header>
        <Content>
          {character && (
            <>
              <div className="image">
                <img src={character.image} alt="" />
              </div>
              <div className="content">
                <h3>{character.name}</h3>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>
                  Apareceu em {character.episodesQtd}
                  {character.episodesQtd && character.episodesQtd > 1
                    ? ' episódios'
                    : ' episódio'}
                </p>
                <p>Desde {character.createdAt}</p>
                {isAuthenticated() && (
                  <Button
                    type="button"
                    value={
                      favoriteCharacters.find(
                        (favoriteCharacter: { id_api: number }) =>
                          favoriteCharacter.id_api === character.id,
                      )
                        ? 'Desfavoritar Personagem'
                        : 'Favoritar Personagem'
                    }
                    clickButton={handleFavoriteCharacter}
                  />
                )}
              </div>
            </>
          )}
        </Content>
      </Container>
    </>
  )
}

export default Detail
