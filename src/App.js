
import logo from './logo.svg';
import './App.css';
import JobListComponent from './components/jobListComponent/JobListComponent';
import EditJobListComponent from './components/EditJobListComponent/EditJobListComponent';


function App() {
  return (
    <div className="App">
      <EditJobListComponent/>
      <JobListComponent/>
      
    </div>
  );
}

export default App;
