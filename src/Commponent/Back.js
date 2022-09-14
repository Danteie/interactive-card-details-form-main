import './Back.css'

export default function Card({cvc}) {
  return (
    <div className="back-card">
        <h1 className='cvc'>{cvc ? cvc : "000"}</h1>
    </div>
    )
}