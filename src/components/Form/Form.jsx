import "./Form.scss";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import pencilIcon from "../../assets/icons/pencil.svg";

function Form() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();
    const input = {
      prompt: promptInput,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(input),
      }
    );
    const data = await response.json();

    setResult([
      ...result,
      {
        promptInput,
        response: data.choices[0].text,
      },
    ]);
    setPromptInput("");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__title">Fun with AI</h1>
      <div className="form__contents">
        <h2 className="form__subtitle">Enter prompt</h2>
        <div className="form__field">
          <input
            type="text"
            name="prompt"
            placeholder="Enter a New Prompt Here ..."
            className="form__message"
            autoFocus
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            required
          />
          <img className="form__icon" src={pencilIcon} alt="pencil icon" />
        </div>

        <div className="form__submit">
          <button type="submit" className="form__btn">
            Submit
          </button>
        </div>
      </div>
      <div className="form__responses">
        <h2 className="form__subtitle">Responses will show up here</h2>
        <ul className="form__list">
          {result.map((res) => (
            <li className="form__item" key={uuid}>
              <div className="form__header">
                <p className="form__subheader">Prompt:</p>
                <p className="form__subheader">Response:</p>
              </div>

              <div className="form__response">
                <p className="form__text">{res.promptInput}</p>
                <p className="form__text">{res.response}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Form;
