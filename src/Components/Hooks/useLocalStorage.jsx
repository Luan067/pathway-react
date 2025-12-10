import React from 'react'

const useLocalStorage = (key, value) => {
  return (
    localStorage.setItem(key)
  )
}

export default useLocalStorage