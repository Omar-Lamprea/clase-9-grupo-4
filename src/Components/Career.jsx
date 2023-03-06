import React from 'react'

const Career = ({career}) => {

  const calcAverage = () =>{
    const sumatoria = career.average.reduce((a,b) => a + b, 0)
    return (sumatoria / career.average.length).toFixed(2)
  }
  const average = career.average.length > 0 ? calcAverage() : 0
  return (
    <tr>
      <td>{career.careerName}</td>
      <td>{career.cantStudents}</td>
      <td>{average}</td>
    </tr>
  )
}

export default Career