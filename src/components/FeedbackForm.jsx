import Card from './shared/Card'
//import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(5)
  
  const handleTextChange = (e) =>{
    if( text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Review must be atleast 10 charecters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10){
      const newFeedback = {
        text,
        rating,
      }
      
      handleAdd(newFeedback)
      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate our service</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder='Leave your review'
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>Submit</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

//FeedbackForm.propTypes() 


export default FeedbackForm