import Wpp from "../../../assets/whatsapp-icon.png"
import Email from "../../../assets/envelope.png"
import LinkedIn from "../../../assets/linkedin-icon.png"

export const ListSection = () =>{
    return(
        <section className="sectionlist">
          <div className="contact-left">
            <h2>
              Let's set up a conversation and{" "}
              <span className="purple">develop our creativity</span> together?
            </h2>
            <p>
              Advertise your brand organically within Dribbble's design
              inspiration feed.
            </p>
          </div>
          <ul className="contact-list">
            <li>
              <img src={Wpp} alt="Whatsapp" />
              <h3>My phone</h3>
              <p>
                I'm available for a voice chat, let's about creativity together?
              </p>
              <a href="#">Call Now</a>
            </li>
            <li>
              <img src={Email} alt="Email" />
              <h3>My email</h3>
              <p>
                Send me an email reporting feedbacks, suggestions and ideas
              </p>
              <a href="#">Send email now</a>
            </li>
            <li>
              <img src={LinkedIn} alt="LinkedIn" />
              <h3>My LinkedIn</h3>
              <p>
                We can create more constant interactions as well as a sharing
                network
              </p>
              <a href="#">Go to Telegram Now</a>
            </li>
          </ul>
        </section>

    )
}