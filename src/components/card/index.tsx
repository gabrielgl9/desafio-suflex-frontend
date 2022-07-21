import { CardStyled } from './style'

interface ICard {
  title: string
  image: string
}

const Card = ({ title, image }: ICard) => {
  return (
    <CardStyled>
      <div className="image-content">
        <img src={image} alt={title} />
      </div>
      <div className="footer-content">
        <a href="/">{title}</a>
      </div>
    </CardStyled>
  )
}

export default Card
