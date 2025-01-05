import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {

  const user = useContext(AuthContext)

  useEffect(() => {
    console.log('User details from context API', user);
  }, [user])

  return (
    <div>
      
    </div>
  )
}

export default Home