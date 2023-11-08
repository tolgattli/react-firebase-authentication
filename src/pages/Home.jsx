import React from 'react'

const Home = ({users}) => {
  return (
    <div>Welcome {users?.email}</div>
  )
}

export default Home