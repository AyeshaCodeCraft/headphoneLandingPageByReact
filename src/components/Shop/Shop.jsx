import Headphone4 from "../../assets/headphone4.png";
import { easeInOut, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";

function Shop() {
  return (
    <>
      <section
        className="py-12
         px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          <div>
            <motion.img
              // initial={{ opacity: 0, x: -100, rotate: -180 }}
              // animate={{ opacity: 1, x: 0, rotate: 0 }}
              // transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="w-75 md:w-100"
              src={Headphone4}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-112.5">
              <motion.h1
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphones With The Latest Technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae iusto minima ad ut id eos accusantium aut, aperiam
                quis incidunt!
              </motion.p>

              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <motion.button
                  variants={fadeUp(1.3)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] px-6 py-2 text-[#e33343] rounded-md hover:bg-[#e33343] hover:text-white"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Shop;
