import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = index => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    const hasContent = item.content ? 'dropdown icon' : '';
    const renderedContent = item.content ? item.content : 'ANY REPLYED !';

    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClicked(index)} className={`title ${active}`} >
          <i className={`${hasContent}`}></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{renderedContent}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div style={{ margin: 'auto' }} className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
