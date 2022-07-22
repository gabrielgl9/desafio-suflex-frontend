import { ListStyled } from './style'

interface IList {
  lis: any
  emphasysText: string
  linkFilter: (li: string) => void
}

const List = ({ lis, emphasysText, linkFilter }: IList) => {
  return (
    <ListStyled>
      <ul>
        {lis &&
          Object.keys(lis).map((li: string, index: number) => (
            <li
              className={li === emphasysText ? 'emphasisStyle' : ''}
              key={index}
              onClick={() => linkFilter(li)}
            >
              {lis[li]}
            </li>
          ))}
      </ul>
    </ListStyled>
  )
}

export default List
