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
/* AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM */
const Translate = () => {
    const [languaje,setLanguaje] = useState(options[0])
    const [text, setText] = useState('');
    return ( 
        <div>
            <div className="ui form">    
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                </div>
            </div>
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