import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="header">
                <h2 className="logo">CompanyLogo</h2>
                <div className="header-right">
                    <Link className="link" to="/user/form">User Form</Link> 
                    <Link className="link" to="/user/list">User List From API</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
