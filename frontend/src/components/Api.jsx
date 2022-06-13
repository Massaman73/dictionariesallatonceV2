import { React } from "react";
import { useState } from 'react'
import axios from "axios";
const Api = () => {
  const [resFromReverso, setresFromReverso] = useState()
  const [resFromInfopedia, setresFromInfopedia] = useState()
  const [resFromMichaelis, setresFromMichaelis] = useState()
  
  const [word, setWord] = useState("");
  const options = [
    {value: '', text: 'Choose language '},
    {value: '1', text: 'Pt to En'},
    {value: '2', text: 'En to Pt'},
  ];
const [language, setlanguage] = useState(options[0].value);


  const handleChange = event => {
    console.log(event.target.value);
    setlanguage(event.target.value);
  };



  const sendPostInfo = () => {
    axios.post('/apiInfopedia', {
      postData: word,
      postLang: language 
    })
      .then(function (res) {
        console.log(res.data);
        setresFromInfopedia(res.data);
      })
  }
  const sendPostReverso = () => {
    axios.post('/apiReverso', {
      postData: word,
      postLang: language
    })
      .then(function (res) {
        console.log(res.data);
        setresFromReverso(res.data);
      })
  }

  const sendPostMichaelis = () => {
    axios.post('/apiMichaelis', {
      postData: word,
      postLang: language
    })
      .then(function (res) {
        console.log(res.data);
        setresFromMichaelis(res.data);
      })
  }
  return (
    <div className="Api">
      <div className="flex flex-col items-center justify-between bg-cyan-900">
        <select className="form-select form-select-sm
      items-center  
    grow-0
    appearance-none
    block
    sm:w-1/3
    md:w-1/4
    
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
    aria-label=".form-select-sm example"
    value={language} onChange={handleChange}>
      
      {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      
    </select>
    
        <div className="xl:w-96 my-3 align-middle items-center">
          <div className="input-group  relative flex  w-full mb-4">
            <input type="search" className=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
              value={word}
              onChange={(e) => setWord(e.target.value)} />
            <button onClick={() => {
              sendPostInfo();
              sendPostReverso();
              sendPostMichaelis();
            }} className="btn bg-gradient-to-r from-teal-500 to-cyan-600 inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <p>{word}</p>
      <ul className="
  nav nav-tabs nav-justified
  flex 
  w-full
  flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
" id="tabs-tabJustify" role="tablist">
        <li className="nav-item flex-grow text-center" role="presentation">
          <a href="#tabs-homeJustify" className="
      nav-link
     w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
            aria-controls="tabs-homeJustify" aria-selected="true">Reverso</a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a href="#tabs-profileJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
            aria-controls="tabs-profileJustify" aria-selected="false">Infopedia</a>
        </li>
        <li className="nav-item flex-grow text-center" role="presentation">
          <a href="#tabs-messagesJustify" className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-messagesJustify" role="tab"
            aria-controls="tabs-messagesJustify" aria-selected="false">Michaelis</a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
          aria-labelledby="tabs-home-tabJustify">
          <div dangerouslySetInnerHTML={{ __html: resFromReverso }}>
          </div>
        </div>
        <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div dangerouslySetInnerHTML={{ __html: resFromInfopedia }}>
          </div>
        </div>
        <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div dangerouslySetInnerHTML={{ __html: resFromMichaelis }}>
          </div>
        </div>
      </div>




    </div>

  );

}

export default Api;