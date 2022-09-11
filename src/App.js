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
          <input type="text" placeholder='e.g Jane Appleseed'/>
          <h1>CARD NUMBER</h1>
          <input type="text" placeholder='e.g 1234 5678 9123 0000'/>
          <div className='date-field'>
            <div className='dateone'>
              <h1>EXP. DATE(MM/YY)</h1>
              <div className='inputmmyy'>
                <input type="text" className='small' placeholder='MM'/>
                <input type="text" className='small' placeholder='YY'/>
              </div>
            </div>
            <div className='datetwo'>
            <h1>cvc</h1>
            <input type="text" placeholder='e.g. 123'/>
            </div>
          </div>
          <button>Condirm</button>
        </form>
      </div>

    </div>
  );
}

export default App;
