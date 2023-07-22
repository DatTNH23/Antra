import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/404NotFoundPage';
import UserPage from './Pages/UserPage'
import OfficePage from './Pages/OfficePage'
import CreatOffice from './Pages/CreateOffice';
import React, { useState } from "react";
import OfficeLogin from './Pages/OfficeLogin';
function App() {
  const [office_id, setOffice_id] = useState(3)
  const [name_Auth, setNameAuth] = useState("")

  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/login-office' element={<OfficeLogin />} />
        <Route path='/office' element={<OfficePage office_id={office_id}
          setOffice_id={setOffice_id}
          name_Auth={name_Auth}
          setNameAuth={setNameAuth} />} />
        <Route path='/create-office' element={<CreatOffice office_id={office_id}
          setOffice_id={setOffice_id}
          name_Auth={name_Auth}
          setNameAuth={setNameAuth} />} />
        <Route path='/notfound' element={<NotFound />} />

      </Routes>
    </div >
  );
}

export default App;
