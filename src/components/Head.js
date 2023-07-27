import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { addCache } from "../utils/CacheSlice";

import Logo from "../img/logo.png";

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
          console.log("no api");
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
    <div className="grid grid-flow-col p-1   m-2 shadow-md bg-black">
      <div className=" col-span-1 flex">
        <button
          onClick={() => {
            handelMenuBar();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
       
        <img className="h-12 p-1 m-2 pl-3" alt="logo" src={Logo}></img>
      </div>
      <div className="col-span-10 text-center">
       
        <input
          className="w-1/2 h-10 my-3 border bg-black border-[#272727] rounded-l-full  p-4 text-white "
          type="text"
          placeholder="Search here"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <div className=" ml-60 w-96 fixed ">
          <ul className=" fixed rounded-lg p-4">
            
            {suggestions.map((val) => {
              return (
                
                <li className="pl-3 pt-1 pb-1 bg-[#141414] w-96  text-left hover:bg-[#383838]">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-5 h-5 pt-1 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                    <button
                      className="pl-1 text-white"
                      onClick={() => {
                        setSearchValue(val);
                      }}
                    >
                      {val}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <a href={"results?search_query=" + searchValue}>
          <button className="border h-10 pb-2 pl-2 pr-2 bg-black  border-[#272727] rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5 pt-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </a>
      </div>

      <div className="col-span-1 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6 mt-4 mr-5"
        >
          <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6 mt-4 mr-5"
        >
          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
          <path
            fillRule="evenodd"
            d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-10 h-10 mt-2"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Head;
