import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { toast } from 'react-toastify';

function App() {
  // Hero Section Working For Add Credit in Wallet
  const [addCredits, setAddCredits] = useState(0);
  // Working For Toogle The Button Available or Selected State
  const [isActive, setIsActive] = useState(true);
  // Fetch Data Will Show Through this State
  const [cards, setCards] = useState([]);
  // in Selected Toogle Button Will Show Through This State
  const [carts, setCart] = useState([])

  // Handle Add Credit Button For Add Credit
  const handleAddCredits = () => {
    const amount = addCredits + 25000000;
    toast.success("Credit is Succesfully Added!!", {
      position: "top-center",
      autoClose: 1500,
    }
    )
    setAddCredits(amount);
  }

  // Handle Toogle Button For Toogling The Btn Here
  const handleToogleBtn = (status) => {
    if (status === "available") {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  }

  // Fetching The Data For Showing Like Card in UI
  useEffect(() => {
    fetch('fake-player.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  // Handle Selected Toogle Button And Show This Cart
  const handleCart = (card) => {
    if (addCredits < card.price) {
      toast.error("You do not Have Sufficient Balance", {
        position: "top-center",
        autoClose: 1500,
      });
      return;
    }

    const alreadyInCart = carts.find((item) => item.id === card.id);
    if (alreadyInCart) {
      toast.warning("You Already Have This Player.", {
        position: "top-center",
        autoClose: 1500,
      });
      return;
    }

    if (carts.length >= 6) {
      toast.warning("You Already Have 6 Player.", {
        position: "top-center",
        autoClose: 1500,
      });
      return;
    }

    const newCart = [...carts, card];
    toast.success("Player Has Succesfully Added.", {
      position: "top-center",
      autoClose: 1500,
    })
    setCart(newCart);
    setAddCredits(addCredits - card.price);
  }

  // Handle Remove or Delete The Cart
  const handleRemove = (cart) => {
    const newCart = carts.filter(item => item.id !== cart.id);
    setCart(newCart);
    setAddCredits(addCredits + cart.price);

    toast.info(`${cart.name} is Removed`, {
      position: "top-center",
      autoClose: 1500,
    });
  };

  return (
    <>
      <Header addCredits={addCredits}></Header>
      <Main handleRemove={handleRemove} carts={carts} handleCart={handleCart} cards={cards} isActive={isActive} handleToogleBtn={handleToogleBtn} handleAddCredits={handleAddCredits}></Main>
    </>
  )
}

export default App
