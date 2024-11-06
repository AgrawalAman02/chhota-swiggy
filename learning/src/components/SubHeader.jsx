// SubHeader.jsx
import React from "react";
import { useState } from "react";  

const SubHeader = ({ allRestaurants, setListOfRestaurants }) => {

    const [searchTxt , setSearchTxt] = useState("");

    const handleFilter = () => {
        const filteredList = allRestaurants.filter(
        (res) => res.card.card.info.avgRating >= 4.5
        );
        setListOfRestaurants(filteredList);
    };

    const handleClearFilter = () => {
        setListOfRestaurants(allRestaurants);
    };

    const handleSearch = (txt)=>{
        const searchedList = allRestaurants.filter(
            (res)=> res.card.card.info.name.toLowerCase().includes(txt.toLowerCase())
        );
        if (searchedList.length === 0) {
            setListOfRestaurants(allRestaurants);
          } else {
            setListOfRestaurants(searchedList);
          }
        
    };


  return (
    <div className="subHeader">
      <div className="search">
        <input type="text" name="searchInp" id="searchInp" value={searchTxt}
        onKeyDown={(e)=>{
          if(e.key === "Enter"){
              handleSearch(searchTxt);
            }}}
        
        onChange={(e)=>{  
            setSearchTxt(e.target.value);  
            if(e.target.value ==="") setListOfRestaurants(allRestaurants);      
        }} />
          
        <button className="search-btn" onClick={()=>{
            handleSearch(searchTxt);
        }}>Search</button>
      </div>
      <div className="filter"> 
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
        <button className="clear-filter" onClick={handleClearFilter}>
          &#10060; Clear Filter
        </button>
      </div>
    </div>
  );
};

export default SubHeader;