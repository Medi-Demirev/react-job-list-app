import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

 export const JobListContext = createContext();

const JobListContextProvider = (props) =>{
    const localStorageData = JSON.parse(localStorage.getItem("job_list")) || [];
    const [data, setData] = useState(localStorageData);
    const id = uuidv4();
    
    useEffect(() => {
        localStorage.setItem('job_list', JSON.stringify(data));
    },[data]);

    const  addJob = (job, priority) => {
        setData([...data , {id:id, job, priority}])
    };

    const deleteJob = (id) => {
        setData(data.filter(job => job.id !== id))
    };

    const editJob = (id, updatedJob) => {
        setData(data.map((job) => job.id === id ? updatedJob : job))
    };

    const order = { Urgent: 1, Regular: 2, Trivial: 3 };
    const sortedJobs = data.sort((a,b)=> order[a.priority] - order[b.priority]);

    const getFilteredData = (searchData, data) => {
       if (!searchData) {
        return data
       }
       return data.filter((job)=>job.job.toLowerCase().includes(searchData))
    };

    return(
        <JobListContext.Provider  value={{
            addJob, 
            deleteJob,
            editJob,
            sortedJobs,
            getFilteredData,
            data}}>
            {props.children}
        </JobListContext.Provider>
    )
};

export default JobListContextProvider;
