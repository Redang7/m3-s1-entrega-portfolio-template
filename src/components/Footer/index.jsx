import LinkedIn from "../../assets/linkedin-icon.png"
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/facebook.png"

export const Footer = () =>{
    return(
         <footer>
        <section className="footer-section">
          <h2>Thank you!</h2>
          <p>Follow me on my social networks and let's talk</p>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </section>
      </footer>
    )
}