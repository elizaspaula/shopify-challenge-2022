import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <h1 className="form__title">Fun with AI</h1>
      <div className="form__contents">
        <p className="form__prompt">Enter prompt</p>
        <textarea
          id="message"
          name="prompt"
          placeholder="Add new prompt"
          className="form__message"
          autoFocus
          required="required"
        ></textarea>
      </div>
      <div className="form__button">
        <button className="form__submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
