import React, {useState} from 'react';
import Accordion from './Accordion/Accordion';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown'
import Translate from './Translate/Translate';

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
const options= [
    {
        label:"The color Red",
        value: 'red'
    },
    {
        label:"The color Blue",
        value: 'blue'
    },
    {
        label:"The color Green",
        value: 'green'
    }
]
export default ()=> {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
            <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            <br/>
            {/* <Accordion items={items}/> */}
           {/*  <Search/> */}
           { showDropdown ? (
           <Dropdown 
            label="Select at Color"
            selected={selected} 
            onSelectedChange={setSelected}
            options={options}/> ) : null
        }
        <hr/>
        <Translate/>
        </div>
    )
};
