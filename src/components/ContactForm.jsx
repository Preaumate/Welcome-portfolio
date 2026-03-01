import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contactForm.css'

function ContactForm() {
    // Form field status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    // Status states
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
    //const [isSuccess, setIsSuccess] = useState(false)
    //const [isError, setIsError] = useState(false)

    // Handle form field changes

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }   

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent page preload

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields before submitting.')
            // setSubmitStatus('error')
            return
        }
        setIsSubmitting(true)
        setSubmitStatus(null)
        
        
        try {
            // Send email using EmailJS
            await emailjs.send(
                'service_f7sb4ff', // service_0ao87sq
                'template_380uvq9', // template_380uvq9
                //formData, 'user_3Xo2n6z5y7a8b9c0d')
                {
                    from_name: formData.name, //from_email: formData.email, message: formData.message},
                    reply_to: formData.email, //message: formData.message},
                    message: formData.message
                },
                'wIXxCpnLMdvOcoQPx' // wIXxCpnLMdvOcoQPx
            )

            // Success!
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' }) // Clear form
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="contact-form-container">
            <h2>Get in touch, Contact Us</h2>
            <p className='contact-subtitle'>
                Whether you have questions, feedback, or just want to say hi, we'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.            
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
                {/*Name input*/}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={isSubmitting}
                        //required
                    />
                </div>

                {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="5"
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="status-message success">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="status-message error">
            ❌ Oops! Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm