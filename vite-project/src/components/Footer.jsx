import logo from "../assets/images/EC 512_300.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-blue-200 ">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Footer */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* Logo Section */}
          <div>
            <img
              src={logo}
              alt="Urban Hands Logo"
              className="h-16 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              Easy clean  Cleaning Services provides professional, reliable and
              affordable residential & commercial cleaning solutions.
            </p>
          </div>

          {/* Social Networks */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Social Networks
            </h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-orange-500 transition">
                <FaFacebookF className="text-blue-600 text-xl"/>
               <span className="text-xl"> Facebook</span>
              </li>

              <li className="flex items-center gap-3 hover:text-orange-400 transition">
                <FaInstagram className="text-pink-500 text-xl" />
               <span>insta_account</span> 
              </li>

              <li className="flex items-center gap-3 hover:text-orange-400 transition">
                <FaYoutube className="text-red-600 text-xl"/>
               <span>YouTube</span> 
              </li>

              <li className="flex items-center gap-3 hover:text-orange-400 transition">
                <FaWhatsapp className="text-green-500 text-xl" />
               <span>Whatsapp</span> 
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Contact Us
            </h3>
          
            <p className="text-lg mb-3 leading-relaxed">
              Shop no. 12, Plot 71, Chitrakoot Marg, Shalimar Bagh Colony,
              Tagore Nagar, Jaipur, Rajasthan 302021
            </p>

           <p className="flex items-center gap-3 text-lg">
    <MdEmail className=" " />
    urbanhands100@gmail.com
  </p>

  <p className="flex items-center gap-3 ">
    <MdPhone className="text-green-600 text-xl" />
    +91-9257262464
  </p>
          </div>
         
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-100 text-center py-4 text-sm text-gray-600">
        copyright © 2026, All rights reserved |{" "}
        <span className="font-semibold text-blue-700">
          Easy Clean Cleaning Services
        </span>
      </div>
    </footer>
  );
};

export default Footer;
