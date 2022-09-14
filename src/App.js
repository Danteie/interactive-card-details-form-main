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
  }

  function isNumber(number,id){
      if(!isNaN(number)){
        document.getElementById(id).style.border = '1px solid rgba(0, 0, 0, 0.2)'
        document.getElementById(id).style.color = 'black'
      }else{
        document.getElementById(id).style.border = '2px solid red'
        document.getElementById(id).style.color = 'red'
      } 
  }

  function cardNumber(event){
      setNumber(number => number = event.target.value) 
      console.log(number);
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
  isNumber(number,"number")
  if(month <= 12){
    isNumber(month,"month")
  }else{
    alert('please eneter valid month!')
    isNumber('a', 'month')
  }
  
  isNumber(year,"year")
  isNumber(cvc,"cvc")
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
          <input type="text" placeholder='e.g 1234 5678 9123 0000' onChange={cardNumber} id='number' maxLength="16"/>
          <div className='date-field'>
            <div className='dateone'>
              <h1>EXP. DATE(MM/YY)</h1>
              <div className='inputmmyy'>
                <input type="text" className='small' placeholder='MM' onChange={cardMonth} id='month' maxLength="2"/>
                <input type="text" className='small' placeholder='YY' onChange={cardYear} id='year' maxLength="2"/>
              </div>
            </div>
            <div className='datetwo'>
            <h1>CVC</h1>
            <input type="text" placeholder='e.g. 123' onChange={cardCvc} id='cvc' maxLength="3"/>
            </div>
          </div>
          <button>Condirm</button>
        </form>
      </div>

    </div>
  );
}

export default App;
