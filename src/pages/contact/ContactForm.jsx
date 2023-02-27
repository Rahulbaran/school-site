import { useReducer } from "react";

const inputsReducer = (inputs, action) => {
  switch (action.type) {
    case "input": {
      return { ...inputs, [action.fieldType]: action.value };
    }
    case "submitted": {
      return {
        fullname: "",
        email: "",
        contact: "",
        comment: ""
      };
    }
  }

  throw Error(`Unknown action: ${action.type}`);
};

export default function ContactForm() {
  const [formInputs, dispatch] = useReducer(inputsReducer, {
    fullname: "",
    email: "",
    contact: "",
    comment: ""
  });

  const handleFormSubmission = e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(
      `fullname: ${formInputs.fullname}, email: ${formInputs.email}, contact: ${formInputs.contact}, comment: ${formInputs.comment}`
    );
    dispatch({ type: "submitted" });
  };

  return (
    <aside className="contact-form-container">
      <h2>Contact Form</h2>

      <form
        className="form"
        autoComplete="off"
        autoCapitalize="off"
        spellCheck="false"
        onSubmit={e => handleFormSubmission(e)}
      >
        <div className="form-group flex flex-col">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="enter your name"
            required
            value={formInputs.fullname}
            onChange={e =>
              dispatch({
                type: "input",
                fieldType: "fullname",
                value: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
            required
            value={formInputs.email}
            onChange={e =>
              dispatch({
                type: "input",
                fieldType: "email",
                value: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="number"
            name="contact"
            id="contact"
            placeholder="enter your mobile number"
            required
            value={formInputs.contact}
            onChange={e =>
              dispatch({
                type: "input",
                fieldType: "contact",
                value: e.currentTarget.value
              })
            }
          />
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="5"
            value={formInputs.comment}
            onChange={e =>
              dispatch({
                type: "input",
                fieldType: "comment",
                value: e.currentTarget.value
              })
            }
          ></textarea>
        </div>

        <button className="btn primary-btn" type="submit">
          Submit
        </button>
      </form>
    </aside>
  );
}
