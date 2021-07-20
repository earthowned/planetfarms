import { Link } from 'react-router-dom'
import EnrollContainer from './EnrollContainer'
import Star from './Star'

const CardContent = ({ item, userInfo }) => {
  const path =
    item.creator === userInfo.id
      ? `/admin/course/${item.id}`
      : `/course/${item.id}`
  return (
    <div className='card-content'>
      <Link to={path}>
        <h1>{item.title}</h1>
        <h3>{item.author}</h3>
      </Link>
      <div className='course-stars'>
        <Star num={item.stars} />
        <p>({item.total} total)</p>
      </div>
      <EnrollContainer item={item} userInfo={userInfo} />
    </div>
  )
}

export default CardContent
