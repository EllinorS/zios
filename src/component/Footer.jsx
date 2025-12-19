import { NavLink } from "react-router-dom"

const Footer = () => {
  return (

<>
<footer className="footer has-background-info-dark has-text-white clipt">
  <div className="columns  pt-6">
    <div className="column">

      <h4 className="bd-footer-title 
                 has-text-weight-medium
                 has-text-left">
        ZIOS
      </h4>

      <p className="bd-footer-link 
                has-text-left">
        ZIOS is a web portal for 
        people who want to learn about
        Technology.
      </p>

    </div>

    <div className="column">
      <h4 className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify">
        Explore
      </h4>

      <p className="bd-footer-link">
         <a href="https://">
          <span className="icon-text">
            <span>Practice</span>
          </span>
         </a>
          <br />
          <a href="https://">
              <span className="icon-text">
                <span>link 2</span>
              </span>
            </a>
          <br />
          <a href="https://">
              <span className="icon-text">
                <span>Careers</span>
              </span>
          </a>
      </p>

    </div>

    <div className="column">
      <h4 className="bd-footer-title
                 has-text-weight-medium
                 has-text-justify">
        Contact us
      </h4>

      <p className="bd-footer-link">
          <a href="https://">
              <span className="icon-text">
                <span>Email</span>
              </span>
            </a>
          <br />
          <a href="https://">
              <span className="icon-text">
                <span>Call Us</span>
              </span>
            </a>
          <br />
          <a href="https://">
              <span className="icon-text">
                <span>Chat with us!</span>
              </span>
            </a>
      </p>

    </div>
  </div>
</footer>
</>



  )
}

export default Footer
