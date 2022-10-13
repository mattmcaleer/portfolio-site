import Back from "./Back";

function Contact() {
  return (
  <div className="section-container">
    <Back/>
    <div className="contact-links">
    <li>
      <a href="https://github.com/mattmcaleer" target="_blank" className="ext-link">GitHub</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/matthew-mcaleer/" target="_blank" className="ext-link">LinkedIn</a>
    </li>
    <li>
      <a href="mailto:mattmcaleer3@gmail.com" className="ext-link">Email</a>
    </li>
    </div>
  </div>
  )
}

export default Contact;