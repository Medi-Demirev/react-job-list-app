import { useContext, useState, Fragment } from "react";

import { JobListContext } from "../../context/JobListContext";
import {URGENT_COLOR,REGULAR_COLOR,TRIVIAL_COLOR,} from "../../constants/Colors/PriorityConstants";
import EditJobListComponent from "../EditJobListComponent/EditJobListComponent";

import "./TableComponent.css";


const TableComponent = () => {
  const { data, deleteJob, getFilteredData } = useContext(JobListContext);

  const [currentData, setCurrentData] = useState(data);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput == "") {
      setIsFound(true);
    }
  };
  const filteredData = getFilteredData(searchInput, data);

  return !isFound ? (
    !editIsOpen ? (
      <Fragment>
        <div className="divider_wrap">
          <div className="bottom">
            <h4 className="title">JOB LIST</h4>
            <input
              className="search_job"
              placeholder="Search Job"
              type="search"
              onChange={handleSearchChange}
            ></input>
          </div>
          <div className="divider">
            <hr className="line"></hr>
          </div>
        </div>
        <div className="table_container">
          {data?.map((currentJob) => (
            <table className="table" key={currentJob.id}>
              <tbody>
                <tr
                  className="table_row"
                  style={{
                    backgroundColor:
                      currentJob.priority === "Urgent"
                        ? URGENT_COLOR
                        : currentJob.priority === "Regular"
                        ? REGULAR_COLOR
                        : TRIVIAL_COLOR,
                  }}
                >
                  <td className="job_title">{currentJob.job}</td>
                  <td className="type_priority">{currentJob.priority}</td>
                  <td>
                    <div className="table_buttons">
                      <button
                        className="table_button_edit"
                        type="button"
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
                        }}
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
      </Fragment>
    ) : (
      <Fragment>
        <div className="divider_wrap">
          <div className="bottom">
            <h4 className="title">JOB LIST</h4>
            <input
              className="search_job"
              placeholder="Search Job"
              type="search"
              onChange={handleSearchChange}
            ></input>
          </div>
          <div className="divider">
            <hr className="line"></hr>
          </div>
        </div>
        <div className="table_container">
          {data?.map((currentJob) => (
            <table className="table" key={currentJob.id}>
              <tbody>
                <tr
                  className="table_row"
                  style={{
                    backgroundColor:
                      currentJob.priority === "Urgent"
                        ? URGENT_COLOR
                        : currentJob.priority === "Regular"
                        ? REGULAR_COLOR
                        : TRIVIAL_COLOR,
                  }}
                >
                  <td className="job_title">{currentJob.job}</td>
                  <td className="type_priority">{currentJob.priority}</td>
                  <td>
                    <div className="table_buttons">
                      <button
                        className="table_button_edit"
                        type="button"
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

        <EditJobListComponent currentData={[currentData]} />
      </Fragment>
    )
  ) : editIsOpen ? (
    <>
      <div className="divider_wrap">
        <div className="bottom">
          <h4 className="title">JOB LIST</h4>
          <input
            className="search_job"
            placeholder="Search Job"
            type="search"
            onChange={handleSearchChange}
          ></input>
        </div>
        <div className="divider">
          <hr className="line"></hr>
        </div>
      </div>
      <div className="table_container">
        {filteredData?.map((currentJob) => (
          <table className="table" key={currentJob.id}>
            <tbody>
              <tr
                className="table_row"
                style={{
                  backgroundColor:
                    currentJob.priority === "Urgent"
                      ? URGENT_COLOR
                      : currentJob.priority === "Regular"
                      ? REGULAR_COLOR
                      : TRIVIAL_COLOR,
                }}
              >
                <td className="job_title">{currentJob.job}</td>
                <td className="type_priority">{currentJob.priority}</td>
                <td>
                  <div className="table_buttons">
                    <button
                      className="table_button_edit"
                      type="button"
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
                      }}
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
      <EditJobListComponent currentData={[currentData]} />
    </>
  ) : (
    <>
      <div className="divider_wrap">
        <div className="bottom">
          <h4 className="title">JOB LIST</h4>
          <input
            className="search_job"
            placeholder="Search Job"
            type="search"
            onChange={handleSearchChange}
          ></input>
        </div>
        <div className="divider">
          <hr className="line"></hr>
        </div>
      </div>
      <div className="table_container">
        {filteredData?.map((currentJob) => (
          <table className="table" key={currentJob.id}>
            <tbody>
              <tr
                className="table_row"
                style={{
                  backgroundColor:
                    currentJob.priority === "Urgent"
                      ? URGENT_COLOR
                      : currentJob.priority === "Regular"
                      ? REGULAR_COLOR
                      : TRIVIAL_COLOR,
                }}
              >
                <td className="job_title">{currentJob.job}</td>
                <td className="type_priority">{currentJob.priority}</td>
                <td>
                  <div className="table_buttons">
                    <button
                      className="table_button_edit"
                      type="button"
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
                      }}
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
    </>
  );
};

export default TableComponent;
