import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ handleDelete, item }) {
  const { rating, text } = item

  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple'/>
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem