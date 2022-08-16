import Card from './shared/Card'
import { FaEdit, FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import { useContext } from 'react'

function FeedbackItem({ item }) {
  const { rating, text } = item
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem