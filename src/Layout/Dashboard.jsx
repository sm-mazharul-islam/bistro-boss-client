import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart();


    // TODO : load data from the server to have dynamic isAdmin based on Data 
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet/>
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full">

      {
        isAdmin ? <>
         <li><NavLink to="/dashboard/home"><FaHome/>Admin Home</NavLink></li>
      <li><NavLink to="/dashboard/addItem"><FaUtensils/> Add an Item</NavLink></li>
      <li><NavLink to="/dashboard/manageitems"><FaWallet/>Manage Items</NavLink></li>
      <li><NavLink to="/dashboard/history"><FaBook/>Manage Bookings</NavLink></li>
      <li><NavLink to="/dashboard/allusers"><FaUsers/>All Users</NavLink></li>
     
        </> : <>
         <li><NavLink to="/dashboard/home"><FaHome/>User Home</NavLink></li>
      <li><NavLink to="/dashboard/reservations"><FaCalendarAlt/>Reservations</NavLink></li>
      <li><NavLink to="/dashboard/history"><FaWallet/>Payment History</NavLink></li>
      <li>
        <NavLink to="/dashboard/mycart"><FaShoppingCart/>My Cart
        <span className="badge badge-secondary">+{cart?.length || 0}</span>
        </NavLink>
        </li>
        </>
      }

     




      <div className="divider"></div>
      <li><NavLink to="/"><FaHome/></NavLink></li>
      <li><NavLink to="/menu">Our Menu</NavLink></li>
      <li><NavLink to="/order/salad">Order Food</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;