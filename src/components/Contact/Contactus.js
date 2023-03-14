import React from "react";

function Contactus() {
  const initial_state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // const dispatch = useDispatch();
  const [formVal, setFormVal] = React.useState(initial_state);

  const handleChange = (e, fieldName) => {
    setFormVal({
      ...formVal,
      [fieldName]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formVal", formVal);

    // if (
    //   formVal.name === "" ||
    //   formVal.email === "" ||
    //   formVal.phone === "" ||
    //   formVal.message === ""
    // ) {
    //   dispatch(
    //     showToast({
    //       type: "error",
    //       msg: "Fields marked (*) are required.",
    //     })
    //   );
    // } else {
    //   dispatch(
    //     showToast({
    //       type: "success",
    //       msg: "FormSubmitted successfuly.",
    //     })
    //   );
    //   setFormVal(initial_state);
    // }
  };

  return (
    <div className="Contactus">
      <div
        className="contact_banner"
        style={{
          backgroundSize: "cover",
          height: "400px",
          textAlign: "center",
          alignItems: "center",
          backgroundImage: `url(
      "https://www.travelandleisure.com/thmb/iSGDtdvKHv2zyJ3UBZ1mp7KV66E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flight-landing-INBNDCHECK1117-bbcbdbdd91f7480693283cd88393b3ff.jpg"
      
  )`,
          backgroundPosition: "center center",
        }}
      >
        Contact Us
      </div>

      <div className="contact_blocks">
        <div className="contact_blocksnumber">
          <icon></icon>
          <h2>(781) 705-2718</h2>
        </div>
        <div className="contact_blocksnumber">
          <icon></icon>
          <h2>info@flighthubdeal.com</h2>
        </div>
        <div className="contact_blocksnumber">
          <icon></icon>
          <h2>25 Willis St 14 Framingham, MA 01702, USA</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="contact_form">
          <div className="contact_formfield">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formVal.name}
              onChange={(e) => handleChange(e, "name")}
            />
          </div>
          <div className="contact_formfield">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formVal.email}
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
        </div>
        <div className="half">
          <div className="contact_field_half">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formVal.phone}
              onChange={(e) => handleChange(e, "phone")}
            />
          </div>
          <div className="contact_field_half">
            <input
              type="text"
              name="subject"
              value={formVal.subject}
              placeholder="Subject"
              onChange={(e) => handleChange(e, "subject")}
            />
          </div>
        </div>
        <div className="contact_msg_feild">
          <textarea
            name="message"
            placeholder="Message*"
            onChange={(e) => handleChange(e, "message")}
          >
            {formVal.message}
          </textarea>
        </div>
        <div className="field-submit">
          <button onClick={handleSubmit} className="submitbutton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contactus;
