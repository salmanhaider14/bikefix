import React from "react";
import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black md:mt-4">
        <div className="flex items-center justify-center p-3 md:p-8">
          <Image
            className="w-full h-auto max-w-sm"
            src="/image/about-hero.webp"
            height={359}
            width={339}
            priority
            alt="About Us - Bikefixup"
          />
        </div>
        <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/0 rounded-3xl shadow-md border py-10 px-10">
          <h1 className="text-4xl md:text-5xl leading-none font-bold">
            About <span className="text-beta-900">Us</span>
          </h1>
          <h2 className="text-beta-900 text-xl lg:text-2xl font-semibold mt-4 mb-5">
            Welcome at
            <span className="text-alpha-700 mr-1"> Bike</span>
            <span className="text-black">fixup</span>
          </h2>
          <p className="text-justify">
            How painful is it to service your motorcycle? Let us break it down
            for you. Not sure which services station to trust? Don’t want to
            spend too much time in the workshop? Are you looking for a
            assemblage pick-up and drop-off services?
            <br />
            <br />
            we’re here to make sure that no one is inconvenienced while getting
            their bike serviced. this will allow bike owner to obtain convenient
            bike service while relaxing with their families or working.
            Bikefixup is a full-service preventive maintenance and automotive
            repair company. We perform high quality, guaranteed services you can
            trust at a fair price.
          </p>
        </div>
      </div>

      {/* about mission */}
      <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/20 rounded-3xl shadow-md text-black border py-10 px-10 mt-10">
        <h4 className="text-4xl md:text-5xl mb-1 md:mb-3 font-semibold text-beta-900 text-center">
          Our mission
        </h4>
        <h4 className="mb-5 text-lg md:text-3xl font-medium text-center">
          What Makes Bikefixup stand out?
        </h4>
        <p className="text-justify mb-2">
          We at Bikefixup want to change the bike servicing industry by
          providing trustworthy and real bike services at affordable prices.
        </p>
        <p className="text-justify mb-2">
          We at Bikefixup provide the best two wheeler service think that your
          vehicle is more than a machine and we treat is as such. Our premium
          quality services at cost-effective, our genuineness, and your faith in
          us are what set us apart from the competition!
        </p>
        <p className="text-justify mb-2">
          Our purpose is to improve the industry from both sides. By offering
          clients with a pleasant, cost-effective, speedy and comfortable
          service, repair and maintenance experience. Simultaneously, expanding
          service providers by providing them with a wide ranges of inventory
          and spare part accessories straight from the OEM and OES, in order to
          improve service quality, customer trust and loyalty. As a result, we
          consider it an honor to be your vehicle’s lonebuddy, someone you can
          rely on at the end of the day.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black md:my-4 items-center">
        <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/20 rounded-3xl shadow-md text-black border py-10 px-10">
          <h3 className="text-xl lg:text-4xl font-semibold mb-4">Our Team</h3>
          <p className="text-justify mb-2">
            Bikefixup is India's leading bike service provider, spread into a
            number of cities and states providing you with 500+ best quality
            services for your bikes like repair, servicing, maintenance,
            inspection, and a lot more.
          </p>
          <p className="text-justify">
            Our Team is Dedicated to Enthrall you and make you trust us with our
            top-notch service. We promise a lifelong delightful experience with
            us.
          </p>
        </div>
        <div className="flex items-center justify-center p-3 md:p-8">
          <Image
            className="w-full h-auto"
            src="/image/our-team.webp"
            height={427}
            width={350}
            alt="Bikefixup - Our Team"
          />
        </div>
      </div>

      {/* one stop */}
      <div className="bg-gradient-to-b from-white/20 to-white/0 bg-white/0 rounded-3xl shadow-md text-black border pt-10 pb-8 px-6">
        <h3 className="text-center font-semibold text-3xl md:text-4xl mb-6">
          What makes us a one stop ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black md:mt-4">
          <div className="h-full bg-gradient-to-b from-white/20 to-white/0 bg-white/0 rounded-3xl shadow-md text-black border py-5 md:py-10 px-6 md:px-10">
            <h5 className="text-xl font-semibold text-center mb-5">
              Service Quality Assurance
            </h5>
            <p className="text-justify mb-2">
              We at Bikefixup use only originally manufactured products to
              provide the best possible bike service experience to our customer.
            </p>
            <p className="text-justify mb-2">
              Customer satisfaction is our top-most priority, and we provide
              that satisfaction in term of quality service.
            </p>
            <p className="text-justify">We have 500+ happy customer.</p>
          </div>
          <div className="h-full bg-gradient-to-b from-white/20 to-white/0 bg-white/0 rounded-3xl shadow-md text-black border py-5 md:py-10 px-6 md:px-10">
            <h5 className="text-xl font-semibold text-center mb-5">
              Price Transparency
            </h5>
            <p className="text-justify mb-2">
              We at Bikefixup believes in transparent price policy to provide
              the best prices of all spare parts.Our competitive prices will
              never let you down because we have our tie-ups with spare parts
            </p>
            <p className="text-justify">
              Our competitive prices will never let you down because we have our
              tie-ups with spare parts whole seller who provides best prices in
              market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutHeroSection;
