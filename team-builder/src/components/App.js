import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

import Form from './Form';
import axios from '../axios';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {


  const [developers, setDevelopers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {

    const newFormValues = {
      ...formValues, [inputName]: inputValue
    }
    setFormValues(newFormValues);
  }

  const submitForm = () => {
    const newDeveloper = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    const nameIsEmpty = !newDeveloper.name;
    const emailIsEmpty = !newDeveloper.email;
    const roleIsEmpty = newDeveloper.role === '';
    if (nameIsEmpty || emailIsEmpty || roleIsEmpty) return;

    axios
      .post('fakeapi.com', newDeveloper)
      .then(res => {
        const newDevelopers = [...developers, newDeveloper]
        setDevelopers(newDevelopers)
      })
      .catch(err => console.log(err))

    setFormValues(initialFormValues)
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setDevelopers(res.data))
  }, [])



  return (
    <div className="App">
      <h1>Form App</h1>
      <Form
        formValues={formValues}
        update={updateForm}
        submit={submitForm} />
      {
        developers.map(dev => {
          return (
            <div key={dev.id}>
              <h2>{dev.name}</h2>
              <p>{dev.email}</p>
              <p>{dev.role}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
