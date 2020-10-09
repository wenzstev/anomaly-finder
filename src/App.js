import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainActionButton from "./components/MainActionButton"
import Background from "./components/Background"
import Container from "./components/Container"

function App() {
  return (
    <Background>
      <Container>
        <MainActionButton text={"Find Anomaly"}/>
        <MainActionButton text={"Log Anomaly"} />
      </Container>
    </Background>
  );
}

export default App;
