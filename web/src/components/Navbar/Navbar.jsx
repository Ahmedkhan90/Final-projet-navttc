import React from "react";
import { Link } from 'react-router-dom'
import { useGlobalState } from '../../context/globalContext'
import Logout from './logout'
function Navbar() {
    const globalState = useGlobalState()
    return (
        <div className='sticky-top'  >
            <nav style={{backgroundColor:"yellow" ,color: "black"}}  className="navbar  navbar-expand-lg navbar-light bg-light"  >
                <a className="navbar-brand" href="#">Sweet Shop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"  >
                    {globalState.role === 'user' ?
                        <>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/myorders">My Orders <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                            <h3 className="mr-3" style={{color: "black"}}>Welcome {globalState.user.name.charAt(0).toUpperCase() + globalState.user.name.slice(1)}</h3>
                            <Logout />
                        </> :
                        <>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Coustomer's Ordered History <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/addproducts">Add Products <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                            <h3 className="mr-3">Welcome {globalState.user.name.charAt(0).toUpperCase() + globalState.user.name.slice(1)}</h3>
                            <Logout />
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}
export default Navbar