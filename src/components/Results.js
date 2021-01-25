import React from 'react';

const Result = ({ items }) => {
    const renderedItems = items.map((item) => {
        return item ? (
            <div className="Result">
                <div className="doContainer">
                    {item}
                </div>
                <div className="doExItems">
            
                </div>
            </div>
        ) : null;
    });

    return <div>{renderedItems}</div>
}

export default Result;