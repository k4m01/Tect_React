import React from 'react';
import {Header,Content,Footer} from'./func-conponent';
import Calandar from './class-component';

function App() {
  return (
    <>
      <Header/>
      <p><center><Calandar/></center></p>
      <Content/>
      <Footer/>
    </>
  )
}

export default App;
