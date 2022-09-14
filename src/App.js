import './App.css';
import Card from './Commponent/Card'
import Back from './Commponent/Back'
import {useState,useEffect} from 'react';



function App() {

  const [name, setName] = useState();
  const [number, setNumber] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvc, setCvc] = useState(0);

  

  function cardholder(event){
      setName(name => name = event.target.value)
      console.log(name);
  }

  function isNumber(error){
      if(!isNaN(error)){
        document.activeElement.style.border = '1px solid rgba(0, 0, 0, 0.2)'
        document.activeElement.style.color = 'black'
      }else{
        document.activeElement.style.border = '2px solid red'
        document.activeElement.style.color = 'red'
      } 
  }

  function cardNumber(event){
      setNumber(number => number = event.target.value)  
  }

  function cardMonth(event){
    setMonth(month => month = event.target.value)
  }

  function cardYear(event){
    setYear(year => year = event.target.value)
  }

  function cardCvc(event){
    setCvc(cvc => cvc = event.target.value)
  }

useEffect(()=>{ 
  isNumber(number)
  isNumber(month)
  isNumber(year)
  isNumber(cvc)
},[number,month,year,cvc])

  return (
    <div className="App">
      {/* left part of the content */}
      <div className='cards'>
          <div className='card'>
            <Card name={name} number={number} month={month} year={year} cvc={cvc}/>
            <Back cvc={cvc}/>
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
