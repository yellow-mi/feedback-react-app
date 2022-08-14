import Card from "./shared/Card"
import { useState } from 'react'
import Button from "./shared/Button"

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    e.preventDefault()

    setText(e.target.value)
  }
  
  return (
    <Card>
      <form>
        <h2>How'd you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
          placeholder='Write a review'
          onChange={handleTextChange}
          value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm