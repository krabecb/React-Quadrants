
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loader() {
  return (
    <div className="loading">
      <FadeLoader color={"#3b5998"} loading={true} css={override} size={150} />
    </div>
  );
}

export default Loader;