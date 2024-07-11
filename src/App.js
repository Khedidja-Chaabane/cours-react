import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Heros from './components/Heros';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreeting from './components/UserGreeting';
import AdminTest from './components/AdminTest';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
     

      {/* <Greet name="Thomas" age="30 ans">
        Je suis un gentilhomme
        </Greet>
      <Greet name="Toto" age="27 ans" />
      <Greet name="Jhon" age="25 ans"/>

      <Welcome /> */}

{/* //exo Heros */}
{/* <Heros name="Bruce" surnom="Batman"/>

<Heros name="Clarck" surnom="Superman">
This is children props
</Heros>

<Heros name="Diane" surnom="Wonder woman"/> */}

{/* composant par class Welcome */}
{/* <Welcome name="Amir" age="30 ans">
        Je suis un chanteur
        </Welcome>
      <Welcome name="Selma" age="27 ans" />
      <Welcome name="Pierre" age="25 ans"/>

      <Message/>
      <Greet name="Kadi" age="37 ans"/>
      <Greet name="Sohil" age="27 ans">

      This is an easier way to work with props

      </Greet>
      <FunctionClick/>
      <ClassClick/>
      <UserGreeting/>
      <AdminTest/> */}

      <NameList/>


</div>
  );
}

export default App;


