import React, {useState} from 'react';
import Accordion from './Accordion/Accordion';
import Search from './Search/Search';
import Dropdown from './Dropdown/Dropdown'
import Translate from './Translate/Translate';
import Header from './Header/Header';
import Route from './Header/Route';

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
export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                items={items}
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/">
                <Translate/>
            </Route>
        </div>
    )
};
