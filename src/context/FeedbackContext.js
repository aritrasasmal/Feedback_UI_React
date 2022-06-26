import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContest = createContext()

export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback 1",
      rating: 5
    },
    {
      id: 2,
      text: "This is feedback 2",
      rating: 4
    },
    {
      id: 3,
      text: "This is feedback 3!",
      rating: 5
    },
  ])
  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = (id) => {
    if (window.confirm("Are your sure to delete?")) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }

  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updtItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...updtItem} : item))
  )}

  return (
    <FeedbackContest.Provider 
      value={{feedback, 
      deleteFeedback, 
      addFeedback,
      editFeedback,
      updateFeedback,
      feedbackEdit,
      }}>
        {children}
    </FeedbackContest.Provider>
  )
}


export default FeedbackContest