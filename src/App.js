import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import './App.css'


export default function App() {
  const [event, setEvents] = useState([]);
  useEffect(()=>{
    console.log(event);
  },[event])
  
  const [triggerEvent, setTriggerEvent] = useState(false)

  return (
    <div className="bg-green-100 pt-6 font-sans">
      <div className="pa-0">Info: To view the actions, drag the components in the left section to mid section and press start</div>
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar triggerEvent={triggerEvent} getEvents={(event) => setEvents(event)} /> 
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <button onClick={() => setTriggerEvent(!triggerEvent)} className="bg-blue-500 mt-3 mx-3">start</button>
          <PreviewArea events={event} />
        </div>
      </div>
    </div>
  );
}
