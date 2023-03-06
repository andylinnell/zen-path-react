import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/HomePage';
import TasksByLevel from './scenes/TasksByLevel';
import './App.css';
import OneTaskText from './scenes/OneTaskText';
import OneTaskVideo from './scenes/OneTaskVideo';
import Admin from './scenes/Admin';
// import { TaskContentDataProvider } from './context/TaskContext';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <TaskContentDataProvider > */}
            <Routes>
              <Route path="/tasks" element={<TasksByLevel />} />
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/task1" element={<OneTaskText />} />
              <Route exact path="/task4" element={<OneTaskVideo />} />
              <Route exact path="/admin" element={<Admin />} />
            </Routes>
          {/* </TaskContentDataProvider> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
