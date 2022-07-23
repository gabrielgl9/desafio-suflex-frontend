import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../services/auth'
import { CardStyled } from './style'

interface ICard {
  title: string
  image: string
  link: string
  checkedStar: boolean
}

const Card = ({ title, image, link, checkedStar = false }: ICard) => {
  return (
    <Link to={link}>
      <CardStyled>
        <div className="image-content">
          <img src={image} alt={title} />
        </div>
        <div className="footer-content">
          <span>{title}</span>
          {isAuthenticated() && (
            <div className={checkedStar ? 'star checkedStar' : 'star'}>
              <FaStar></FaStar>
            </div>
          )}
        </div>
      </CardStyled>
    </Link>
  )
}

export default Card
