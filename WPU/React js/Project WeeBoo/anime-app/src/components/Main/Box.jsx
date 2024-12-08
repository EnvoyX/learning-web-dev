import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {/* Short-Circuit evaluation */}
      {/* The logical AND expression is a short-circuit operator. 
      As each operand is converted to a boolean, 
      if the result of one conversion is found to be false,
      the AND operator stops and returns the original value of that falsy operand; 
       it does not evaluate any of the remaining operands.  */}
      {isOpen && children}
    </div>
  );
}

export default Box;
