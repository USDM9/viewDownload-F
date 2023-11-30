import listImg from '../../../Assets/data/listImg'

const ListIcons = () => {
  const listTech = listImg.filter((item) => item.technology)
  return (
    <ul role='listIcons' className='footerList'>
      {listTech.map((item, idx) => {
        return (
          <li role='li' key={idx}>
            <img role='img' className='footerIcons' src={item.img} alt={item.content} />
          </li>
        )
      })}
    </ul>
  )
}

export default ListIcons
