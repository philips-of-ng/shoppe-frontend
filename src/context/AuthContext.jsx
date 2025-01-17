import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  const [pwTrial, setPwTrial] = useState(0)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      setUser(storedUser)
    }

    const trials = JSON.parse(localStorage.getItem('pwTrials'))
    if (trials) {
      setPwTrial(trials)
    }
  }, [])


  const maxTrials = 5
  const handleTrialCount = () => {
    if (pwTrial >= maxTrials) {
      return 'Too many wrong trials, try again later'
    }
    setPwTrial((prev) => (prev + 1))
    return 'done'
  }

  useEffect(() => {
    localStorage.setItem('pwTrials', JSON.stringify(pwTrial));
  }, [pwTrial]);

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, pwTrial, handleTrialCount }}>
      {children}
    </AuthContext.Provider>
  )

}
