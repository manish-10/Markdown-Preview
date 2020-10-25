import React from "react";
import Textbox from './Textbox'
function MarkdownPreview({
  conversionHeading,
  parsedText,
  text,
  updateSourceText,
}) {
  return (
    <React.Fragment>
      <h2 className="text-center m-4" id="title">
        {conversionHeading}
      </h2>
      <div className="row ">
        <Textbox text={text} updateSourceText={updateSourceText} />

        <div className="col-6" id="preview">
          <h2 className="text-center p-2" id="text-area-label">
            See the result:
          </h2>
          <div className="preview rounded">
            <div dangerouslySetInnerHTML={{ __html: parsedText }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MarkdownPreview;
