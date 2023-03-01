import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/HomePage';
import TasksByLevel from './scenes/TasksByLevel';
import './App.css';
import OneTaskText from './scenes/OneTaskText';
import OneTaskVideo from './scenes/OneTaskVideo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/tasks" element={<TasksByLevel />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/task1" element={<OneTaskText />} />
            <Route exact path="/task2" element={<OneTaskText />} />
            <Route exact path="/task3" element={<OneTaskText />} />
            <Route exact path="/task4" element={<OneTaskVideo />} />

          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
