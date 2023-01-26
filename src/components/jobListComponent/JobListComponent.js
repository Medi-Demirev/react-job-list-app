import { useState, useContext } from "react";

import { JobListContext } from "../../context/JobListContext";
import EditJobListComponent from "../EditJobListComponent/EditJobListComponent";

import "./JobListComponent.css";

const JobListComponent = () => {
  const { addJob, deleteJob, data } = useContext(JobListContext);

  const [inputs, setInputs] = useState({ job: "", priority: "" });
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [currentData, setCurrentData] = useState(data);

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const editHandler = (id) => {
    const newEditItem = data.find((elem) => {
      return elem.id === id;
    });

    setCurrentData(newEditItem);
    setEditIsOpen(true);
  };

  const handleSubmit = () => {
    setDisabled(true);
  };
  const { job, priority } = inputs;

  const onSubmit = (e) => {
    e.preventDefault();
    addJob(job, priority);

    inputs.job = "";
    inputs.priority = "";
  };

  const colors = {
    urgentColor: "#fc4500",
    regularColor: "#ffff00",
    trivialColor: "#00bdfd",
  };

  return !editIsOpen ? (
    <div className="job_container">
      <form method="get" className="job_form" onSubmit={onSubmit}>
        <div className="job_field">
          <label className="job_label">Job:</label>
          <input
            className="job"
            placeholder="Job"
            name="job"
            id="job"
            value={inputs.job}
            onChange={changeHandler}
            maxLength={10}
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

        <button className="create_btn" type="submit">
          Create
        </button>
        <div className="bottom">
          <h4 className="title">JOB LIST</h4>
          <input className="search_job" placeholder="Search Job"></input>
        </div>
        <div className="divider">
          <hr className="line"></hr>
        </div>

        <div className="table_container">
          {data?.map((currentJob) => (
            <table className="table" key={currentJob.id}>
              <tbody>
                <tr
                  className="table_row"
                  key={currentJob.priority}
                  style={{
                    backgroundColor:
                      currentJob.priority === "Urgent"
                        ? colors.urgentColor
                        : currentJob.priority === "Regular"
                        ? colors.regularColor
                        : colors.trivialColor,
                  }}
                >
                  <td className="job_title">{currentJob.job}</td>
                  <td className="type_priority">{currentJob.priority}</td>
                  <td>
                    <div className="table_buttons" key={currentJob.id}>
                      <button
                        className="table_button_edit"
                        type="submit"
                        onClick={() => {
                          editHandler(currentJob.id);
                          handleSubmit();
                        }}
                        disabled={isDisabled}
                        title="Edit item"
                      >
                        Edit
                      </button>
                      <button
                        className="table_button_delete"
                        onClick={() => deleteJob(currentJob.id)}
                        title="Delete item"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </form>
    </div>
  ) : (
    <>
      <div className="job_container">
        <form method="get" className="job_form" onSubmit={onSubmit}>
          <div className="job_field">
            <label className="job_label">Job:</label>
            <input
              className="job"
              placeholder="Job"
              name="job"
              id="job"
              value={inputs.job}
              onChange={changeHandler}
              maxLength={10}
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

          <button className="create_btn" type="submit">
            Create
          </button>
          <div className="bottom">
            <h4 className="title">JOB LIST</h4>
            <input className="search_job" placeholder="Search Job"></input>
          </div>
          <div className="divider">
            <hr className="line"></hr>
          </div>
          <div className="table_container">
            {data?.map((currentJob) => (
              <table className="table" key={currentJob.id}>
                <tbody>
                  <tr
                    className="table_row"
                    key={currentJob.priority}
                    style={{
                      backgroundColor:
                        currentJob.priority === "Urgent"
                          ? colors.urgentColor
                          : currentJob.priority === "Regular"
                          ? colors.regularColor
                          : colors.trivialColor,
                    }}
                  >
                    <td className="job_title">{currentJob.job}</td>
                    <td className="type_priority">{currentJob.priority}</td>
                    <td>
                      <div className="table_buttons">
                        <button
                          className="table_button_edit"
                          type="submit"
                          onClick={() => {
                            editHandler(currentJob.id);
                            handleSubmit();
                          }}
                          disabled={isDisabled}
                          title="Edit item"
                        >
                          Edit
                        </button>
                        <button
                          className="table_button_delete"
                          onClick={() => {
                            deleteJob(currentJob.id);
                            handleSubmit();
                          }}
                          disabled={isDisabled}
                          title="Delete item"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </form>
      </div>
      {<EditJobListComponent currentData={currentData} />}
    </>
  );
};

export default JobListComponent;
