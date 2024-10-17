const HomeContent = () => {
  return (
    <div
    className="alignfull w-full"
    style={{ marginBottom: 0 }}
    id="wp--skip-link--target"
  >
    <div className="entry-content alignfull w-full">
      <div className="nfd-my-0 w-full flex flex-col">
        <div
          className="relative w-full"
          style={{
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            minHeight: "578px",
          }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black bg-opacity-60"
          ></span>
          <img
            loading="lazy"
            decoding="async"
            width="671"
            height="453"
            className="w-full h-full object-cover"
            alt=""
            src="https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120514.png?resize=671%2C453&ssl=1"
            srcSet="https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120514.png?w=671&ssl=1 671w, https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120514.png?resize=300%2C203&ssl=1 300w, https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120514.png?resize=600%2C405&ssl=1 600w"
            sizes="(max-width: 671px) 100vw, 671px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <p className="text-sm font-semibold tracking-widest uppercase">
                Discover the best in medical tourism
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-4">
                Trusted Care Global Reach
              </h1>
              <p className="mt-4 opacity-80">
                Your Trusted Gateway to Premium Healthcare in Emerging
                Destinations – Safe, Reliable, and Accessible
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="nfd-my-0 overflow-hidden w-full flex justify-center rounded-lg mt-8">
        <div
          className="relative p-2 md:p-0 w-full flex justify-center items-center"
          style={{ minHeight: "10vh" }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gray-400 bg-opacity-50"
          ></span>
          <img
            loading="lazy"
            decoding="async"
            width="599"
            height="606"
            className="w-full h-full object-cover"
            alt=""
            src="https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120853.png?resize=599%2C606&ssl=1"
            srcSet="https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120853.png?w=599&ssl=1 599w, https://i0.wp.com/trustmed.life/wp-content/uploads/2024/05/Ekran-goruntusu-2024-05-30-120853.png?resize=297%2C300&ssl=1 297w"
            sizes="(max-width: 599px) 100vw, 599px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="bg-white bg-opacity-90 p-8 text-black rounded-lg"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase">
                Ready to Start?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Welcome to our platform
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="nfd-container my-8 p-8 bg-black text-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Discover New Destinations",
              description:
                "Turkey, Mexico, Thailand, India and much more tailored for your personal needs. With relevant price comparisons and local insights you will be as relaxed as a local when getting your treatment.",
              bg: "bg-gray-800",
            },
            {
              number: "02",
              title: "Find Trusted Professionals",
              description:
                "Whether you’re looking for medical services in Turkey, Thailand, Mexico, or other countries, our product helps you find the perfect match for your needs",
              bg: "bg-gray-700",
            },
            {
              number: "03",
              title: "Your Health Matters",
              description:
                "As our team, we believe that your health matters. We strive to provide you with valuable information and tools to find the most suitable service.",
              bg: "bg-gray-800",
            },
            {
              number: "04",
              title: "Stay informed",
              description:
                "Welcome to our blog about overseas treatments. Explore the latest trends, news, and insights. Equipped with enough information you will find the right treatment mindfree.",
              bg: "bg-gray-700",
            },
            {
              number: "05",
              title: "Connect with the Best",
              description:
                "Our product connects clients with top medical facilities in Turkey, Thailand, Mexico, and more.",
              bg: "bg-gray-800",
            },
            {
              number: "06",
              title: "Quality Care",
              description:
                "We prioritize quality care and ensure that our clients receive the best medical services.",
              bg: "bg-gray-700",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${item.bg} flex flex-col`}
            >
              <p className="text-xl text-gray-400 font-light tracking-widest">
                {item.number}
              </p>
              <p className="text-2xl font-bold mt-2">{item.title}</p>
              <p className="mt-4 opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="nfd-container my-8 p-8 bg-gray-800 text-white rounded-lg w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="text-sm font-semibold tracking-widest uppercase">
              Discover
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Transform your medical tourism journey
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              // href="https://trustmed.life/destinations-2/"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg"
            >
              Start your adventure
            </a>
          </div>
        </div>
      </div>

      <div className="nfd-container my-8 p-8 bg-gray-100 text-black rounded-lg w-full">
        <div className="flex flex-col md:flex-row">
          {[
            {
              question: "What is medical tourism?",
              answer:
                "Medical tourism refers to traveling to another country for medical treatment, often at a lower cost or with shorter waiting times compared to one’s home country.",
            },
            {
              question: "How does it work?",
              answer:
                "This process involves researching and selecting a destination country, finding a reputable healthcare provider, and making travel arrangements for the treatment.",
            },
            {
              question: "What are the benefits of overseas treatment?",
              answer:
                "The benefits of medical tourism include access to high-quality healthcare, cost savings, shorter waiting times, and the opportunity to combine treatment with a vacation.",
            },
            {
              question: "Is it safe to travel for medical purposes?",
              answer:
                "While medical tourism can be safe, it’s important to thoroughly research the healthcare provider, ensure they have proper credentials and reviews, and understand the local regulations.",
            },
            {
              question: "What countries are popular for medical tourism?",
              answer:
                "Popular countries for medical travel include Thailand, Mexico, Turkey, and Malaysia.",
            },
            {
              question: "How can I contact you for more?",
              answer:
                "You can contact us through the provided contact form.",
            },
          ].map((item, index) => (
            <div key={index} className="flex-1 p-4 m-2">
              <p className="text-lg font-bold">{item.question}</p>
              <p className="mt-2 opacity-80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeContent;
