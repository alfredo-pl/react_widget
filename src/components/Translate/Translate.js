import React,{useState} from 'react';
import Dropdown from '../Dropdown/Dropdown';

const options = [
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label:'Arabic',
        value: 'ar'
    },
    {
        label:'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [languaje,setLanguaje] = useState(options[0])
    
    return ( 
        <div>
            <Dropdown 
            label="Select at languaje"
            options={options}
            selected={languaje}
            onSelectedChange={setLanguaje}
            />
        </div>
     );
}
 
export default Translate;