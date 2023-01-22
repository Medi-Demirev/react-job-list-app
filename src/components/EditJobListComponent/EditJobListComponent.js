import { useState } from 'react';
import './EditJobListComponent.css';

const EditJobListComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeHandler = () => {
        setIsOpen(false)
    };
    console.log(isOpen);
    return isOpen ? (
        <div className="priority_edit">
            <div className='close_btn_container'>
                <button className='close_btn' type='submit' onClick={closeHandler}>x</button>
            </div>
            <div className='border'>
                <h4 className="priority_title">My jobs name 2</h4>
                <select name="priority_select" className='priority_select'>

                    <option value={'Urgent'} >Urgent</option>
                    <option value={'Regular'}>Regular</option>
                    <option value={'Trivial'}>Trivial</option>
                </select>
                <div className='edit_btn_container'>
                    <button className='update_btn' >Update</button>
                </div>
            </div>
        </div>
    ) : ''
};

export default EditJobListComponent;