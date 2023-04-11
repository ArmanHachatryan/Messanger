import React, { useState } from 'react'
import Users from '../components/Users'
import User from '../components/User'

export default function Dashboard() {
  const [selectedUser, setSelectedUser]= useState(null);

  return (
    <>
        <Users setSelectedUser={setSelectedUser}/>

        <hr />

        <User selectedUser={selectedUser}/>
    </>
  )
}
