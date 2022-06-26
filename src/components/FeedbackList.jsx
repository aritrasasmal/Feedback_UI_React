import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContest from '../context/FeedbackContext'

function FeedbackList() {

  const {feedback} = useContext(FeedbackContest)

  if (feedback == null || feedback.length === 0)
    return (<p>No Feedback Yet!</p>)
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
            key={item.id}
            initial={{opacity: 0}}  
            animate={{opacity: 1}}  
            exit={{opacity: 0}}
          >
            <FeedbackItem 
              key={item.id} 
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

