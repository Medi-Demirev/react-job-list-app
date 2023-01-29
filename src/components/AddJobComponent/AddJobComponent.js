import { useState,useContext } from 'react';

import { JobListContext } from "../../context/JobListContext";
import SearchComponent from '../SearchComponent/SearchComponent';

import TableComponent from '../TableComponent/TableComponent';

import './AddJobComponent.css'
const AddJobComponent = () =>{
    const { addJob } = useContext(JobListContext);

    const [inputs, setInputs] = useState({ job: "", priority: "" });

    const changeHandler = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
      const { job, priority } = inputs;

      const onSubmit = (e) => {
        e.preventDefault();
        addJob(job, priority);
    
        inputs.job = "";
        inputs.priority = "";
      };
    
    return (<>
        <div className="job_container">
      <form method="get" className="job_form" onSubmit={onSubmit} >
        <div className="job_field">
          <label className="job_label">Job:</label>
          <input
            className="job"
            placeholder="Job"
            name="job"
            id="job"
            value={inputs.job}
            onChange={changeHandler}
            maxLength={70}
            required
          ></input>
        </div>
        <div className="priority_field">
          <label className="priority_label">Priority:</label>
          <select
            name="priority"
            className="priority"
            placeholder="Urgent"
            value={inputs.priority}
            onChange={changeHandler}
            required
          >
            <option value="">Please select priority</option>
            <option value={"Urgent"}>Urgent</option>
            <option value={"Regular"}>Regular</option>
            <option value={"Trivial"}>Trivial</option>
          </select>
        </div>

        <button className="create_btn" type="submit" >
          Create
        </button>
        </form>
      
       <TableComponent/>
        </div>
        </>
    )
}

export default AddJobComponent;