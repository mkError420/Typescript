
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/> 
      <Footer></Footer>
    </div>
  );
};

export default Layout;