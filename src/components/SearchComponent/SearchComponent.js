
import './SearchComponent.css'

const SearchComponent = () =>{

    return (
      <div className='search_wrap'>
        <div className="bottom">
        <h4 className="title">JOB LIST</h4>
        <input className="search_job"
         placeholder="Search Job"
         type='search'
         ></input>
      </div>
      <div className="divider" >
        <hr className="line" ></hr>
      </div>
      </div>
    ) 
}
export default SearchComponent;