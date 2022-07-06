import React from 'react';
import './App.css';

function App() {
    const [fruit, setFruit] = React.useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0
    });


    function minusOne(e) {
        e.preventDefault();
        const newValue = parseInt(e.target.nextSibling.value) - 1;
        const setValue = newValue > -1 ? newValue : 0;
        setFruit({
            ...fruit,
            [e.target.className]: setValue
        })
    }

    function plusOne(e) {
        e.preventDefault();
        const newValue = parseInt(e.target.previousSibling.value) + 1;
        const setValue = newValue > -1 ? newValue : 0;
        setFruit({
            ...fruit,
            [e.target.className]: setValue
        })
    }

    function resetFruit(e) {
        e.preventDefault();
        setFruit({
            strawberry: 0,
            banana: 0,
            apple: 0,
            kiwi: 0
        })
    }
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <section>
            <div>
                <h2>🍓</h2>
                <button
                    type="button"
                    className="strawberry"
                    onClick={minusOne}
                >
                    -
                </button>
                <input
                    type="number"
                    name="strawberry"
                    value={fruit.strawberry}
                />
                <button
                    type="button"
                    className="strawberry"
                    onClick={plusOne}
                >
                    +
                </button>
            </div>
            <div>
                <h2>🍌</h2>
                <button
                    type="button"
                    className="banana"
                    onClick={minusOne}
                >
                    -
                </button>
                <input
                    type="number"
                    name="banana"
                    value={fruit.banana}
                />
                <button
                    type="button"
                    className="banana"
                    onClick={plusOne}
                >
                    +
                </button>
            </div>
            <div>
                <h2>🍏</h2>
                <button
                    type="button"
                    className="apple"
                    onClick={minusOne}
                >
                    -
                </button>
                <input
                    type="number"
                    name="apple"
                    value={fruit.apple}
                />
                <button
                    type="button"
                    className="apple"
                    onClick={plusOne}
                >
                    +
                </button>
            </div>
            <div>
                <h2>🥝</h2>
                <button
                    type="button"
                    className="kiwi"
                    onClick={minusOne}
                >
                    -
                </button>
                <input
                    type="number"
                    name="kiwi"
                    value={fruit.kiwi}
                />
                <button
                    type="button"
                    className="kiwi"
                    onClick={plusOne}
                >
                    +
                </button>
            </div>
            <button
                id="reset-btn"
                type="button"
                onClick={resetFruit}
            >
                Reset
            </button>
        </section>
    </>
  );
}

export default App;
