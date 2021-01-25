import React, { useState } from 'react';
import DropDown from "./DropDown";
import Convert from './Convert';

const options = [
    {
        lable: 'Persian',
        value: 'fa'
    },
    {
        lable: 'Africans',
        value: 'af'
    },
    {
        lable: 'Hindi',
        value: 'hi'
    },
    {
        lable: 'Armenian',
        value: 'hy'
    }
]

const Translate = () => {
    const [lang, setLang] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <DropDown options={options} selected={lang} onSelectedChange={setLang} title="Select a language" />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} lang={lang} />
        </div>
    )
}

export default Translate;