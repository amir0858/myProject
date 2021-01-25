import './Convert.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ text, lang }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.get('https://translation.googleapis.com/language/translate/v2', {
                params: {
                    q: debouncedText,
                    target: lang.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();
    }, [lang, debouncedText]);

    return (
        <div style={{ margin:'auto', maxWidth: '500px' }}>
            <h1 className={`ui header ${translated ? 'trOutPut' : ''}`}>{translated}</h1>
        </div>
    );
}

export default Convert;