import { UpdateFollower } from "react-mouse-follower";
function BannerText() {
  return (
    <>
      <section
        className="py-12
         px-16 text-center"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-linear-to-t from-primary to-primary/70 bg-red text-white rounded-3xl p-8
                hover:scale-105 duration-500 hover:shadow-2xl"
          >
            <UpdateFollower
              mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 10,
                  mixBlendMode: "screen",
                }}
            >
            <p className="font-varela font-bold text-4xl max-w-175 mx-auto leading-normal">
              Headphones With Good Quality And Affordable Price
            </p>
            </UpdateFollower>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerText;
