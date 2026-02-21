import React from 'react'
import UserList from './components/UserList/UserList'
import { Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm/UserForm'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/user/list" element={<UserList />} />
        <Route path="/user/form" element={<UserForm />} />
      </Routes>
    </div>
  )
}

export default App
