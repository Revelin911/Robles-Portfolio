import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: 'Evelin Robles',
        email: 'revelin911@gmail.com',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate submission
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');

        // Reset message field
        setFormData((prev) => ({
            ...prev,
            message: '',
        }));
    };

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Message:
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                    />
                </label>

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
