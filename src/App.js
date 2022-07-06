import React from 'react';
import './App.css';
import Button from "./components/Button.js";
import Tile from "./components/Tile.js";
import Field from "./components/Field.js";

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
                <Tile
                    nameN="strawberry"
                    functionP={minusOne}
                >
                    -
                </Tile>
                <input
                    type="number"
                    name="strawberry"
                    value={fruit.strawberry}
                />
                <Tile
                    nameN="strawberry"
                    functionP={plusOne}
                >
                    +
                </Tile>
            </div>
            <div>
                <h2>🍌</h2>
                <Tile
                    nameN="banana"
                    functionP={minusOne}
                >
                    -
                </Tile>
                <input
                    type="number"
                    name="banana"
                    value={fruit.banana}
                />
                <Tile
                    nameN="banana"
                    functionP={plusOne}
                >
                    +
                </Tile>
            </div>
            <div>
                <h2>🍏</h2>
                <Tile
                    nameN="apple"
                    functionP={minusOne}
                >
                    -
                </Tile>
                <input
                    type="number"
                    name="apple"
                    value={fruit.apple}
                />
                <Tile
                    nameN="apple"
                    functionP={plusOne}
                >
                    +
                </Tile>
            </div>
            <div>
                <h2>🥝</h2>
                <Tile
                    nameN="kiwi"
                    functionP={minusOne}
                >
                    -
                </Tile>
                <input
                    type="number"
                    name="kiwi"
                    value={fruit.kiwi}
                />
                <Tile
                    nameN="kiwi"
                    functionP={plusOne}
                >
                    +
                </Tile>
            </div>
            <Button
                id="reset-btn"
                type="button"
                functiontype={resetFruit}
            >
                Reset
            </Button>
        </section>
        <form onSubmit={logForm}>
            <Field
                idField="name-field"
                names="name"
                handleChanges={handleChange}
            >
                Naam
            </Field>
            <Field
                idField="surname-field"
                names="surname"
                handleChanges={handleChange}
            >
                Achternaam
            </Field>
            <label htmlFor="age-field">Leeftijd
            <input
                type="number"
                name="age"
                id="age-field"
                onChange={handleChange}
            />
            </label>
            <Field
                idField="zip-field"
                names="zipcode"
                handleChanges={handleChange}
            >
                Postcode
            </Field>
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
            <Button
                id="send-btn"
                type="submit"
            >
                Verzend
            </Button>

        </form>
    </>
  );
}

export default App;
