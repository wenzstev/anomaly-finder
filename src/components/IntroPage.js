import React, {useState, useEffect} from "react"

import Typewriter from 'typewriter-effect'

const pageParagraphs = [
  '. . . . . . . . in . . . . . . can . . . . . .  me . . . . . . . . . . . . . . . . . . . ',
  '.....come in? Come in, do you read?',
  '...There, your signal is stabilizing. The link is secure.',
  'Here\'s the site I was telling you about. So glad you\'ve decided to be a part of my little project!',
  'Click the "Find Anomaly" button to read anomalies that other explorers have added.',
  'Or click the "Log Anomaly" button to write your own!',
  'Click the "?" for additional help and comments.',
  'That\'s all I\'ve got right now. Happy logging!'
]

const IntroParagraph = ({content, setNext, next}) => {
  const [curChar, setCurChar] = useState(0)
  const [display, setDisplay] = useState("")
  const [skip, setSkip] = useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setDisplay(display=>display + content.charAt(curChar))
      setCurChar(curChar=>curChar+1)
    }, 20)
  }, [])


  useEffect(()=>{
    if (skip) {
      console.log("skipping")
      setDisplay(display=>display + content.substr(curChar+1))
      setCurChar(content.length)
    }
  }, [skip])



  return (
    <p onClick={()=>setSkip(true)}>
      {display}
    </p>
  )
}

const IntroPage = () => {
  const [display, setDisplay] = useState([])
  const [curPar, setCurPar] = useState(0)
  const [next, setNext] = useState(true)


  useEffect(()=>{
    console.log(next)
    if (next && curPar < pageParagraphs.length){
      setDisplay(display=>[...display, <IntroParagraph key={display.length} next={next} setNext={setNext} content={pageParagraphs[curPar]}/>])
      setCurPar(curPar=>curPar+1)
      setNext(false)
    }
  }, [curPar, next])


  return (
    <div>
      {display}
    </div>
  )
}

// const IntroPage = () => {
//   return (
//       <Typewriter
//         options={{
//           cursor: '',
//           delay: 25
//         }}
//         onInit={(typewriter)=>{
//           typewriter.start()
//           for (let i = 0; i < pageParagraphs.length; i++){
//             console.log(i)
//             typewriter.typeString(pageParagraphs[i]).pauseFor(2000)
//           }
//         }}
//       />
//   )
// }

export default IntroPage
