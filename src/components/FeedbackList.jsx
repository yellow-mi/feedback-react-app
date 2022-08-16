import FeedbackContext from "../context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"

function FeedbackList() {
  const {feedback } = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
        item={item}
        key={item.id} />
      ))}
    </div>
  )
}

export default FeedbackList