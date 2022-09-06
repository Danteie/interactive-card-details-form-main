import './App.css';
import front from './Assets/bg-card-front.png';
import back from './Assets/bg-card-back.png'

function App() {
  return (
    <div className="App">
      {/* left part of the content */}
      <div className='cards'>
          <div>
            <img  src={front}/>
            <img  src={back}/>
          </div>
      </div>
      {/* rigth part of the content */}
      <div className='login'>

      </div>

    </div>
  );
}

export default App;
