import React, { useEffect, useState } from "react";

const Loading = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000); // Adjust the delay time as needed (2000ms = 2 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ height: "100vh", background: "#fff" }}>
        <div class="patterns">
          <svg width="100%" height="100%">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#polka-dots)"
            >
              {" "}
            </rect>
            <text x="50%" y="40%" text-anchor="middle">
              {" "}
              Welcome To{" "}
            </text>
            {showText && (
              <>
                <text x="50%" y="55%" text-anchor="middle">
                  Purminder Kaur & Associates
                </text>
              </>
            )}
          </svg>
        </div>
      </div>
    </>
  );
};

export default Loading;
