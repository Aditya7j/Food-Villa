import "../css/contact.css";

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-description">
                    Have questions or want to work together? Fill out the form below and we’ll get back to you as soon as possible.
                </p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your message..." rows="5" required></textarea>
                    </div>
                    <button type="submit" className="contact-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;