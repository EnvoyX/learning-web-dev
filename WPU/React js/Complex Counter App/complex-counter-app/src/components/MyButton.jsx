/* eslint-disable react/prop-types */
function MyButton({ text, counter, onClick }) {
  const myStyle =
    text !== "Reset!" ? { margin: 10 } : { margin: 20, display: "block" };
  const disabled =
    text !== "Reset!"
      ? counter > 9 || counter < 0
        ? true
        : false
      : counter > 9 || counter < 0
      ? false
      : true;

  return (
    <button style={myStyle} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default MyButton;
