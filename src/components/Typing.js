import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const ReactTyping = () => {
  return (
    <>
    <h1>
      <ReactTypingEffect
        text={["Hello there✋", "I'm Kanae Fukushima."]}
        speed={[100]}
        eraseSpeed={[200]}
        eraseDelay={[1200]}
        typingDelay={[500]}
        staticText={[String]}
        />
    </h1>
    </>
  );
};

export default ReactTyping;