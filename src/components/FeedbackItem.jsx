import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {
  // const [rating, setRating] = useState(item.rating)
  // const [text, setText] = useState(item.text)
  
  // const handleClick = ()=>{
  //   setRating((prev)=> {
  //     return prev+1
  //   })
  // }{/* <button onClick={handleClick}>Click </button> */}
  
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <div className="text">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
}

export default FeedbackItem