const Footer = (props) => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-icon-and-copyright-wrapper">
        <div className="footer-icon-wrapper">
          <div className="footer-icon">
            <span className="fa fa-facebook"></span>
          </div>
          <div className="footer-icon">
            <span className="fa fa-twitter"></span>
          </div>
          <div className="footer-icon">
            <span className="fa fa-instagram"></span>
          </div>
          <div className="footer-icon">
            <span className="fa fa-linkedin"></span>
          </div>
        </div>
        <p className="footer-copyright">
          copyright &copy; {new Date().getFullYear()} all rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
