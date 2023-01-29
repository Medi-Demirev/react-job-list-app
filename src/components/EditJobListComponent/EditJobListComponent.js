import { useContext, useState } from "react";
import { JobListContext } from "../../context/JobListContext";
import TableComponent from "../TableComponent/TableComponent";

import "./EditJobListComponent.css";

const EditJobListComponent = ({ currentData }) => {

  const [isOpen, setIsOpen] = useState(true);
  const { editJob } = useContext(JobListContext);
  const [inputs, setInputs] = useState({ priority: "" });

  const id = currentData.map((x) => x.id).pop();
  const job = currentData.map((x) => x.job).pop();
  const currentPriority = currentData.map((x) => x.priority).pop();
  let priority = inputs.priority;

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  
  const closeHandler = () => {
    setIsOpen(false);
    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    switch (inputs.priority) {
        case '':
            priority = currentPriority;
            let currentUpdatedJob = { id, job, priority };
            editJob(id, currentUpdatedJob);
            setIsOpen(false);
            window.location.reload();
            break;
    
        default:
            priority = priority;
            let updatedJob = { id, job, priority };
            editJob(id, updatedJob);
            setIsOpen(false);
            window.location.reload();
            break;
    }
}

  return isOpen ? (
    <div className="priority_edit">
      {currentData.map((currentJob) => (
        <form onSubmit={onSubmit} key={currentJob.id}>
          <div className="close_btn_container">
            <button className="close_btn" type="button" onClick={closeHandler}>
              x
            </button>
          </div>

          <div className="border">
            <h4 className="priority_title">{currentJob.job}</h4>
            <select
              name="priority"
              className="priority_select"
              onChange={changeHandler}
              defaultValue={currentJob.priority}
            >
              <option value={"Urgent"}>Urgent</option>
              <option value={"Regular"}>Regular</option>
              <option value={"Trivial"}>Trivial</option>
            </select>
            <div className="edit_btn_container">
              <button className="update_btn" type="submit" onClick={onSubmit} title="Update item">
                Update
              </button>
            </div>
          </div>
        </form>
      ))}
    </div>
  ) : null
};

export default EditJobListComponent;
