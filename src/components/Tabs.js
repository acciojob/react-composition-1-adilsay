import React,{useState} from "react";


const Tabs = (props)=>{
        console.log(typeof(props));
        const [activeTab, setActiveTab] = useState(props.tabs[0].title);
        function displayContent(title){
            setActiveTab(title);
        }

    return (
        <div>
            {props.tabs.map(tab=>(<li onClick={()=> displayContent(tab.title)}>{tab.title}</li>))}
            <div>
                {props.tabs.filter(tab=>tab.title===activeTab)[0].content}
            </div>
            

        </div>
    )
}

export default Tabs;