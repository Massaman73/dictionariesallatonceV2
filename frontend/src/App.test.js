import { React } from "react";
import { useState } from 'react'
import axios from "axios";
import Select from "react-select";


const Api = () => {
  const [resFromReverso, setresFromReverso] = useState()
  const [resFromInfopedia, setresFromInfopedia] = useState()
  const [resFromMichaelis, setresFromMichaelis] = useState()
  const [resFromLingea, setresFromLingea] = useState()
  const [word, setWord] = useState("");
  const options = [

    { value: '1', label: 'Portuguese to English ' },
    { value: '2', label: 'English to Portuguese' },
    { value: '3', label: 'Spanish to English' },
    { value: '4', label: 'English to Spanish' },
  ];
  const [langValue, setlangValue] = useState(options[0].value);
  const [dicName1, setdicName1] = useState();
  const [dicName2, setdicName2] = useState();
  const [dicName3, setdicName3] = useState();
  const handleChange = (value) => {
    console.log(value.value);
    setlangValue(value.value);
  };
  const setdicNameAndSend = (value) => {
    switch (value) {
      case "1":
      case "2":
        setdicName1('Reverso')
        setdicName2('Infopedia')
        setdicName3("Michaelis")
        sendPostInfo();
        sendPostReverso();
        sendPostMichaelis();

        return
      case "3":
      case "4":
        setdicName1('Reverso')
        setdicName2('Lingea')
        setdicName3("SpanishDict")
        sendPostLingea()
        return
      case "5":
      case "6":
        setdicName1('Reverso')
        setdicName2('Infopedia')
        setdicName3("SpanishDic")
        return
      default:

        return
    }


  }


  const sendPostInfo = () => {
    axios.post('/apiInfopedia', {
      postData: word,
      postLang: langValue
    })
      .then(function (res) {
        console.log(res.data);
        setresFromInfopedia(res.data);
      })
  }
  const sendPostReverso = () => {
    axios.post('/apiReverso', {
      postData: word,
      postLang: langValue
    })
      .then(function (res) {
        console.log(res.data);
        setresFromReverso(res.data);
      })
  }

  const sendPostMichaelis = () => {
    axios.post('/apiMichaelis', {
      postData: word,
      postLang: langValue
    })
      .then(function (res) {
        console.log(res.data);
        setresFromMichaelis(res.data);
      })
  }
  const sendPostLingea = () => {
    axios.post('/apiLingea', {
      postData: word,
      postLang: langValue
    })
      .then(function (res) {
        console.log(res.data);
        setresFromLingea(res.data);
      })
  }





  return (
    <div className="Api">
      <div className="flex flex-col items-center justify-between   bg-cyan-900">
        <Select className="mt-2 z-10 font-bold"
          placeholder="Choose Language"
          onChange={handleChange} options={options} />
        <div className="xl:w-96 my-3 align-middle items-center">
          <div className="input-group  relative flex  w-full mb-4">
            <input type="search" className=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
              value={word}
              onChange={(e) => setWord(e.target.value)} />
            <button onClick={() => {

              setdicNameAndSend(langValue);

            }} className="btn bg-gradient-to-r from-teal-500 to-cyan-600 inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
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
          "
        id="tabs-tabJustify" role="tablist">
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
            aria-controls="tabs-homeJustify" aria-selected="true">
            {
              dicName1 || "Reverso"
            }
          </a>
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
            aria-controls="tabs-profileJustify" aria-selected="false">
            {
              dicName2 || "Infopedia"
            }

          </a>
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
            aria-controls="tabs-messagesJustify" aria-selected="false">
            {dicName3 || "Micahelis"}
          </a>
        </li>
      </ul>
      <div className="tab-content" id="tabs-tabContentJustify">
        {
          (() => {
            switch (langValue) {
              case "1":
              case "2":
                return (<div>
                  <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel" aria-labelledby="tabs-home-tabJustify">
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
                </div>);
             
              default: return;


            }
          })()

        }

        <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel" aria-labelledby="tabs-home-tabJustify">
          <div dangerouslySetInnerHTML={{ __html: resFromReverso }}>
          </div>
        </div>
        <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div dangerouslySetInnerHTML={{ __html: resFromInfopedia }}>
          </div>
        </div>
        <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div dangerouslySetInnerHTML={{ __html: resFrom }}>
          </div>
        </div>
      </div>




    </div>

  );

}

export default Api;