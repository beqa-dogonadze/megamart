import React, { useEffect, useState } from 'react'

export const CountdownTimer = () => {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div className='text-3xl p-2 font-semibold text-blue-500 font-palanquin flex justify-end'>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default CountdownTimer
