import React, {useEffect, useState} from "react";
import HomeCards from "./HomeCards";
import './Proposal.scss'
import SearchBar from "./SearchBar";

function Proposal() {

  const [cards, setCards] = useState([]);
  const [filteredCards,setFilteredCards] = useState([])
  const [isSearchable,setIsSearchable] = useState(false)

  useEffect(() => {
    fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
        .then((res) => res.json())
        .then((res) => {
          setCards([...res]);
        });
  }, []);

  function searchHandler(event){
   const searchQuery = event.target.value.toLowerCase()
    if(searchQuery.length>3){
      const filteredCards = cards.filter((el)=>el.title.toLowerCase().includes(searchQuery))
      setFilteredCards([...filteredCards])
      setIsSearchable(true)
    }else{
      setFilteredCards([])
      setIsSearchable(false)
    }
  }

  return(
    <div className="container">
    <div className="proposal">
      <div className="proposal-title">Our Latest Developments</div>

      <div className="proposal-bar"><SearchBar search={searchHandler}/></div>
      <div className="proposal-cards">
        <div className="cards"><HomeCards cards={isSearchable ? filteredCards : cards}/></div>
        </div>
        <div className="proposal-button">
          <button className="button-see">See more &emsp;
            <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" stroke-width="2" stroke-linecap="round"/>
          </svg>
          </button>
        </div>
    </div>
  </div>
  )
  }
export default Proposal