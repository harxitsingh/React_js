import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import CurrentTime from './Components/CurrentTime'

import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="clock-card">
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
      </div>
    </div>
  );
}

export default App;
