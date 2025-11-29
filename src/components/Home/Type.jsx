import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'MERN Stack <span style="color:white">Developer</span>',
          '<span style="color:white">Video-</span>Editor',
           'Throttle-<span style="color:white">Hodhophile</span>',
          '<span style="color:white">Freelance-</span>Work',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        html: true, // Important: enable HTML rendering
      }}
    />
  );
}

export default Type;
