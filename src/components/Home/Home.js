import AddJobComponent from '../AddJobComponent/AddJobComponent';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () =>{

    return(
        <div className="container_wrap">
            <h1 className='main_title'>JOB LIST </h1>
            <AddJobComponent/>
            <Footer/>
        </div>
    )
};

export default Home;