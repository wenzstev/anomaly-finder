import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import MainActionButton from "./components/MainActionButton"
import Background from "./components/Background"
import Container from "./components/Container"
import Modal from "./components/Modal"
import AnomalyDisplay from "./components/AnomalyDisplayController"
import AnomalyLog from "./components/AnomalyLogController"

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContents, setModalContents] = useState()

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
      <Container>
        <MainActionButton text={"Find Anomaly"} onClick={()=>setModal(<AnomalyDisplay />)}/>
        <MainActionButton text={"Log Anomaly"} onClick={()=>setModal(<AnomalyLog />)} />
      </Container>
      <Modal
        open={modalOpen}
        contents={modalContents}
        closeModal={closeModal}
        >Test text</Modal>
    </Background>
  );
}

export default App;
