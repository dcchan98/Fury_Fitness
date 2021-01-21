import React from 'react'

export default function TrackerPage(props) {

  if(props.currentUser){
    return (
    <div>

      {`${props.currentUser.displayName}'s Tracker`}
    </div>
  )
  }
  else{
    return (
    <div className = 'container'>
    <h1>Log In or Sign Up to use the tracker</h1>
    </div>
  )
  }

}
