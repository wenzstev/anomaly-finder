import React, {useState, useEffect} from "react"

import Typewriter from 'typewriter-effect'

const pageParagraphs = [
  '<p>. . . . . . . . in . . . . . . can . . . . . .  me . . . . . . . . . . . . . . . . . . . </p>',
  '<p>.....come in? Come in, do you read?</p>',
  '<p>...There, your signal is stabilizing. The link is secure.</p>',
  '<p>Here\'s the site I was telling you about. So glad you\'ve decided to be a part of my little project!</p>',
  '<p>Click the "Find Anomaly" button to read anomalies that other explorers have added.</p>',
  '<p>Or click the "Log Anomaly" button to write your own!</p>',
  '<p>Click the "?" for additional help and comments. </p>',
  '<p>That\'s all I\'ve got right now. Happy logging!</p>'
]

// const IntroPage = () => {
//   const [display, setDisplay] = useState("")
//   const [curChar, setCurChar] = useState(0)
//   const [curPar, setCurPar] = useState(0)
//   const [skip, setSkip] = useState(true)
//
//

//   useEffect(()=>{
//     setDisplay(display => display + pageParagraphs[curPar])
//     if (curPar < pageParagraphs.length){
//       setTimeout(()=>setCurPar(curPar => curPar + 1), 500)
//     }
//   }, [curPar])
//
//   useEffect(()=>{
//     if (curPar < pageParagraphs.length){
//       setDisplay(display => display + pageParagraphs[curPar].charAt(curChar))
//       if (curChar < pageParagraphs[curPar].length){
//         setTimeout(()=>setCurChar(curChar=>curChar + 1), 50)
//       } else {
//         setCurChar(0)
//       }
//     }
//
//   }, [curChar])
//
//
//   return (
//     <div>
//       {display}
//     </div>
//   )
// }

const IntroPage = () => {
  return (
      <Typewriter
        options={{
          cursor: '',
          delay: 25
        }}
        onInit={(typewriter)=>{
          typewriter.start()
          for (let i = 0; i < pageParagraphs.length; i++){
            console.log(i)
            typewriter.typeString(pageParagraphs[i]).pauseFor(2000)
          }
        }}
      />
  )
}

export default IntroPage
