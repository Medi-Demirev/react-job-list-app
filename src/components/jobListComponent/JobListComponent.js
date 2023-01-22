import { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './JobListComponent.css';


const JobListComponent = () => {
    const localStorageData = JSON.parse(localStorage.getItem("job_list")) || [];
    const [inputs,setInputs] = useState({job:'', priority:''});
    const [data, setData] = useState(localStorageData);

    const id = uuidv4();

    const changeHandler = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        })
      };

  
  

      const onSubmit = (e) => {
        e.preventDefault();
        const inputData = {
            jobName : inputs.job,
            typePriority : inputs.priority
        }
        setData([...data, {name:inputData.jobName, priority:inputData.typePriority, id:id}])
      
      inputs.job= '';
      inputs.priority ='';
    }

    useEffect(()=>{
    
        localStorage.setItem("job_list", JSON.stringify(data))
       },[data]);
console.log(data);
console.log(inputs);

const handleDeleteClick = (id) => {
    const filtered = data.filter((x) => {
      return x.id !== id;
    });

    setData(filtered);

  };

  useEffect(() => {
    localStorage.setItem("job_list", JSON.stringify(data));
  }, [data]);
  
  const colors = {
    urgentColor: '#fc4500',
    regularColor:'#ffff00',
    trivialColor: '#00bdfd',
}
    return(
        <div className="job_container">

      
        <form method="get" className='job_form' onSubmit={onSubmit}>
            <div className="job_field">
                <label className="job_label">Job:</label>
                <input className="job"
                 placeholder="Job"
                 name='job'
                 id='job'
                 value={inputs.job || ""}
                 onChange={changeHandler}
                 maxLength={10}
                 required>
                 </input>
            </div>
            <div className="priority_field">
             <label className="priority_label"  >Priority:</label>
                <select name="priority"
                 className='priority'
                 placeholder ='Urgent'
                 value={inputs.priority || ""}
                 onChange={changeHandler}
                 required >
                    <option value="" >Please select priority</option>
                    <option value={'Urgent'} >Urgent</option>
                    <option value={'Regular'}>Regular</option>
                    <option value={'Trivial'}>Trivial</option>
                </select>
            </div>
            <button className="create_btn"  type='submit'>Create</button>
  
        <div className='bottom'>
            <h4 className='title'>JOB LIST</h4>
            
            <input className='search_job' placeholder='Search Job'></input>
        </div>
            <div><hr className='line'></hr></div>
            <div className='table_container'>
                {data.map((currentJob)=>
                  
                
                <table className='table' key={currentJob.id}>
                   <tbody>
                    <tr style={{backgroundColor: currentJob.priority === 'Urgent' ? colors.urgentColor
                     :currentJob.priority === 'Regular'? colors.regularColor : colors.trivialColor}}>
                        <td className='job_title'>{currentJob.name}</td>
                        <td className='type_priority'>{currentJob.priority}</td>
                        <td>
                            <div className='table_buttons'>
                                <button className='table_button_edit'>Edit</button>
                                <button className='table_button_delete'  
                                onClick={() => {
                                handleDeleteClick(currentJob.id)
                            }}>Delete</button>
                            </div>
                        </td>
                    </tr>
                   </tbody>
                </table>
)}
            </div>
        </form>
        </div>
    )
};

export default JobListComponent;