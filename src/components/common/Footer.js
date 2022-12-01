import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <div className="">
        <div className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>
                Ready to get started <br /> Talk to us today
              </h3>
            </div>
            <div>
              <Button>
                <NavLink to="/contact">Get Started</NavLink>
              </Button>
            </div>
          </div>
        </div>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>The Shopsy</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <input type="text" placeholder="Enter Email" name="Email" id="" />
              <input type="submit" value="subscribe" />
            </div>
            <div className="footer-icons">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <FaFacebookF className="icons" />
                </div>
                <div>
                  <FaTwitter className="icons" />
                </div>
                <div>
                  <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <a className="tel" href="tel:+917078265353">
                +91 7078265353
              </a>
            </div>
          </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <div>
                <p>
                  ©️ {new Date().getFullYear()} The Shopsy All Right Reserved
                </p>
              </div>
              <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 78vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .tel {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
