import { useState } from 'react'
import './App.css'

function App() {
const [bg,setbackground]=useState('black')
  const red=()=>{
    setbackground('silver')
  }
  const yellow=()=>{
    setbackground('crimson')
  }
  const green=()=>{
    setbackground('plum')
  }
  const blue=()=>{
    setbackground('teal')
  }
  return (
    <>
  <div>
    <div style={{backgroundColor:bg,width:'100%', height:'100vh', display:'flex', alignItems:'center',justifyContent:'center'} }>
      <div style={{display:'flex', justifyContent:'space-around', width:'500px', height:'auto'}}>
<button onClick={red} style={{width:'100px', height:'35px' ,color:'white',fontSize:'18px', border:'2px solid black',backgroundColor:'silver', borderRadius:'10px' }}>Silver</button>
<button onClick={yellow}style={{width:'100px', height:'35px' ,color:'white',fontSize:'18px', border:'2px solid black',backgroundColor:'crimson', borderRadius:'10px' }}>Crimson</button>
<button onClick={green} style={{width:'100px', height:'35px' ,color:'white',fontSize:'18px', border:'2px solid black',backgroundColor:'plum', borderRadius:'10px' }}>Plum</button>
<button onClick={blue} style={{width:'100px', height:'35px' ,color:'white',fontSize:'18px', border:'2px solid black',backgroundColor:'teal', borderRadius:'10px' }}>Teal</button>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default App
