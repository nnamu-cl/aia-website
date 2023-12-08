import React from "react";
import Burner from "./images/burner.jpg";
import { Typography, Button } from "antd";

const { Paragraph } = Typography;

const imageContainerStyle = {
  width: "80rem",
  height: "40rem",
  overflow: "hidden",
  borderRadius: "10px", // Add rounded borders
  position: "relative", // Position the additional content within the container
};

const imageStyle = {
  width: "100%",
  display: "block",
  top: "400px",
  borderRadius: "10px", // Add rounded borders to the image
};

const contentStyle = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const buttonStyle = {
  width: "120px",
  height: "40px",
  fontSize: "17px",
};

function MyImage() {
  return (
    <div style={imageContainerStyle}>
      <img alt="Image" src={Burner} style={imageStyle} />
      <div style={contentStyle}>
        <Paragraph style={{ fontSize: "2.5rem" }}>
          A practical and rewarding<br /> introduction to AI
        </Paragraph>
        <Paragraph style={{ fontSize: "1.2rem" }}>
          We have done a lot of work to bring your vectorized dataset closer
          <br /> to your smart Custom GPTs. Take a look.
        </Paragraph>
        <Button type="primary" className="learn-more-button watch-button" style={buttonStyle}>
          Watch
        </Button>
      </div>
    </div>
  );
}

export default MyImage;
