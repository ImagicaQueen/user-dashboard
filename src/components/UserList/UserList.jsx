import React, { useState, useEffect } from 'react'
import { useUser } from '../../context/UserContext';
import "./UserList.css"
import Loader from '../Loader/Loader';
import Model from '../Model/Model';

const UserList = () => {
    const { users } = useUser();
    const [search, setSearch] = useState("");
    const [debounceSearch, setDebounceSearch] = useState("");
    const [open, setOpen] = React.useState(false);
    const [selectedUser, setSelctedUser] = useState(null)
    

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (user) => {
        setSelctedUser(user);
        setOpen(true);
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setDebounceSearch(search)
        }, 500)
        return () => clearTimeout(time)
    }, [search])

    if (!users) return <div><Loader /></div>

    const filteredSearch = users.filter((ele) => ele.name.toLowerCase().includes(debounceSearch.toLowerCase()))
    return (
        <div>
            <h2>User List</h2>

            <input placeholder='seaching by name ...' value={search} onChange={(e) => setSearch(e.target.value)} className='search-input' />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 && filteredSearch.map((user) => (
                            <tr key={user.id}>
                                <td onClick={() => handleOpen(user)} style={{ cursor: "pointer" }}>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Model open={open} handleClose={handleClose} user={selectedUser}/>

        </div>
    )
}

export default UserList
