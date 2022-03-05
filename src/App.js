import React, { useEffect, useState } from "react";
import "./App.css";

const App = (props) => {
    const [currency, setCurrency] = useState("USD");
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState(0);

    useEffect(() => {
        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((response) => response.json())
            .then((data) => {
                const count = data.Valute[currency].Value;
                setValue((inputValue * count).toFixed(2));
            });
    }, [currency, inputValue]);

    return (
        <div className="app">
            <div className="wrapper-valute">
                <span>{currency}</span>
                <span>RUB</span>
            </div>
            <div className="wrapper-field">
                <input
                    value={inputValue}
                    className="input"
                    type="number"
                    placeholder=""
                    autofocus
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="counter">{value}</div>
            </div>

            <div className="controls">
                <button onClick={() => setCurrency("USD")}>USD</button>
                <button onClick={() => setCurrency("EUR")}>EUR</button>
                <button onClick={() => setCurrency("CNY")}>CNY</button>
            </div>
        </div>
    );
};

export default App;
