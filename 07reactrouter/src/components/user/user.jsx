import React from 'react'

function user() {
    const {userId} = useParams()
  return (
    <div>
      User : {userId}
    </div>
  )
}

export default user
