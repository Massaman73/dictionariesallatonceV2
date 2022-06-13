import './App.css';
import { useState, useEffect } from 'react'
import { React } from "react";
import { DOMpurify } from "dompurify";



function App() {
 
  const [message, setMessage] = useState({__html: ""});
  useEffect(() => {
    fetch('/api')
      .then((res) => {
        return res.text();
      }).then((data) => {
        console.log(typeof (data));
        console.log(data);
        setMessage(data);
      })

  }, [])
  return (
    <>
    <Tabs className="">
        <TabList className=" 
        ">
          <Tab 
          >Reverso</Tab>
          <Tab>Infopedia</Tab>
          <Tab>Michaelis</Tab>
        </TabList>

        <TabPanel className="
        ">
          <div dangerouslySetInnerHTML={{ __html: resFromReverso }}>
          </div>
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: resFromInfopedia }}>
          </div>
        </TabPanel>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: resFromMichaelis }}>
          </div>
        </TabPanel>
      </Tabs>
    <div className="App">
      <div dangerouslySetInnerHTML={{__html: message}}>

      </div>
    </div>
    </>
  );
}

export default App;