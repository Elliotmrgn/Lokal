import React from "react";

function Footer() {
    return (
      <footer 
      style ={{
          backgroundColor:"#5B9098",
          color: "white",
          padding: "30px",
          textAlign: "center",
          bottom: "0",
          left: "0",
          width: "100%",
          // display: "block",
          // position: "fixed",
          // marginTop: "20px",
          flexShrink: "0"
        }}
        > 
      &copy; {new Date().getFullYear()} Copyright
      </footer>
    );
  }
  
  export default Footer