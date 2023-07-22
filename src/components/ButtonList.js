import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const ButtonList = () => {
  return (
    <div>
      <Link to={"/live"} ><Button name={"Live"}/></Link>
        
       
        
    </div>
  )
}

export default ButtonList