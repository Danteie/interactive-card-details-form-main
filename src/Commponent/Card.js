import './Card.css'
import logo from'../Assets/card-logo.svg'

export default function Card() {
  return (
    <div className="front-card">
        <img src={logo} className='logo'/>
        <h1>0000 0000 0000 0000</h1>
        <div className='date'>
            <h1>name surname</h1>
            <h1>09/00</h1>
        </div>

    </div>
  );
}

