import React, { useEffect, useRef, useState } from 'react';

const DropDown = ({ selected, options, onSelectedChange, title, output }) => {
    const [active, setActive] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClicked = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setActive(false);
        }
        document.body.addEventListener('click', onBodyClicked);

        return () => {
            document.body.removeEventListener('click', onBodyClicked);
        }
    }, []);

    const renderedOptions = options.map((option) => {
        if (selected.value === option.value) {
            return null;
        };
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.lable}
            </div>
        )
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="lable">{title}</label>
                <div onClick={() => setActive(!active)} className={`ui selection dropdown ${active ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.lable}</div>
                    <div className={`menu ${active ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
            <div className="text">
                {output}
            </div>
        </div>
    );
}

export default DropDown;