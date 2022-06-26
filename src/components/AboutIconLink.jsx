import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <Link 
    to={{
      pathname: '/about',  
      search: '?sort=author', // Optional
      hash: '#hello' // Optional
    }}>
      <div className='about-link'>
        <FaQuestion size={30}/>
      </div>
    </Link>
  )
}
export default AboutIconLink