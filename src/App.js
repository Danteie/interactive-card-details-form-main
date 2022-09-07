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
      </div>

    </div>
  );
}

export default App;
