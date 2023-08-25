
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const App = () => {
   let tabs = [{"titles" : "Tab 1", "contents" : "This is the contents for Tab 1" },
   {"titles" : "Tab 2", "contents" : "This is the contents for Tab 2" },
   {"titles" : "Tab 3", "contents" : "This is the contents for Tab 3" }
  
          ]
  return (
    <div>
      <Tabs tabs={tabs}/>
              {/* Do not remove the main div */}
    </div>
  )
}

export default App
