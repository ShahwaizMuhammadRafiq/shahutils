import React from "react";

export default function About(props) {

  let myStyle = { 
    color:props.mode ==='dark' ?'white':'#042743',
    backgroundColor: props.mode === 'dark' ?'#10213d':'white'
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About US</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>ShahUtils - The Ultimate Text Analyzer</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                ShahUtils is a free-to-use, browser-compatible text analyzer
                tool
              </strong>{" "}
              that helps you process and understand your text better. Whether
              you need to count words, evaluate sentence structure, or simply
              refine your content, ShahUtils provides a seamless solution for
              all your text analysis needs. The tool is designed for users who
              want efficient text analysis without the hassle of complex
              software.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Key Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>ShahUtils</strong> offers a range of features including
              word count, character count, sentence evaluation, and readability
              checks. This makes it an ideal tool for writers, editors,
              students, and professionals alike. With a user-friendly interface,
              analyzing large volumes of text becomes quick and straightforward.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>How to Use</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Simply input your text into the designated box on the ShahUtils
              website, and the tool will instantly provide an analysis. No
              downloads, no installations—just direct access via any browser.
              It's fast, reliable, and perfect for those on the go.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
