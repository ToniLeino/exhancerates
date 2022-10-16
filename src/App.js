import { useState, } from 'react';
import './App.css';
const URL = 'https://api.exchangerate.host/latest';

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setPunta] = useState(0);
  const [rate, setKurssi] = useState(0);

  async function convert(e) {
    e.preventDefault(e);
    try {
      const osoite = URL;
      const vastaus = await fetch(osoite);


      if (vastaus.ok) {
        const json = await vastaus.json();
        setKurssi(json.rates.GBP);
        setPunta(eur * json.rates.GBP)
      } else {
        alert('Virhe hakiessa valuutta käännöstä.')
      }
    } catch (err) {
      alert(err); 
    }
  }
  return (
    
    <div id="container">
      <form>
        <div>
          <label>Eurot</label>&nbsp;
          <input type="number" step="0.01"
            value={eur} onChange={e => setEur(e.target.value)} />
          <output>{rate}</output>
        </div>
        <div>
          <label>Punnat</label>
          <output>{gbp.toFixed(2)} €</output>
        </div>
        <div>
          <button onClick={convert}>Laske kurssi</button>
        </div>
      </form>
    </div>
  );
}

export default App;
