import './App.css';
import Card from './Commponent/Card'
import back from './Assets/bg-card-back.png'
import { useState } from 'react';



function App() {

  const [name, setName] = useState();
  const [number, setNumber] = useState(0);
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCvc] = useState();


  function cardholder(event){
      setName(name => name = event.target.value)
      console.log(name);
  }

  function cardNumber(event){
    setNumber(number => number = event.target.value)
    console.log(number);
  }

  function cardMonth(event){
    setMonth(month => month = event.target.value)
    console.log(month);
  }

  function cardYear(event){
    setYear(year => year = event.target.value)
    console.log(year);
  }

  function cardCvc(event){
    setCvc(cvc => cvc = event.target.value)
    console.log(cvc);
  }




  return (
    <div className="App">
      {/* left part of the content */}
      <div className='cards'>
          <div className='card'>
            <Card name={name} number={number} month={month} year={year} cvc={cvc}/>
            <img  src={back} alt='slika2' className='back-card'/>
          </div>
      </div>
      {/* rigth part of the content */}
      <div className='login'>
        <form>
          <h1>CARDHOLDER NAME</h1>
          <input type="text" placeholder='e.g Jane Appleseed' onChange={cardholder}/>
          <h1>CARD NUMBER</h1>
          <input type="text" placeholder='e.g 1234 5678 9123 0000' onChange={cardNumber}/>
          <div className='date-field'>
            <div className='dateone'>
              <h1>EXP. DATE(MM/YY)</h1>
              <div className='inputmmyy'>
                <input type="text" className='small' placeholder='MM' onChange={cardMonth}/>
                <input type="text" className='small' placeholder='YY' onChange={cardYear}/>
              </div>
            </div>
            <div className='datetwo'>
            <h1>cvc</h1>
            <input type="text" placeholder='e.g. 123' onChange={cardCvc}/>
            </div>
          </div>
          <button>Condirm</button>
        </form>
      </div>

    </div>
  );
}

export default App;
