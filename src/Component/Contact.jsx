import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Styles/contact.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

function Contact() {
  const [status, setStatus] = useState(null); // { ok: boolean, text: string }

  const sendEmail = async (values, { setSubmitting, resetForm }) => {
    setStatus(null);

    // Honeypot: real visitors never fill this hidden field, bots do
    if (values.website) {
      setStatus({ ok: true, text: "Message sent. I'll reply by email." });
      resetForm();
      setSubmitting(false);
      return;
    }

    try {
      const { name, email, message } = values;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus({ ok: true, text: "Message sent. I'll reply by email." });
      resetForm();
    } catch (error) {
      console.error(error);
      setStatus({
        ok: false,
        text: "Couldn't send that. Email me directly at alabiolumide38@gmail.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pf-section contact">
      <div className="wrap">
        <p className="mono rv">Contact</p>
        <h2 className="rv">Have a project? Let's <em>talk</em>.</h2>
        <a className="mail rv" href="mailto:alabiolumide38@gmail.com">alabiolumide38@gmail.com</a>
        <p className="contact-note rv">Open to freelance projects, collaborations and remote roles.</p>

        <Formik
          initialValues={{ name: "", email: "", message: "", website: "" }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="contact-form rv" noValidate>
              <div className="contact-field">
                <Field type="text" name="name" placeholder="Your name" aria-label="Name" />
                <ErrorMessage name="name" component="div" className="contact-error" />
              </div>

              <div className="contact-field">
                <Field type="email" name="email" placeholder="Your email" aria-label="Email" />
                <ErrorMessage name="email" component="div" className="contact-error" />
              </div>

              <div className="contact-field">
                <Field as="textarea" name="message" rows="4" placeholder="What do you need built?" aria-label="Message" />
                <ErrorMessage name="message" component="div" className="contact-error" />
              </div>

              {/* honeypot */}
              <Field type="text" name="website" tabIndex="-1" autoComplete="off" className="contact-hp" aria-hidden="true" />

              <button type="submit" className="pf-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              {status && (
                <p role="status" className={status.ok ? "contact-ok" : "contact-error"}>
                  {status.text}
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Contact;
