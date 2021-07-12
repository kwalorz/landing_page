export default function Layout(props) {
  return (
    <div id="wrapper">
      {/* Header */}
      <header id="header" className="alt">
        <a href="index.html" className="logo">
          <strong>Next JS Website Conversion</strong>
        </a>
      </header>
      {/* Menu */}
      <nav id="menu">
        <ul className="links">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="landing.html">Landing</a>
          </li>
          <li>
            <a href="generic.html">Generic</a>
          </li>
          <li>
            <a href="elements.html">Elements</a>
          </li>
        </ul>
        <ul className="actions stacked">
          <li>
            <a href="#" className="button primary fit">
              Get Started
            </a>
          </li>
          <li>
            <a href="#" className="button fit">
              Log In
            </a>
          </li>
        </ul>
      </nav>
      {props.children}
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    defaultValue={""}
                  />
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="primary"
                  />
                </li>
                <li>
                  <input type="reset" defaultValue="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-envelope" />
                <h3>Email</h3>
                <a href="#">kmwalorz@gmail.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-phone" />
                <h3>Phone</h3>
                <span>(781) 985-4659</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-home" />
                <h3>Address</h3>
                <span>
                  555 Boston Rd
                  <br />
                  Boston, MA 02021
                  <br />
                  United States of America
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
      {/* Footer */}
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://github.com/kwalorz/landing_page"
                target="_blank"
                rel="noopener"
                alt="github_profile"
                className="icon brands alt fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kevin-walorz-1441b4b6/"
                target="_blank"
                rel="noopener"
                alt="linkedIn_profile"
                className="icon brands alt fa-linkedin-in"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>
              Design/Inspiration: <a href="https://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
