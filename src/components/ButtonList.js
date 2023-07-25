import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const ButtonList = () => {
  return (
    <div className='p-1'>
      <Link to={"/live"} ><Button name={"All"}/></Link>
      <Link to={"/live"} ><Button name={"Live"}/></Link>
      <Link to={"/live"} ><Button name={"Computer Programming"}/></Link>
      <Link to={"/live"} ><Button name={"News"}/></Link>
      <Link to={"/live"} ><Button name={"Cricket"}/></Link>
      <Link to={"/live"} ><Button name={"Tamil Cinema"}/></Link>
      <Link to={"/live"} ><Button name={"Flimy"}/></Link>
      <Link to={"/live"} ><Button name={"Trailer"}/></Link>
      <Link to={"/live"} ><Button name={"Space Craft"}/></Link>
      <Link to={"/live"} ><Button name={"Trending Now"}/></Link>
      <Link to={"/live"} ><Button name={"Music"}/></Link>
      <Link to={"/live"} ><Button name={"Gamming"}/></Link>
        
       
        
    </div>
  )
}

export default ButtonList