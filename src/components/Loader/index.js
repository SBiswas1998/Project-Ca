import React from "react";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.css";

const Loading = () => {
  return (
    <>
      <div style={{ height: "100vh", background: "#fff" }}>
        {/* <Loader size="lg" inverse center content="Loading..."/> */}
        <div class="patterns">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="polka-dots"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle fill="#0C0649" cx="25" cy="25" r="3"></circle>
              </pattern>
              <style></style>
            </defs>

            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#polka-dots)"
            >
              {" "}
            </rect>

            <text x="50%" y="50%" text-anchor="middle">
               Welcome To Purminder <br/>
                Kaur & Associates
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Loading;
