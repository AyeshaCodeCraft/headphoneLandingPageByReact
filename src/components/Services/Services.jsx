import { motion } from "framer-motion";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { useEffect } from "react";

const ServivesData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarrantee",
    icon: Icon2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    delay: 1.1,
  },
];

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
    exit: {
      opacity: 1,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
      },
    },
  };
};

function Services() {
  return (
    <>
      <section className="bg-gray-100 font-poppins p-20">
        <div className="max-w-7xl mx-auto">
          <div className=" pb-12">
            <motion.h1
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-3xl font-bold text-center"
            >
              Services
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 ">
            {ServivesData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  rotate: 720,
                  scale: 5,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div>
                      <img src={data.icon} alt="" />
                    </div>
                  ),
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  className=" bg-white rounded-xl flex flex-col items-center justify-center max-w-75 mx-auto p-5 shadow-lg"
                >
                  <img className="w-25 mb-4" src={data.icon} alt="" />

                  <div className="text-center space-y-2">
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className="text-sm text-black/75 text-center">
                      {data.desc}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
