import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  const checkTime = (words) => {
    let time = parseInt(words) * 1;
    let checkMin = Math.round(time / 60);
    let main = checkMin >= 60 ? Math.round(checkMin / 60) + "h " + checkMin % 60 + "min " : checkMin + "min "
    let seconde = time % 60;
    return time >= 60 ? main + seconde + "s" : time
  };

  const onBtnHover = (e, text) => {
    e.target.text = text
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 600);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: debouncedTerm
      }
    });
    setResults(data.query.search);
  };
  search();
  }, [debouncedTerm]);

  const renderedResult = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
          <div className="right floated content">
          <a
            onMouseOver={e => onBtnHover(e, checkTime(result.wordcount))}
            onMouseLeave={e => e.target.text = 'GO!'}
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>GO!</a>
          </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
         </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
      <div className="ui celled list">
          {renderedResult}
      </div>
    </div>
  );
};

export default Search;
