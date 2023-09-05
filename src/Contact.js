import styled from "styled-components";

const Contact = () => {
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

  return (
    <Wrapper>
    <h2 className="common-heading"> Contact Page </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.7487471492964!2d81.70201839062713!3d25.93254756857497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aef0185166d3b%3A0xa00115c32598e93d!2sPawan%20kirana%20store!5e0!3m2!1sen!2sin!4v1674770143313!5m2!1sen!2sin" width="90%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xeqweoll" method="post" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
          <textarea name="Message" id="" cols="30" rows="10" required autoComplete="off" placeholder="Enter your Message"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
    </Wrapper>
  );
};

export default Contact;
