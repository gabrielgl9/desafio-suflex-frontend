import { Link } from 'react-router-dom'
import { CardStyled } from './style'

interface ICard {
  title: string
  image: string
  link: string
}

const Card = ({ title, image, link }: ICard) => {
  return (
    <Link to={link}>
      <CardStyled>
        <div className="image-content">
          <img src={image} alt={title} />
        </div>
        <div className="footer-content">
          <span>{title}</span>
        </div>
      </CardStyled>
    </Link>
  )
}

export default Card
