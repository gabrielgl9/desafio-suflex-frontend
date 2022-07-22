import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Header, Menu } from '../../components'
import { API_RICK_AND_MORTY } from '../../services'
import { Content } from './styles'

interface ICharacterDetail {
  name: string
  image: string
  status: string
  episodesQtd: number
  createdAt: string
}

const Detail = () => {
  const [character, setCharacterState] = useState<ICharacterDetail>()
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

    fetchCharacterData()
  }, [])

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
                <p>Apareceu em {character.episodesQtd} episódios</p>
                <p>Desde {character.createdAt}</p>
              </div>
            </>
          )}
        </Content>
      </Container>
    </>
  )
}

export default Detail
