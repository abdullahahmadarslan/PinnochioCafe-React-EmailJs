import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#4D2B1E', color: 'white', padding: '40px 0' }}>
            <div className="container">
                {/* <div className="row">
                    <div className="col-md-3">
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to providing the best service to our customers, ensuring a seamless experience every time.
                        </p>
                    </div>

                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a></li>
                            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-phone"></i> +123 456 7890</li>
                            <li><i className="fas fa-envelope"></i> info@example.com</li>
                            <li><i className="fas fa-map-marker-alt"></i> 123, Street Name, City</li>
                        </ul>
                    </div>
                </div>
                <hr style={{ borderTop: '1px solid white' }} /> */}
                <div className="text-center">
                    <p style={{ fontSize: "1.5rem" }}>&copy; 2024 Pinnochio Cafe. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
