import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt flex justify-center items-center text-3xl"
        options={{ max: 25 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner"> FaceFind </div>
      </Tilt>
    </div>
  );
};

export default Logo;
