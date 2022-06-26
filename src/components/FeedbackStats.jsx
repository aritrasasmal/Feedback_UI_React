import React from 'react'
import PropTypes from 'prop-types'
function FeedbackStats({feedback}) {
  let average = feedback.reduce((acc, cur)=>{
    return acc + cur.rating
  }, 0) / feedback.length

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Review: {isNaN(average) ? 0: average}</h4>
    </div>
  )
}
FeedbackStats.propTypes= {
  feedback: PropTypes.array,
}

export default FeedbackStats