import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";

import { motion } from "framer-motion";
// import { fadeUp } from "../Services/Services";
import { UpdateFollower } from "react-mouse-follower";

const BlogData = [
  {
    id: 1,
    image: Blogs1,
    title: "Lorem ipsum dolor sit amet consectetur...",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    delay: 0.2,
  },
  {
    id: 2,
    image: Blogs2,
    title: "Lorem ipsum dolor sit amet consectetur...",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    delay: 0.5,
  },
  {
    id: 3,
    image: Blogs3,
    title: "Lorem ipsum dolor sit amet consectetur...",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    delay: 0.8,
  },
  {
    id: 4,
    image: Blogs4,
    title: "Lorem ipsum dolor sit amet consectetur...",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
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
        duration: 0.2,
        delay: delay,
      },
    },
    exit: {
      opacity: 1,
      y: 50,
      scale: 0.2,
      transition: {
        duration: 0.2,
      },
    },
  };
};


function Blogs() {
  return (
    <>
      <section className="bg-gray-100 font-poppins p-20">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <div className=" pb-12">
            <motion.h1
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-3xl font-bold text-center"
            >
              Blogs
            </motion.h1>
          </div>

          {/* Blog Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 ">
            {BlogData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 0.5,
                    scale: 5,
                    text: "read",
                    textFontSize: "3px"
                }}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}

                  className=" bg-white rounded-sm flex flex-col items-center 
                  justify-center max-w-87.5 mx-auto p-5 shadow-lg transition-all duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-xl"
                >
                  <img className="mb-4 w-65" src={data.image} alt="" />

                  <div className="text-center space-y-2">
                    <h1 className="text-[16px] text-left font-bold">{data.title}</h1>
                    <p className="text-sm text-black/75 text-left">
                      {data.subtitle}
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
export default Blogs;
