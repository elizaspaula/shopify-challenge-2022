import "./ResponseCard.scss";

export default function ResponseCard(props) {
  return (
    <div className="response">
      <h1 className="response__title">Responses</h1>
      <div className="response__prompt">
        <h3 className="response__subheader">Prompt:</h3>
        <p className="response__content">{prompt}</p>
      </div>
      <div className="response__responses">
        <h3 className="response__header"> Response:</h3>
        <p className="response__content">example response</p>
      </div>
    </div>
  );
}
