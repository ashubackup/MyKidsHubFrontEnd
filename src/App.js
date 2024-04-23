import React from 'react'
import Routing from './routing/Routing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer 
    style={{
      fontSize:"1.6rem"
    }}
    />
    <Routing />
    </>
  )
}

export default App