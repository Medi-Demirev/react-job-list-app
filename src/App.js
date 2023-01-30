import JobListContextProvider from './context/JobListContext';
import Home from './components/Home/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="container">
      <JobListContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </JobListContextProvider>
    </div>
  );
}

export default App;
