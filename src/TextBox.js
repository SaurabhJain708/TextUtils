import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextBox(props) {
  const [text, settext] = useState("Enter text here");
  const change = (event) => {
    setTimeout(() => {
      if(text==="Enter text here"){
      settext(event.target.value.slice(15))
      }
    },2);
    setTimeout(() => {
      settext(event.target.value)
    }, 4);
     settext(event.target.value)
  };

  const clicked =()=>{
    settext(text.toUpperCase());
    props.alertmsg("Success","Text has been capitalized")
  }

  const clickedlower = ()=>{
    settext(text.toLowerCase())
    props.alertmsg("Success","Text converted to lowercase")
  }

  const clickedclear = ()=>{
    settext("Enter text here")
  }

  const clickedcopy =()=>{
    navigator.clipboard.writeText(text)
    .then(()=>{
      props.alertmsg("Success","Text Copied")
    }).catch(()=>{
      alert("Failed to copy")
    })
  }

  const clickedspace = () => {
    settext(text.replace(/\s+/g, ' '));
  };

  return (
    <div className="container mt-5" style={props.headingcolor}>
      <h1 className="mb-5">{props.heading}</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "400px" }}
          value={text}
          onChange={change}
        ></textarea>
      </div>
      <div className="flex mt-3">
      <button type="button" class="btn btn-primary m-2" onClick={clicked}>Convert to Uppercase</button>
      <button type="button" class="btn btn-primary m-2" onClick={clickedlower}>Convert to Lowercase</button>
      <button type="button" class="btn btn-primary m-2" onClick={clickedclear}>Clear Text</button>
      <button type="button" class="btn btn-primary m-2" onClick={clickedcopy}>Copy</button>
      <button type="button" class="btn btn-primary m-2" onClick={clickedspace}>Remove Extra Spaces</button>
      </div>
      <div className="mt-3">
        <p>{text===""?"0":text.trim().split(" ").length} words {text.trim().length} characters </p>
        <p> {0.02*(text.trim().length)} Minutes </p>
      </div>
    </div>
  );
}

TextBox.propTypes = {
  heading: PropTypes.string,
  alertmsg: PropTypes.func
};

TextBox.defaultProps = {
  heading: "Add heading here",
};
