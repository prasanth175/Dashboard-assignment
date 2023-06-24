import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';
import './App.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

// Create the ProfileContext
const ProfileContext = React.createContext();

const clientId = '75030971780-pjohi0mlucn3u0snvbit9jfgrbplnra4.apps.googleusercontent.com';

const App = () => {
  const [profileObj, setProfileObj] = useState(null);

  useEffect(() => {
    gapi.load('client:auth2', start);
  }, []);

  const start = () => {
    gapi.client.init({
      clientId: clientId,
      scope: '',
    });
  };

  const updateProfileObj = (newProfileObj) => {
    setProfileObj(newProfileObj);
  };

  console.log(profileObj)

  return (
    <ProfileContext.Provider value={profileObj}>
      <Routes>
        <Route
          exact
          path="/login"
          element={<LoginPage setProfileObj={updateProfileObj} />}
        />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ProfileContext.Provider>
  );
};

export default App;
