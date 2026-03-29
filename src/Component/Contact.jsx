import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "../Styles/contact.css";

const validationSchema = Yup.object({
  user_name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function Contact() {
  const form = useRef();

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          resetForm();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section d-flex align-items-center">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2>Contact Me</h2>
          <p>Let’s Work Together.</p>
          <p>Have a project in mind or just want to say hi? Send me a message and I'll get back to you soon!</p>
        </motion.div>

        <div className="row">

          {/* LEFT INFO */}
          <div className="col-md-5 mb-4">
            <div className="contact-info">

              <div className="info-item">
                <Mail size={20} />
                <span>alabiolumide38@gmail.com</span>
              </div>

              <div className="info-item">
                <Phone size={20} />
                <span>+234 816 805 3286</span>
              </div>

              <p className="mt-4">
                Available for freelance projects, collaborations, and remote work.
              </p>

            </div>
          </div>

          {/* FORM */}
          <div className="col-md-7">
            <Formik
              initialValues={{ user_name: "", user_email: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={sendEmail}
            >
              {({ isSubmitting }) => (
                <Form ref={form} className="contact-form">

                  <div className="form-group">
                    <Field
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    <ErrorMessage name="user_name" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="form-control"
                    />
                    <ErrorMessage name="user_email" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      className="form-control"
                    />
                    <ErrorMessage name="message" component="div" className="error-message" />
                  </div>

                  <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                    <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                </Form>
              )}
            </Formik>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;