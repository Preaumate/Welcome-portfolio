import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactForm.css";

function ContactForm() {
  // Form field status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Error states for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  //const [isSuccess, setIsSuccess] = useState(false)
  //const [isError, setIsError] = useState(false)

  // ** Code added for validation and error checking
  // Character count for message length
  const maxMessageLength = 500;

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate individual fields and set error messages
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!validateEmail(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.length > maxMessageLength) {
          error = `Message must be less than ${maxMessageLength} characters`;
        }
        break;

      default:
        break;
    }

    return error;
  };
  // ** End Code added for validation and error checking

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate and update errors
    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    // Clear submit status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  // Validate all fields before submission
  const validateForm = () => {
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);

    // Return true if no errors
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page preload

    // // Basic validation
    // if (!formData.name || !formData.email || !formData.message) {
    //     alert('Please fill in all fields before submitting.')
    //     // setSubmitStatus('error')
    //     return

    // Validate form before submission
    if (!validateForm()) {
      //setSubmitStatus('error')
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_f7sb4ff", // service_0ao87sq
        "template_380uvq9", // template_380uvq9
        //formData, 'user_3Xo2n6z5y7a8b9c0d')
        {
          from_name: formData.name, //from_email: formData.email, message: formData.message},
          reply_to: formData.email, //message: formData.message},
          message: formData.message,
        },
        "wIXxCpnLMdvOcoQPx", // wIXxCpnLMdvOcoQPx
      );

      // Success!
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Character count for message input
  const messageLength = formData.message.length
  const isMessageTooLong = messageLength > maxMessageLength

  return (
    <div className="contact-form-container">
      <h2>Get in touch, Contact Us</h2>
      <p className="contact-subtitle">
        Whether you have questions, feedback, or just want to say hi, we'd love
        to hear from you! Fill out the form below and we'll get back to you as
        soon as possible.
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
            className={errors.name ? "input-error" : ""}
            //required
          />
          {errors.name && (
            <span className="error-message">{errors.name}</span>
          )}
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
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}          
        </div>

        {/* Message Input *With character count* */}
        <div className="form-group">
          <div className="label-with-counter">
            <label htmlFor="message">Your Message</label>
            <span className={`char-counter ${isMessageTooLong ? "error" : ""}`}>
              {messageLength}/{maxMessageLength}
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows="5"
            disabled={isSubmitting}
            className={errors.message ? "input-error" : ""}
            maxLength={maxMessageLength + 50}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="status-message success">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="status-message error">
            ❌ Oops! Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
