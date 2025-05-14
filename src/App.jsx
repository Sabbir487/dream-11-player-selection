import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [addCredits, setAddCredits] = useState(0);

  const handleAddCredits = () => {
    const amount = addCredits + 2500000;
    toast.success("Credit is Succesfully Added!!", {
      position: "top-center",
      autoClose: 1500,
    }
    )
    setAddCredits(amount);
  }

  return (
    <>
      <Header addCredits={addCredits}></Header>
      <Main handleAddCredits={handleAddCredits}></Main>
      <ToastContainer />
    </>
  )
}

export default App
