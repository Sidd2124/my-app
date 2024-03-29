import React from 'react';
import './Aboutus.css'; // Import CSS file

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Sidd's Hub</h1>
      <p>Welcome to Sidd's Hub, your one-stop destination for all your shopping needs.</p>
      
      <h2 className="section-heading">Our Mission</h2>
      <p>At Sidd's Hub, we are committed to providing our customers with the best shopping experience by offering a wide range of high-quality products, excellent customer service, and competitive prices.</p>
      
      <h2 className="section-heading">Our Story</h2>
      <p>Sidd's Hub was founded in 2023 with the vision of creating a convenient and reliable platform for online shopping. Since then, we have grown to become one of the leading e-commerce websites, serving customers across the globe.</p>
      
      <h2 className="section-heading">Our Values</h2>
      <ul className="value-list">
        <li>Customer Satisfaction: We prioritize the needs and satisfaction of our customers above all else.</li>
        <li>Quality Products: We ensure that all products offered on our platform meet the highest standards of quality and reliability.</li>
        <li>Transparency: We believe in transparency and honesty in all our dealings with customers, partners, and stakeholders.</li>
        <li>Innovation: We continuously strive to innovate and improve our services to better serve our customers.</li>
      </ul>
      
      <h2 className="section-heading">Contact Us</h2>
      <p>If you have any questions, feedback, or inquiries, please feel free to contact us:</p>
      <ul className="contact-list">
        <li>Email: tsiddu805@gmail.com</li>
        <li>Phone: 9347877159</li>
        <li>Address: Near Punchavati Apartments, Pragathi Nagar,Kukatpally,Hyderabad.PinCode:500090</li>
      </ul>
    </div>
  );
};

export default AboutUsPage;
