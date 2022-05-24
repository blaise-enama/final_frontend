import Courses from './Components/AllCourses';
import './App.css';
import Instructors from './Components/AllInstructors';
import { Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Route path= {'/'}  component={Home}/> */}
      <Router>
        <Route path={'/courses'} component={Courses}/>
        <Route path={'/instructors'} component={Instructors}/>
      </Router>
    </div>
  );
}

export default App;
