import { useContext, useState } from 'react';
import {JobListContext} from '../../context/JobListContext';
import './EditJobListComponent.css';

const EditJobListComponent = ({currentData}) => {
    const [isOpen, setIsOpen] = useState(true);
    const {data, editJob} = useContext(JobListContext);
    const[inputs, setInputs] = useState({ priority:''});

    const id = currentData.map(x=> x.id).pop();
    const job = currentData.map(x =>x.job).pop();
    const priority = inputs.priority;

    const changeHandler = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };
    const updatedJob = {id, job, priority };
    

    const closeHandler = () => {
        setIsOpen(false)
        window.location.reload();
    };

    const onSubmit = (e)=> {
        e.preventDefault();
        editJob(id, updatedJob)       
    };
  
 
    return isOpen ? (
        <div className="priority_edit">
            <form onSubmit={onSubmit}>
            
            <div className='close_btn_container'>
                <button className='close_btn' type='submit' onClick={closeHandler}>x</button>
            </div>
                {currentData.map((currentJob)=>
            <div className='border' key={currentJob.id}>
                <h4 className="priority_title">{currentJob.job}</h4>
                <select name="priority" className='priority_select'
                onChange={changeHandler}
                defaultValue={currentJob.priority}>
                
                    <option value={'Urgent'} >Urgent</option>
                    <option value={"Regular"}>Regular</option>
                    <option value={'Trivial'}>Trivial</option>
                </select>
                <div className='edit_btn_container' key={currentJob.id}>
                    <button className='update_btn' type='submit' title='Update item'>Update</button>
                </div>
            </div>
            )}
      
        </form>
        </div>
    ) : null
};

export default EditJobListComponent;