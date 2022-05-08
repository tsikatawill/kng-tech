import {
  FaCogs,
  FaGlobeAmericas,
  FaMoneyBillAlt,
  FaSmile,
} from "react-icons/fa";
import App from "../App";
import ServiceCard from "../components/ServiceCard";

const OutsourcingPage = () => {
  return (
    <App>
      <header className="outsourcing-header h-[300px]">
        <div className="container flex flex-col items-center justify-center h-full  text-white text-center">
          <h1 className="text-2xl sm:text-5xl font-bold text-orange-500 uppercase mb-2">
            OUTSOURCED DEVELOPERS
          </h1>
          <p className="text-lg sm:text-2xl max-w-2xl">
            Build your team with us
          </p>
        </div>
      </header>
      <main className="bg-slate-300">
        <div className="work-description">
          <div className="container sm:py-10 py-5 text-center border-b border-gray-900">
            <div>
              <h1 className="text-2xl capitalize font-semibold">
                Outsourced developers
              </h1>
              <p className="w-full sm:max-w-3xl mx-auto">
                Whether you need a long-term developer for your team or
                short-term expertise that you are missing, we have you covered.
                Let us know your exact needs and we will work with you to find
                the right developer(s). We have developers that can work on
                front-end development (web or mobile) and back-end development.
              </p>
            </div>
          </div>
        </div>
        <section className="why-outsourcing">
          <div className="container">
            <h2 className="text-center text-xl font-semibold mb-5">
              Why outsourcing?
            </h2>
            <div className="benefit-cards py-5 text-slate-700 services flex flex-col md:grid md:grid-cols-2 max-w-3xl mx-auto gap-5 sm:gap-10">
              <ServiceCard
                light={true}
                title={"Low cost"}
                icon={<FaMoneyBillAlt />}
                text="Reduce development costs by embedding our experienced software engineers from Ghana into your existing team. Our lower cost of living allows us to provide superior talent at a lower cost."
              />
              <ServiceCard
                light={true}
                title={"Timezone & Language"}
                icon={<FaGlobeAmericas />}
                text="Use outsourced developers who can work in your time zone. Communicate live during your work hours with native English language speakers instead of waiting a day for responses from a team that's asleep while you are working."
              />
              <ServiceCard
                light={true}
                title={"Control"}
                icon={<FaCogs />}
                text="You can have absolute control over outsourced professionals on a task-by-task basis or delegate larger projects.
                We are experienced in using all project management and communication tools, and prioritize communication and transparency in our operations. We look to build long-term partnerships with our clients and that is reflected in the way we communicate."
              />
              <ServiceCard
                light={true}
                title={"Flexibility"}
                icon={<FaSmile />}
                text="Add and remove developers to your project as needed without hiring full-time employees and going through the full recruitment process. Of course, our developers can work full-time embedded and integrated within your company as well."
              />
            </div>
          </div>
        </section>
      </main>
    </App>
  );
};

export default OutsourcingPage;
