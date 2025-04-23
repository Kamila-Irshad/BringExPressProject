import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/logo245a6755.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const scrollUp=()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickAble= () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex justify-between items-center h-16 px-4">
          <img src={Logo} alt="Logo" className="h-10" />
          
     
          <div className="block md:hidden" onClick={ clickAble}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl cursor-pointer" />
          </div>

   
          <ul className={`md:flex md:items-center text-[12px] font-semibold md:gap-6 absolute md:relative bg-white md:bg-transparent w-full md:w-auto top-16 md:top-0 left-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex flex-col gap-4 p-4 shadow-lg' : 'hidden'}`}>
            <li className="text-black border rounded-full h-6 w-10 text-center bg-gray-100">En</li>
            <li><Link to="/" onClick={scrollUp} className="text-[#a633db] hover:text-[#FF6C2F]">Home</Link></li>
            <li><Link to="/BePartners" onClick={scrollUp}  className="text-[#a633db] hover:text-[#FF6C2F]">Become A Partner</Link></li>
            <li><Link to="/About" onClick={scrollUp}  className="text-[#a633db] hover:text-[#FF6C2F]">About</Link></li>
            <li><Link to="/Contact" onClick={scrollUp}  className="text-[#a633db]">Contact Us</Link></li>

            <li>
         <Link to="/Careers" onClick={scrollUp} className="text-[#FF6C2F] bg-[#f3c1a7] rounded-full px-4 py-2 hover:bg-orange-600 hover:text-white ">     Careers</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
