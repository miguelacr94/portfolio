import Wrapper from "../header/wrapper";
import Typography from "../shared/typography";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section style={{ backgroundColor: "#151414", padding: 50 }}>
      <Wrapper>
        <div style={{ width: 500 }}>
          <Typography type="subtitle">Contactar</Typography>
          <div>
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
