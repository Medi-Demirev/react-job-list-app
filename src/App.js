
import logo from './logo.svg';
import './App.css';
import JobListComponent from './components/jobListComponent/JobListComponent';

import JobListContextProvider from './context/JobListContext';
import EditJobListComponent from './components/EditJobListComponent/EditJobListComponent';

function App() {
  
  return (
    <div className="container">
      <JobListContextProvider>
      <JobListComponent/>
      </JobListContextProvider>
    </div>
  );
}

export default App;
