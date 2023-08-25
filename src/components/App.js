
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const App = () => {
   let tabs = [{"title" : "Tab 1", "content" : "This is a content of Tab 1" },
   {"title" : "Tab 2", "content" : "This is a content of Tab 2" },
   {"title" : "Tab 3", "content" : "This is a content of Tab 3" }
  
          ]
  return (
    <div>
      <Tabs tabs={tabs}/>
              {/* Do not remove the main div */}
    </div>
  )
}

export default App
