import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full  text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">

        {/* Wrapper */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          {/* LEFT SIDE: Address */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-400" />
            <span>Jaipur, Rajasthan, India</span>
          </div>

          {/* RIGHT SIDE: Email + Social Icons + Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 md:justify-end w-full md:w-auto">

            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              <span>easyclean@gmail.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <FaFacebookF className="cursor-pointer hover:text-orange-400" />
              <FaTwitter className="cursor-pointer hover:text-orange-400" />
              <FaInstagram className="cursor-pointer hover:text-orange-400" />
              <FaYoutube className="cursor-pointer hover:text-orange-400" />
            </div>

            {/* Phone Box */}
            <div className="flex items-center justify-center gap-2 bg-orange-400 text-white px-4 py-2 rounded-md w-full sm:w-auto">
              <FaPhoneAlt />
              <span className="font-medium">+91 98765 43210</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
