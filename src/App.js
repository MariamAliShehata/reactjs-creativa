import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import FunctionalProps from './components/Props/FunctionalProps';
import ClassProps from './components/Props/ClassProps';
import State from './components/State/State';

function App() {
  return (
    <div className="App">
      <p>Welcome to task1</p>
      <ClassComponent />
      <br></br>
      <FunctionalComponent />
      <FunctionalProps fname = {"Mariam"} lname = {"Shehata"} 
      email = {"mariam@fci.com"} id ={12345678} >
        <p>You were born in 2003, So you are 21 years old</p>
      </FunctionalProps>
      <FunctionalProps fname = {"layla"} email = {"layla@fci.com"} id ={12345670} />
      <FunctionalProps fname = {"Hagar"} id ={123456} />

      <ClassProps x="JavaScript" y="Reactjs course"/>
      <ClassProps x="Arduino" y="HCIA">
        <h4>Courses i have learned </h4>
      </ClassProps>
      <State />
    </div>
  );
}

export default App;
