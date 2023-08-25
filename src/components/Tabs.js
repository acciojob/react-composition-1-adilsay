import React,{useState} from "react";


const Tabs = (props)=>{
        console.log(typeof(props));
        const [activeTab, setActiveTab] = useState(props.tabs[0].titles);
        function displayContent(titles){
            setActiveTab(titles);
        }

    return (
        <div>
            {props.tabs.map(tab=>(<li onClick={()=> displayContent(tab.titles)}>{tab.titles}</li>))}
            <div>
                {props.tabs.filter(tab=>tab.titles===activeTab)[0].contents}
            </div>
            

        </div>
    )
}

export default Tabs;