import './Input.css';
import React, { useRef, useState } from 'react';

const Input = ({ onSubmitResult }) => {
    const [text, setText] = useState('');
    const inputRef = useRef();
    const iconRef = useRef();

    const onFormSubmit = e => {
        e.preventDefault();
        if (text) {
            onSubmitResult(text);
            setText('');
            setIcon('0', 'white');
        } else {
            inputRef.current.placeholder = 'Oh, fill the form first';
            inputRef.current.style.color = 'darkred';
            inputRef.current.style.fontSize = '19px';
        }
    };

    const setIcon = (RotDeg, Color) => {
        iconRef.current.style.transform = `rotate(${RotDeg}deg)`;
        iconRef.current.style.color = Color;
    };

    const onInputChanged = e => {
        setText(e.target.value);
        inputRef.current.style.color = 'whitesmoke';
        inputRef.current.style.fontSize = '14px';
        e.target.value ? setIcon('0', 'lightgreen') : setIcon('90', 'red');
    };

    return (
        <div className="doContainer">
            <label htmlFor="doInput">Type your do there</label>
            <form onSubmit={e => onFormSubmit(e)} className="inner">
                <input ref={inputRef} name="doInput" value={text} onChange={e => onInputChanged(e)} placeholder="Please type there" />
                <button type="submit"><i ref={iconRef} className="angle down icon"></i></button>
            </form>
        </div>
    )
}

export default Input;