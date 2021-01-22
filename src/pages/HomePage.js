import React from 'react'
import {getUsers,} from "../firebase/firebase.storage"

export default function HomePage() {
  return (
    <div>
    <button onClick={getUsers}>Users</button>
    <button onClick>specific user</button>
    <button onClick={getUsers}>Users</button>
      Home
    </div>
  )
}
