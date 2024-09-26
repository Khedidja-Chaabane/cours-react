import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Marketing from './components/Services/Marketing/Marketing';
import Developpement from './components/Services/Developpement/Developpement';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';

import Admin from './components/Admin/Admin';
import GestionPost from './components/Admin/GestionPost/GestionPost';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import FetchOneContact from './components/Contact/FetchOneContact';
import DataFetchContact from './components/Contact/DataFetchContact';
import DataFetchPosts from './components/DataFetchPosts';
import FetchOnePost from './components/FetchOnePost';
import { BluekButton, Button } from './components/Button.style';
import UpdateContact from './components/Contact/UpdateContact';
import NewContact from './components/Contact/NewContact';
import Connexion from './components/User/Connexion/Connexion';
import ImageUpload from './components/ImageUpload';
import NewPost from './components/Blog/NewPost';
import Inscription from './components/User/Inscription';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Heros from './components/Heros';
// import Message from './components/Message';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import UserGreeting from './components/UserGreeting';
// import AdminTest from './components/AdminTest';
// import NameList from './components/NameList';
// import Inline from './components/Inline';
// import Stylsheets from './components/Stylsheets';
// import Formulaire from './components/Formulaire';
// import NewsLetter from './components/NewsLetter';
// import DataFetchingOne from './components/DataFetchingOne';
// import Film from './components/Film';
// import FilmUserChoice from './components/FilmUserChoice';
// import DataFetchingAll from './components/DataFetchingAll';
//import DataFetchingTodos from './components/DataFetchingTodos';
// import DataTodosReducer from './components/DataTodosReducer';
//  import DataFetchingUsers from './components/DataFetchingUsers';
//
// 
// import DataFetchCars from './components/DataFetchCars';
// import NewContact from './components/NewContact';

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

      {/* <NameList/> */}
      {/* <Inline/> */}
      {/* importer du style et activer des classes css */}
      {/* <Stylsheets primary={true}/>  */}
{/* <Formulaire/> */}
{/* <NewsLetter/> */}
{/* <DataFetchingOne/> */}
{/* <Film/>
<FilmUserChoice/> */}
{/* <DataFetchingAll/> */}
{/* <DataTodosReducer/> */}
{/* <DataFetchingUsers/> */}
{/* <DataFetchContact/>

<NewContact/> */}
{/* <DataFetchPosts/> */}

 <Navbar/>
 
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/blog' element={<DataFetchPosts/>}/>
  <Route path='/post/:id' element={<FetchOnePost/>}/>
  <Route path='/newPost' element={<NewPost/>} />

  {/* Les routes protégées */}
  <Route path='/services' element={<Services/>}>
  <Route path='/services/marketing' element={<Marketing/>}/>
  <Route path='/services/developpement' element={<Developpement/>}/>
  </Route>
  <Route path='/contacts' element={<DataFetchContact/>}/>
  <Route path='/newContact' element={<NewContact/>}/>
  <Route path='/contact/:id' element={<FetchOneContact/>}/>
  <Route path='/updateContact/:id' element={<UpdateContact/>}/>
  <Route path='/inscription' element={<Inscription/>}/>
  <Route path='/connexion' element={<Connexion/>}/>

  <Route path='/profile/:id' element={<Profile/>}/>
  <Route path='/allContacts' element={<DataFetchContact/>}/>

  <Route path='/admin' element={<Admin/>}>
  <Route path='/admin/dashboard' element={<Dashboard/>}/>
  <Route path='/admin/gestionPost' element={<GestionPost/>}/>
  </Route>

  <Route path='/*' element={<NotFound/>}/>
  
</Routes>
{/* <DataFetchCars/> */}
{/* <DataFetchingTodos/> */}

{/* <Button>SAlut</Button>
<BluekButton>Bouton bleu</BluekButton>
<Button backgroundColor="silver">Bouton avec Props</Button>
<Button backgroundColor="black" color="white">Bouton avec Props</Button>
<ImageUpload/> */}
</div>
  );
}

export default App;


