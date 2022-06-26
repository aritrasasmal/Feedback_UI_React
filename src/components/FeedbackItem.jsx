import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContest from '../context/FeedbackContext'

function FeedbackItem({item}) {
  // const [rating, setRating] = useState(item.rating)
  // const [text, setText] = useState(item.text)
  
  // const handleClick = ()=>{
  //   setRating((prev)=> {
  //     return prev+1
  //   })
  // }{/* <button onClick={handleClick}>Click </button> */}
  const {deleteFeedback, editFeedback} = useContext(FeedbackContest)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple'/>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple'/>
      </button>
      <div className="text">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
}

export default FeedbackItem