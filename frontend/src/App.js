import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/404NotFoundPage';
import UserPage from './components/UserPage'
import OfficePage from './components/OfficePage'
import CreatOffice from './components/CreateOffice';
import React, { useEffect, useState } from "react";
function App() {
  const [office_id, setOffice_id] = useState(3)
  const [name_Auth, setNameAuth] = useState("")

  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />
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
