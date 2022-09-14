import './Card.css'
import logo from'../Assets/card-logo.svg'

export default function Card({name,number,month,year}) {

  let carNumber = number;

 

  return (
    <div className="front-card">
        <img src={logo} className='logo' alt='logo'/>
        <div className='data-content'>
          <h1>{number ? number : '0000 0000 00000 0000'}</h1>
          <div className='date'>
              <h1>{name ? name : 'name surname'}</h1>
              <h1>{month ? month: '09'}/{year ? year: '00'}</h1>
          </div>
        </div>

    </div>
  );
}

