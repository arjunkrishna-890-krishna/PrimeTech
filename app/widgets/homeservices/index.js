const HomeServices = () => {
  return (
    <section className=" p-20 bg-black">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-semibold text-white">Services</h2>
      </div>
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <p className="text-lg text-white">
          We provide a range of services to help you achieve your goals. Our
          team is dedicated to delivering quality solutions tailored to your
          needs. Explore our offerings below.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <img
            src="/pexels-yankrukov-7693107.jpg"
            alt="Engineering Services"
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-1xl text-white mb-2">Engineering Services</h3>
          <p className="text-white">
            Pre-Engineering: Focused on project planning, design, and BOQ
            preparation. <br />
            Post-Engineering: Involves project execution, supervision, and
            quality assurance.
          </p>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <img
            src="/pexels-pixabay-128867.jpg"
            alt="Quote Management"
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-1xl text-white mb-2">Quote Management</h3>
          <p className="text-white">
            Reports: Generating comprehensive reports to track quote performance
            and insights. <br />
            Dynamic Data Support: Real-time data handling and integration for
            accurate and up-to-date quotes.
          </p>
        </div>
        <div className="bg-black p-6 rounded-lg shadow-lg">
          <img
            src="/pexels-abdul-zreika-233770-7961889.jpg"
            alt="Service 1"
            className="w-full h-64 object-cover mb-4"
          />
          <h3 className="text-1xl text-white mb-2">Resource Management</h3>
          <p className="text-white">
            Workload Management: Balancing tasks to ensure optimal performance.{" "}
            <br />
            Scope Management: Defining project goals and timelines to avoid
            scope creep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
