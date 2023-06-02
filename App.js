import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import dog from './Images/dog.jpg';
import AddContact from './Components/AddContact';
import ContactList from './Components/Contact-List';
import ViewContact from './Components/ViewContact';
import EditContact from './Components/EditContact';
function App() {
  return (
    // <div className="App">
    // <button className='btn btn-success'>Test bootstrap
    // <i class="fa fa-home" aria-hidden="true"></i></button>
    // </div>
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>
      {/* <Contact contact={{
        "id":5,
        "fullName":"Dev",
        "contactNo":9813084847,
        "emailAddress":"dev@gmail.com",
        "gender":"Male",
        "image":dog
        }} /> */}
    </div>
  );
}
export default App;