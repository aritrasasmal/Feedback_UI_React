import { createContext, useEffect, useState } from "react";
const FeedbackContest = createContext()

export const FeedbackProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(true)
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

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const deleteFeedback = async (id) => {
    if (window.confirm("Are your sure to delete?")) {
      await fetch(`/feedback/${id}`, {method: 'DELETE'})

      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  const addFeedback = async (newFeedback) =>{
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(newFeedback)
    })

    const data = await response.json()
    setFeedback([data, ...feedback])
  }

  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = async (id, updtItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify(updtItem)
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...data} : item))
  )}

  return (
    <FeedbackContest.Provider 
      value={{
        feedback, 
        feedbackEdit,
        isLoading,
        deleteFeedback, 
        addFeedback,
        editFeedback,
        updateFeedback,
      }}>
        {children}
    </FeedbackContest.Provider>
  )
}


export default FeedbackContest