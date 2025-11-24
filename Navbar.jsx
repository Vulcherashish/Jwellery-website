import React, { useEffect, useState } from "react";
import addtocarticon from '../Assets/add_to_cart3.jpg'
import dropdownIcon from '../Assets/prof2.jpg'
import mainlogo from '../Assets/mainlogo3.png'
import { Link } from "react-router-dom";
import { useAuth } from '../../Context/AuthContext';
import './navbar.css'

const Navbar =() => {
    const [menu,setMenu] = useState("shop");
    const [cartCount, setCartCount] = useState(0);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        setShowUserMenu(false);
    };

    useEffect(() => {
        const computeCount = () => {
            try {
                const raw = localStorage.getItem('cart');
                const cart = raw ? JSON.parse(raw) : [];
                const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
                setCartCount(count);
            } catch {
                setCartCount(0);
            }
        };
        computeCount();
        const handle = () => computeCount();
        window.addEventListener('cart:updated', handle);
        window.addEventListener('storage', handle);
        return () => {
            window.removeEventListener('cart:updated', handle);
            window.removeEventListener('storage', handle);
        };
    }, []);

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={mainlogo} alt=""/>
                <p>Elegant Jewellery Boutique</p>
            </div>
            <ul className="nav-menu" id="menu">
                <li onClick={() =>{setMenu("shop")}}><Link style={{ textDecoration: 'none', color: '#654321'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("Gift")}}><Link style={{ textDecoration: 'none', color: '#654321'}} to='/Gift'>Gift</Link>{menu==="Gift"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("CustomJewelryPage")}}><Link style={{ textDecoration: 'none', color: '#654321'}} to='/CustomJewelryPage'>Customise</Link>{menu==="CustomJewelryPage"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("Product")}}><Link style={{ textDecoration: 'none', color: '#654321'}} to='/Product'>Products</Link>{menu==="Product"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("AboutUs")}}><Link style={{ textDecoration: 'none', color: '#654321'}} to='/AboutUs'>About Us</Link>{menu==="AboutUs"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("ContactUsPage")}}><Link style={{ textDecoration: 'none', color: '#654321'}} to='/ContactUsPage'>Contact Us</Link>{menu==="ContactUsPage"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {user ? (
                    <div className="user-menu">
                        <div 
                            className="user-info"
                            onClick={() => setShowUserMenu(!showUserMenu)}
                        >
                            <div className="user-icon"><img src={dropdownIcon} alt="user" style={{width:40,height:40,borderRadius:20}}/></div>
                            <span className="user-name">{user.name}</span>
                            <span className="dropdown-arrow">▼</span>
                        </div>
                        {showUserMenu && (
                            <div className="user-dropdown">
                                <div className="user-details">
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
                                </div>
                                <Link to='/dashboard'><button className="logout-btn">Edit Profile</button></Link>
                                <button onClick={handleLogout} className="logout-btn">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to='/login'><button>Login</button></Link>
                )}
                <Link to='/cart'><img src={addtocarticon} alt="add to cart"/></Link>
                <div className="nav-cart-counter">{cartCount}</div>
            </div>
            
        </div>
    )
}

export default Navbar