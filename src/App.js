import './App.css';
import Navbar from './Navbar.js';
import TextBox from './TextBox.js';
import Alert from './Alert.js';
import { useState } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
function App() {

  const [style1,setstyle1]= useState({})
  
  const [mode,setmode]= useState(" ")

  const [bgc,setbgc]= useState(null)

  const [heading1,setheading1] = useState({
    color:'black'
  })

  const modechange=()=>{
    if(mode!=="navbar-dark bg-dark"){
    setmode("navbar-dark bg-dark")
    setstyle1({
      color:'white',
      backgroundColor:'black',
      border:'white'
    })
    document.body.style.backgroundColor='black'
    setheading1({
      color: 'white'
    })
    }
    else{
      setmode(" ")
      setstyle1({
        color:'black',
        backgroundColor:'white',
        border:'black'
      })
      document.body.style.backgroundColor='white'
      setheading1({
        color: 'black'
      })
    }
  }

  const modechange1=()=>{
    if(mode!=="bg-success text-white"){
    setmode("bg-success text-white")
    setstyle1({
      color:'white',
      backgroundColor:'#00cc00',
      border:'green'
    })
    document.body.style.backgroundColor='green'
    setheading1({
      color: 'white'
    })
    }
    else{
      setmode(" ")
      setbgc(null)
      setstyle1({
        color:'black',
        backgroundColor:'white',
        border:'white'
      })
      document.body.style.backgroundColor='white'
      setheading1({
        color: 'black'
      })
    }
  }

  const modechange2=()=>{
    if(style1.border!=='blue'){
    setmode("text-white")
    setbgc({
      backgroundColor:'#0099ff'
    })
    setstyle1({
      color:'white',
      backgroundColor:'#00ccff',
      border:'blue'
    })
    document.body.style.backgroundColor='blue'
    setheading1({
      color: 'white'
    })
    }
    else{
      setmode(" ")
      setbgc(null)
      setstyle1({
        color:'black',
        backgroundColor:'white',
        border:'white'
      })
      document.body.style.backgroundColor='white'
      setheading1({
        color: 'black'
      })
    }
  }

  const modechange3=()=>{
    if(style1.border!=='red'){
    setmode("text-white")
    setbgc({
      backgroundColor:'#ff6666'
    })
    setstyle1({
      color:'white',
      backgroundColor:'#ff6600',
      border:'red'
    })
    document.body.style.backgroundColor='red'
    setheading1({
      color: 'white'
    })
    }
    else{
      setmode(" ")
      setbgc(null)
      setstyle1({
        color:'black',
        backgroundColor:'white',
        border:'white'
      })
      document.body.style.backgroundColor='white'
      setheading1({
        color: 'black'
      })
    }
  }

  const modechange4=()=>{
    if(style1.border!=='yellow'){
    setmode("text-white")
    setbgc({
      backgroundColor:'#C0C0C0'
    })
    setstyle1({
      color:'white',
      backgroundColor:'	#CD7F32',
      border:'yellow'
    })
    document.body.style.backgroundColor='#D4AF37 '
    setheading1({
      color: 'white'
    })
    }
    else{
      setmode(" ")
      setbgc(null)
      setstyle1({
        color:'black',
        backgroundColor:'white',
        border:'white'
      })
      document.body.style.backgroundColor='white'
      setheading1({
        color: 'black'
      })
    }
  }

  const [showalert,setshowalert]= useState(null)

  const onshowalert= (type,message)=>{
    setshowalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setshowalert(null)
    }, 1500);
  }
  return (
    <div className="App">
     <Navbar title={"TextUtils"} action1={"About Us"} action2={"Uppercase"} action3={"Lowercase"} action4={"Clear"} controls={mode} modeactivate={modechange} changestyle={style1} modeactive1={modechange1} modeactive2={modechange2} modeactive3={modechange3} modeactive4={modechange4} kanganstar={bgc} />
     <Alert alert={showalert}/>
     <TextBox label={"Enter text here"} heading={"Enter the text to analyze below"} headingcolor={heading1} alertmsg={onshowalert} />
    </div>
  );
}

export default App;
