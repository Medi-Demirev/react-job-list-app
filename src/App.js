import JobListContextProvider from './context/JobListContext';
import Home from './components/Home/Home';
import './App.css';

function App() {
  
  return (
    <div className="container">
      <JobListContextProvider>
        <Home/>
      </JobListContextProvider>
    </div>
  );
}

export default App;
