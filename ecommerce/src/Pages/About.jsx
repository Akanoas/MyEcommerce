import classNames from 'classnames';
import './AboutPage.css';
const About = () => {
    const aboutPageClasses = classNames('about-page', 'modern');
  
    return (
      <div className={aboutPageClasses}>
        <h2>About Us</h2>
        <p>Welcome to our modern e-commerce platform! We are dedicated to providing you with the best shopping experience.</p>
        <p>At our online store, you will find a wide range of high-quality products from various categories, all carefully selected to meet your needs.</p>
        <p>Our team is passionate about delivering exceptional customer service and ensuring your satisfaction. We strive to make your shopping journey seamless, enjoyable, and secure.</p>
        <p>Whether you are looking for the latest fashion trends, cutting-edge electronics, or unique home decor, we  got you covered. Shop with confidence and discover the convenience of online shopping with us.</p>
        <p>Thank you for choosing us as your preferred online shopping destination. Happy shopping!</p>
      </div>
    );
};
  
export default About;