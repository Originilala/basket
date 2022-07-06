import React from 'react';
import './App.css';

function App() {
    const [fruit, setFruit] = React.useState({
        strawberry: 0,
        banana: 0,
        apple: 0,
        kiwi: 0,
        name: '',
        surname: '',
        age: 0,
        zipcode: '',
        delivery: 'every-week',
        timeslot: 'daytime',
        message: '',
        terms: false,

    });

    function handleChange(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFruit({
            ...fruit,
            [e.target.name]: value
        })
    };

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
            ...fruit,
            strawberry: 0,
            banana: 0,
            apple: 0,
            kiwi: 0
        })
    }

    function logForm(e) {
        e.preventDefault();
        console.log(fruit);
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
        <form onSubmit={logForm}>
            <label htmlFor="name-field">Naam
            <input
                type="text"
                name="name"
                id="name-field"
                onChange={handleChange}
            />
            </label>
            <label htmlFor="surname-field">Achternaam
            <input
                type="text"
                name="surname"
                id="surname-field"
                onChange={handleChange}
            />
            </label>
            <label htmlFor="age-field">Leeftijd
            <input
                type="number"
                name="age"
                id="age-field"
                onChange={handleChange}
            />
            </label>
            <label htmlFor="zip-field">Postcode
            <input
                type="text"
                name="zipcode"
                id="zip-field"
                onChange={handleChange}
            />
            </label>
            <label htmlFor="delivery-field">Bezorgfrequentie
            <select name="delivery" id="delivery-field" onChange={handleChange}>
                <option value="every-week">Iedere week</option>
                <option value="other-week">Om de week</option>
                <option value="every-month">Iedere maand</option>
            </select>
            </label>
            <label htmlFor="day-time">
            <input type="radio" name="timeslot" id="day-time" value="day-time" onChange={handleChange}/>
            Overdag</label>
            <label htmlFor="night-time">
            <input type="radio" name="timeslot" id="night-time" value="night-time" onChange={handleChange}/>
            's Avonds</label>
            <label htmlFor="message-field">Opmerking
            <textarea name="message" id="message-field" cols="30" rows="10" onChange={handleChange}></textarea>
            </label>
            <label htmlFor="terms-field">
            <input
                type="checkbox"
                name="terms"
                id="terms-field"
                onChange={handleChange}
            />
                Ik ga akkoord met de voorwaarden
            </label>
            <button
                type="submit"
            >
                Verzend
            </button>

        </form>
    </>
  );
}

export default App;
