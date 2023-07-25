import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { addCache } from "../utils/CacheSlice";
import { setQueryValue } from "../utils/QuerySlice";
import { Link } from "react-router-dom";


const Head = () => {
  const dispatch = useDispatch();
  const handelMenuBar = () => {
    dispatch(toggleMenu());
  };

  const [searchValue, setSearchValue] = useState("");
  
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.cache);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (searchCache[searchValue]) {
          console.log("no api")
          setSuggestions(searchCache[searchValue]);
        } else {
          searchAPICall(searchValue);
        }
      },

      200
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const searchAPICall = async (searchValue) => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchValue);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      addCache({
        [searchValue]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-1   m-2 shadow-md">
      <div className=" col-span-1 flex">
        <img
          onClick={() => {
            handelMenuBar();
          }}
          className="h-8 my-4 "
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        ></img>
        <img
          className="h-16 mx-3"
          alt="logo"
          src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
        ></img>
      </div>
      <div className="col-span-10 text-center">
        <input 
          className="w-1/2 h-8 my-3 border-gray-400 rounded-l-full p-2 "
          type="text"
          placeholder="Search here"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <div className="fixed">
          <ul>
            {suggestions.map((val) => {
              return <li><button onClick={()=>{
                setSearchValue(val);
              }}>{val}</button></li> ;
            })}
          </ul>
        </div>
        
        <a href={"results?search_query="+searchValue} ><button>Search</button></a>
       
        
       
       
      </div>

      <div className="col-span-1 ">
        <img
          className="h-10 my-2"
          alt="profile"
          src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
        ></img>
      </div>
    </div>
  );
};

export default Head;
