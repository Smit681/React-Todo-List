import React from "react";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

const footerStyle: {} = {
  width: "100%",
  "text-align": "center",
  padding: "10px 0",
  "background-color": "#333",
  color: "white",
  position: "fixed",
  bottom: 0,
  left: 0,
};
