import './App.css';
import Card from './Commponent/Card'
import back from './Assets/bg-card-back.png'


function App() {
  return (
    <div className="App">
      {/* left part of the content */}
      <div className='cards'>
          <div className='card'>
            <Card />
            <img  src={back} alt='slika2' className='back-card'/>
          </div>
      </div>
      {/* rigth part of the content */}
      <div className='login'>
        <form>
          <h1>CARDHOLDER NAME</h1>
          <input type="text"/>
          <h1>CARD NUMBER</h1>
          <input type="text"/>
          <div className='date-field'>
            <div>
              <h1>EXP. DATE(MM/YY)</h1>
              <div>
              <input type="text" className='small'/>
              <input type="text" className='small'/>
              </div>
            </div>
            <div>
            <h1>cvc</h1>
            <input type="text"/>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
