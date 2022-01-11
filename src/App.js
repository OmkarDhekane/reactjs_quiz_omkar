import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
    </Router>


  );
}

export default App;
