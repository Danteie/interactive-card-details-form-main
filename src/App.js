import './App.css';
import Card from './Commponent/Card'
import Back from './Commponent/Back'
import {useState,useEffect} from 'react';



function App() {

  const [correct, setCorrect] = useState(() => true);
  const [name, setName] = useState();
  const [number, setNumber] = useState(() => 0);
  const [month, setMonth] = useState(() => 0);
  const [year, setYear] = useState(() => 0);
  const [cvc, setCvc] = useState(() => 0);


  function page(){
      if(correct){
        return(
          <form>
          <h1>CARDHOLDER NAME</h1>
          <input type="text" placeholder='e.g Jane Appleseed' onChange={cardholder} required/>
          <h1>CARD NUMBER</h1>
          <input type="text" placeholder='e.g 1234 5678 9123 0000' onChange={cardNumber} id='number' maxLength="16"/>
          <h2>Wrotn format, numbers only</h2>
          <div className='date-field'>
            <div className='dateone'>
              <h1>EXP. DATE(MM/YY)</h1>
              <div className='inputmmyy'>
                <input type="text" className='small' placeholder='MM' onChange={cardMonth} id='month' maxLength="2" required/>
                <input type="text" className='small' placeholder='YY' onChange={cardYear} id='year' maxLength="2" required/>
              </div>
            </div>
            <div className='datetwo'>
            <h1>CVC</h1>
            <input type="text" placeholder='e.g. 123' onChange={cardCvc} id='cvc' maxLength="3" required/>
            </div>
          </div>
          <button type="submit" onClick={() => setCorrect(false)}>Confirm</button>
        </form>
        )
      }else{
        return <h1>Bravo</h1>
      }
  }

  function cardholder(event){
      setName(name => name = event.target.value)
  }

  function isNumber(number,id){
    if(document.getElementById(id) != null){
      if(!isNaN(number)){
        document.getElementById(id).style.border = '1px solid rgba(0, 0, 0, 0.2)'
        document.getElementById(id).style.color = 'black'
        return true
      }else{
        document.getElementById(id).style.border = '2px solid red'
        document.getElementById(id).style.color = 'red'
        return false
      } 
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
  
  if(!isNumber(number,"number")){
    document.getElementsByTagName('button')[0].disabled = true;
  }

  if(!isNumber(month,"month")){
    document.getElementsByTagName('button')[0].disabled = true;
  }

  if(!isNumber(year,"year")){
    document.getElementsByTagName('button')[0].disabled = true;
  }

  if(!  isNumber(cvc,"cvc")){
    document.getElementsByTagName('button')[0].disabled = true;
  }
  

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
        {page()}
      </div>
    </div>
  );
}

export default App;
