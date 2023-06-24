import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import './index.css';
import ProfileContext from '../../profileContext';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const profileObj = useContext(ProfileContext);
  console.log('love')
  console.log(profileObj)

  const onSearch = (event) => setSearch(event.target.value);

  return (
    <nav className="navbar">
      <h1 className="nav-heading">Dashboard</h1>
      <div className="nav-right-container">
        <div className="nav-input-field">
          <input className="nav-search" type='search' placeholder="Search..." value={search} onChange={onSearch} />
          <BsSearch className="search-img" />
        </div>
        <IoIosNotificationsOutline className="notification-img" />
        {profileObj && <CgProfile className="profile-img" />}
      </div>
    </nav>
  );
}

export default Navbar;
