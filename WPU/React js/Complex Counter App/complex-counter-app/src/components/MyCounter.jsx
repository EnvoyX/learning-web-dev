/* eslint-disable react/prop-types */
function MyCounter({ counter }) {
  if (counter > 9 || counter < 0) {
    counter = "Limit reached!";
  }
  return <span style={{ margin: "20" }}>{counter}</span>;
}

export default MyCounter;
