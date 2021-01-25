import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Rout from './components/Rout';
import Header from './components/Header';

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use React?",
    content: "React is a favorit JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "We use React by creating components",
  },
  {
    title: "How many months take to learn React?",
  },
];

const options = [
  {
    lable: 'The Color Red',
    value: 'red'
  },
  {
    lable: 'The Color Green',
    value: 'green'
  },
  {
    lable: 'The Color Blue',
    value: 'blue'
  },
  {
    lable: 'The Color Yellow',
    value: 'yellow'
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Rout path="/">
        <Accordion items={items} />
      </Rout>
      <Rout path="/list">
        <Search />
      </Rout>
      <Rout path="/dropdown">
        <DropDown lable="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Rout>
      <Rout path="/translate">
        <Translate />
      </Rout>
   </div>
  )
};
export default App;