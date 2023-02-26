import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs, deleteDoc } from 'firebase/firestore';

const Home = () => {
  const [drivers, setDrivers] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/');
  }

  const colRef = collection(db, "drivers");

  const readDocs = () => {
    getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        setDrivers({ ...doc.data(), id: doc.id})
      })
      console.log(drivers)
    })
    .catch(err => {
      console.log(err.message);
    })
  }
  
  const addDocs = () => {
    addDoc(colRef, {
      name: "No"
    })
  }

    

  return (
    <div>
        <h1>Welcome Home {auth.currentUser.email}</h1>
        {drivers.phone}
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home