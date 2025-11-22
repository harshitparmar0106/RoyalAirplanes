import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen pt-54  text-white py-20 px-6 lg:px-24 relative overflow-hidden">z

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-800">
          About Royal Airplanes
        </h1>
        <p className="text-slate-800 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Any aeroplane flying in the sky is a source of curiosity for people on
          the ground. Remote-controlled planes are considered the next best thing
          to flying the plane from its cockpit. Flying them gives a thrill and
          adrenaline rush that can be compared to adventure sports. Therefore,
          flying RC planes is a very old and popular hobby worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Image / Visual */}
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/cheerful-young-man-airline-worker-600nw-1815171710.jpg"
              alt="RC plane in flight"
              className="rounded-3xl  shadow-2xl border border-slate-700/50 hover:scale-105 transition-transform duration-700"
            />
            {/* <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-slate-900/50 to-transparent"></div> */}
          </div>

          {/* Text */}
          <div className="text-left">
            <h2 className="text-3xl font-semibold text-amber-400 mb-4">
              Making the Skies Accessible
            </h2>
            <p className="text-slate-800 mb-6 leading-relaxed">
              While this hobby has seen a lot of advancements since its early
              days, the advent of RC planes made of EPO foam (foamies) with
              brushless DC power systems make them light, easy to handle, and
              affordable.
            </p>
            <p className="text-slate-800 mb-6 leading-relaxed">
              Royal Airplanes is making this hobby easily accessible to you in
              India at a reasonable price. This venture is the idea of{" "}
              <span className="text-blue-900 font-semibold">
                Sanjana Singh Chauhan
              </span>
              , wife of a fighter pilot and now an RC plane enthusiast.
            </p>
            <p className="text-slate-800 leading-relaxed">
              All plane models available on{" "}
              <span className="text-blue-900 font-semibold">
                royalairplanes.com
              </span>{" "}
              are tried and tested for their quality and reliability. You can
              count on us for full product support of the models as we share the
              passion for the hobby with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About