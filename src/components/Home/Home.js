import React from 'react'
import { Link }from 'react-router-dom';
export default function Home() {
  return (
    <div>
       <h1>Home</h1>
       <Link to='/NewAbout' data-testid="linkid" >NewAbout</Link>
       <br></br>
       <Link to='/About' data-testid="linkid" >About</Link>
       <br></br>
       <Link to='/Data' data-testid="linkid">Data</Link>
    </div>

  )
}
