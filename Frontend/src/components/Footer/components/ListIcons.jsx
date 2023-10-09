import listImg from '../../../Assets/data/listImg'

const ListIcons = () => {
  return (
    <ul role='listIcons'>
      {listImg.map((item, idx) => {
        return (
          <li role='li' key={idx}>
            <img role='img' src={item.img} alt={item.content} />
          </li>
        )
      })}
    </ul>
  )
}

export default ListIcons
