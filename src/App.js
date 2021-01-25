import './components/App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Results from './components/Results';

const App = () => {
    const [doText, setDoText] = useState('');
    const [doItems, setDoItems] = useState([]);

    useEffect(() => {
        setDoItems(doItems => [...doItems, doText]);
    }, [doText]);

    return (
        <div className="Continer">
            <div className="miniContainer">
                <div className="doInput">
                    <Input onSubmitResult={text => setDoText(text)} />
                </div>
                { doText ?
                    <div className="doResults">
                        <Results items={doItems} />
                    </div> : null
                }
            </div>
        </div>
    );
}

export default App;