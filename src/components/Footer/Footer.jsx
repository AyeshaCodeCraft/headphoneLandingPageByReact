import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import icons from "../../assets/credit-cards.webp";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <footer
        className="bg-primary pt-12 text-white
         pb-12 px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details */}
          
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          className="space-y-6">
            <h1 className="uppercase font-bold text-3xl">Playing</h1>
            <p className="text-sm max-w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>

            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* Links footer section */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline">About</li>
                  <li className="hover:underline">Contact Us</li>
                  <li className="hover:underline">Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="hover:underline">Home</li>
                  <li className="hover:underline">About</li>
                  <li className="hover:underline">Contact Us</li>
                  <li className="hover:underline">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links Section */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>

            <div className="flex items-center gap-4">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={icons} alt="" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* Copyright Section */}
        <div className="">
          <p className="text-white mt-8 text-center border-t-2 pt-8">
            © 2024. All Rights Reserved || Made By Ayesha
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
