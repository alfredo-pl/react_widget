import React from 'react';
import Accordion from './Accordion/Accordion';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown'

const items = [
    {
        title:"what's react?",
        content: "React is a front end javascript framework"
    },
    {
        title:"Why use react?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title:"how do you react?",
        content: "You use react by creating components"
    }
]

export default ()=> {
    return (
        <div>
            <br/>
            {/* <Accordion items={items}/> */}
           {/*  <Search/> */}
           <Dropdown/>
        </div>
    )
};
