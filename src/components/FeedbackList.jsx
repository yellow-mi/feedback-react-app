import FeedbackContext from "../context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import Spinner from "./shared/Spinner"

function FeedbackList() {
  const {feedback, isLoading } = useContext(FeedbackContext)

  if(!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet</p>
  }
  
  return isLoading ? (
    <Spinner />
  ) : (
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