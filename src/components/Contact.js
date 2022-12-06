import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userData] = useState({
    name: isAuthenticated ? user.name : "",
    email: isAuthenticated ? user.email : "",
  });
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111835.4044015685!2d78.69751187713128!3d28.843135359917667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbea2f5646c9%3A0xb8c97ce4e95398db!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1669040936358!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        title="my-google-map"
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mzbwwwpg"
            method="POST"
            className="contact-inputs"
            autoComplete="off"
          >
            <input
              required
              type="text"
              name="username"
              defaultValue={userData.name}
              placeholder="User Name"
            />
            <input
              required
              type="email"
              name="Email"
              placeholder="Email"
              defaultValue={userData.email}
            />

            <textarea
              required
              name="message"
              cols="30"
              rows="7"
              placeholder="Enter your Message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
