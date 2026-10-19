import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    
    <div className="headerBox">
      
      <h1 className="free-text">Free Shipping over $75!</h1>
      <div className="box-text">
        <div className="five-text">
          <h2 className="new-in">New in</h2>
          <h2 className="apparel">Apparel</h2>
          <h2 className="plus-size">Plus size</h2>
          <h2 className="accessories">Accessories</h2>
          <h2 className="restocked">Restocked</h2>
        </div>
        <div className="img-ovroe">
          <img className="img" src="images/Ovroe.png" alt="Photo" />
        </div>
        <div className="search-text">
          <div className="search-box">
            <h2 className="search">search</h2>
            <img className="search-img" src="/images/search.png" alt="" />
          </div>
         <Link to="/home" className="sign-in">sign in</Link>
         <Link to="/catalog" className="catalog"></Link>
      
            <Link to="/product" className="cart">Cart 0</Link>
        </div>
      </div>
    </div>
  );
}
