import './App.css';
//import { useState, useEffect } from 'react';
import { React } from "react";
//import axios from "axios";
import Api from './components/Api';
import Header from './components/header';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';



function App() {
/*
  const [resFromReverso, setresFromReverso] = useState({ __html: "" })
  const [resFromInfopedia, setresFromInfopedia] = useState({ __html: "" })
  const [resFromMichaelis, setresFromMichaelis] = useState({ __html: "" })
  const [word, setWord] = useState("");

  const sendPostInfo = () => {
    axios.post('/apiInfopedia', {
      postData: word
    })
      .then(function (res) {
        console.log(res.data);
        setresFromInfopedia(res.data);
      })
  }
  const sendPostReverso = () => {
    axios.post('/apiReverso', {
      postData: word
    })
      .then(function (res) {
        console.log(res.data);
        setresFromReverso(res.data);
      })
  }

  const sendPostMichaelis = () => {
    axios.post('/apiMichaelis', {
      postData: word
    })
      .then(function (res) {
        console.log(res.data);
        setresFromMichaelis(res.data);
      })
  }
*/

  return (
   
   
  <div className='App'>
     
    <Header/>
    <Api/>
     
  </div>
    
   
   
   
    /* <div className="App">
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />

      <button onClick={()=>{
        sendPostInfo();
        sendPostReverso();
        sendPostMichaelis();
        }}>search</button>
      <p>{word}</p>
      <ul class="
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
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-homeJustify" class="
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
      aria-controls="tabs-homeJustify" aria-selected="true">Home</a>
  </li>
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-profileJustify" class="
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
  <li class="nav-item flex-grow text-center" role="presentation">
    <a href="#tabs-messagesJustify" class="
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
      aria-controls="tabs-messagesJustify" aria-selected="false">Messages</a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContentJustify">
  <div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
    aria-labelledby="tabs-home-tabJustify">
    <div dangerouslySetInnerHTML={{ __html: resFromReverso }}>
          </div>
  </div>
  <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
  <div dangerouslySetInnerHTML={{ __html: resFromInfopedia }}>
          </div>
  </div>
  <div class="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
  <div dangerouslySetInnerHTML={{ __html: resFromMichaelis }}>
          </div>
  </div>
</div>




    </div>*/

  );
}

export default App;