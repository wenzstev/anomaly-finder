import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import MainActionButton from "./components/MainActionButton"
import Background from "./components/Background"
import Container from "./components/Container"
import Modal from "./components/Modal"
import AnomalyDisplay from "./components/AnomalyDisplayController"
import AnomalyLog from "./components/AnomalyLogController"
import ReviewAnomalies from "./components/ReviewAnomalies"
import AnomalyTicker from "./components/AnomalyTicker"

import {StyledButton} from "./components/ReusableStylings"

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContents, setModalContents] = useState()

  const [savedAnomalies, setSavedAnomalies] = useState(
    localStorage.getItem('savedAnomalies') || ''
  )

  const [votedAnomalies, setVotedAnomalies] = useState(
    localStorage.getItem('votedAnomalies') || ''
  )

  useEffect(()=>{
    if (savedAnomalies === '') {
      console.log("creating new local storage")
      localStorage.setItem('savedAnomalies', JSON.stringify([]))
      setSavedAnomalies(localStorage.getItem('savedAnomalies'))
    } /*else {
      localStorage.removeItem('savedAnomalies')
    } */ //leaving in for debug purposes
    if (votedAnomalies === ''){
      console.log("creating voted anomalies list")
      localStorage.setItem('votedAnomalies', JSON.stringify([]))
    }
  }, [])

  const setModal = (contents) => {
    setModalContents(contents)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalContents(null)
    setModalOpen(false)
  }


  return (
    <Background>
      <AnomalyTicker />
      <Container>
        <MainActionButton text={"Find Anomaly"} onClick={()=>setModal(<AnomalyDisplay />)}/>
        <MainActionButton text={"Log Anomaly"} onClick={()=>setModal(<AnomalyLog />)} />
      </Container>
      <StyledButton
        onClick={()=>setModal(<ReviewAnomalies />)}
        subtle
        largeOnly
        style={{fontFamily:"courier", position:"absolute", bottom:0}}
        >Login (under construction)</StyledButton>
      <Modal
        open={modalOpen}
        contents={modalContents}
        closeModal={closeModal}
        >Test text</Modal>
    </Background>
  );
}

export default App;
