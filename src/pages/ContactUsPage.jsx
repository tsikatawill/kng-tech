import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import App from "../App";

const ContactUsPage = () => {
  document.title = "KNG Tech | Contact us";
  return (
    <App>
      <header className="about-header h-[300px]">
        <div className="container flex flex-col items-center justify-center h-full  text-white text-center">
          <h1 className="text-2xl sm:text-5xl font-bold  uppercase mb-2">
            Contact us
          </h1>
          <p className="text-lg sm:text-2xl  max-w-2xl">Get in touch</p>
        </div>
      </header>
      <main className="">
        <div className="container flex flex-col md:flex-row gap-10 py-20">
          <div className="form-wrapper">
            <form className="contact-form border items-center mx-auto border-blue-500 rounded-md p-5 hover:shadow-md sm:w-[500px] md:w-[600px]">
              <h2 className="text-3xl font-semibold text-center">Let's Talk</h2>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Full name" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@email.com"
                />
              </div>
              <div className="input-group">
                <label htmlFor="number">Phone number</label>
                <input type="tel" id="number" placeholder="xxx xxx xx xx" />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input type="tel" id="subject" placeholder="Title of message" />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  type="tel"
                  id="message"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <button className="btn w-full bg-blue-500 text-white">
                Send message
              </button>
            </form>
          </div>
          <div className="sm:max-w-xl w-full">
            <article className="questions mb-10">
              <h2 className="text-2xl font-semibold mb-5 text-center sm:text-left">
                Questions and Comments
              </h2>
              <p className="text-justify">
                We know that our clients have unique needs and circustances.
                Tell us more about your projects(s), questions or comments and
                our active stand-by customer support service will get back to
                you shortly.
              </p>
            </article>
            <article className="contact-details">
              <h2 className="text-2xl font-semibold mb-5 text-center sm:text-left">
                Contact Details
              </h2>
              <article className="mb-10">
                <p className="font-semibold mb-3">United States </p>
                <div className="detail-elements flex flex-col gap-3">
                  <div className="location flex items-center gap-3">
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <span>Brooklyn, New York, NY</span>
                  </div>
                  <div className="phone-number flex items-center gap-3">
                    <div className="icon">
                      <FaPhoneAlt />
                    </div>
                    <a href="tel:+1631248196">+1 631 248 196</a>
                  </div>
                  <div className="email flex items-center gap-3">
                    <div className="icon">
                      <FaEnvelope />
                    </div>
                    <a href="mailto:info@kngtechnologies.com">
                      info@kngtechnologies.com
                    </a>
                  </div>
                </div>
              </article>
              <article>
                <p className="font-semibold mb-3">Ghana </p>
                <div className="detail-elements flex flex-col gap-3">
                  <div className="location flex items-center gap-3">
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <span>Kai Fio Loop, Nmai Dzon, Accra</span>
                  </div>
                  <div className="phone-number flex items-center gap-3">
                    <div className="icon">
                      <FaPhoneAlt />
                    </div>
                    <a href="tel:+233556258009">+233 556 258 009</a>
                  </div>
                  <div className="email flex items-center gap-3">
                    <div className="icon">
                      <FaEnvelope />
                    </div>
                    <a href="mailto:info@kngtechnologies.com">
                      info@kngtechnologies.com
                    </a>
                  </div>
                </div>
              </article>
            </article>
          </div>
        </div>
        <section className="map mb-10 text-white">
          <div className="container">
            <div className="mapouter relative text-right bg-red-400 h-96">
              <div className="gmap_canvas">
                <iframe
                  className="w-full h-96"
                  id="gmap_canvas"
                  title="gmap_canvas"
                  src="https://maps.google.com/maps?q=Airport-West,%20No.%2078%20Osu%20Badu%20St,%20Accra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </section>
      </main>
    </App>
  );
};

export default ContactUsPage;
