import { ListStyled } from './style'

interface IList {
  lis: any
  emphasysText?: string
  links?: any
  linkFilter: (li: string) => void
}

const List = ({ lis, emphasysText = '', links = [], linkFilter }: IList) => {
  const list = Array.isArray(lis) ? (
    <ArrayListComponent
      lis={lis}
      emphasysText={emphasysText}
      linkFilter={linkFilter}
      links={links}
    />
  ) : (
    <ObjectListComponent
      lis={lis}
      emphasysText={emphasysText}
      linkFilter={linkFilter}
    />
  )

  return (
    <ListStyled>
      <ul>{list}</ul>
    </ListStyled>
  )
}

const ArrayListComponent = ({
  lis,
  emphasysText = '',
  links = [],
  linkFilter,
}: IList) => (
  <>
    {lis.map((li: string, index: number) => (
      <li
        className={li === emphasysText && emphasysText ? 'emphasisStyle' : ''}
        key={index}
        onClick={() => linkFilter(links[index])}
      >
        <div dangerouslySetInnerHTML={{ __html: li }} />
      </li>
    ))}
  </>
)

const ObjectListComponent = ({ lis, emphasysText = '', linkFilter }: IList) => (
  <>
    {Object.keys(lis).map((li: string, index: number) => (
      <li
        className={li === emphasysText && emphasysText ? 'emphasisStyle' : ''}
        key={index}
        onClick={() => linkFilter(li)}
      >
        {lis[li]}
      </li>
    ))}
  </>
)

export default List
