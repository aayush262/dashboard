import React from 'react';
import './sidebar.css'
import { withRouter,Link } from 'react-router-dom';

const SideBar =  () => {
    
    return(
        <nav id = "sidebar" className="active">
        <div>
          <div className="sidebar-header">
            <h3>Shop</h3>
          </div>
          <ul className="list-unstyled components">
            <li className="active">
              <Link className="slink" to ="/">Home</Link>
            </li>
            <li>
              <Link className="slink" to="/about">About</Link>
            </li>
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle slink">Product</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                <Link  className="slink" to="/add-product">Add Product</Link>
                </li>
                <li>
                <Link className="slink" to="/view-products">View Products</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="slink" to="/messages">Messages</Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" style={{width:'200px',margin:'10px'}}type="search" placeholder="Search Product" aria-label="Search" />
              <button type="submit" style = {{marginLeft:'10px'}} className="btn btn-success">Search</button>
            </form>
        </div>
        </nav>
      );
}

export default withRouter(SideBar);