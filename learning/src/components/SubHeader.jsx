// SubHeader.jsx
import React from "react";
import { useState } from "react";  
import Shimmer from "./Shimmer";

const SubHeader = ({ allRestaurants, setListOfRestaurants }) => {

    const [searchTxt , setSearchTxt] = useState("");

    const handleFilter = () => {
        const filteredList = allRestaurants.filter(
        (res) => res?.card?.card?.info?.avgRating >= 4.5
        );
        if(filteredList.length!=0) 
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
    <div className="subHeader flex justify-between items-center px-3.5 py-4 border-r-8 h-7 my-3">
      <div className="search">
        <input type="text" name="searchInp" id="searchInp" value={searchTxt}
        placeholder="Search For Restaurant"
        className="border rounded-xl border-solid p-0.5 px-3 m-1 mr-4 border-black"
        onKeyDown={(e)=>{
          if(e.key === "Enter"){
              handleSearch(searchTxt);
            }}}
        
        onChange={(e)=>{  
            setSearchTxt(e.target.value);  
            if(e.target.value ==="") setListOfRestaurants(allRestaurants);      
        }} />
          
        <button 
          className="rounded-2xl border border-gray-400 p-1 px-4  m-1 bg-white shadow-md hover:shadow-lg hover:scale-95 hover:transition-all" onClick={()=>{
            handleSearch(searchTxt);
        }}>Search</button>
      </div>
      <div className="filter flex justify-end p-0.5 pr-4 "> 
        <button className="p-2 bg-orange-300  border border-gray-400 rounded-2xl bg-white shadow-md hover:shadow-lg hover:scale-95 hover:transition-all" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
        <button className="ml-2.5 p-2 bg-slate-100  border border-gray-400 rounded-2xl bg-white shadow-md hover:shadow-lg cursor-pointer bg-red-100  " onClick={handleClearFilter}>
          &#10060; Clear Filter
        </button>
      </div>
    </div>
  );
};

export default SubHeader;