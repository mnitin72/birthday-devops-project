import { useState } from "react";
import Confetti from "react-confetti";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function App() {
  const [show, setShow] = useState(false);

  const playMusic = () => {
    const audio = new Audio("/music.mp3");
    audio.play();
    setShow(true);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex flex-col justify-center items-center text-white">

      {show && <Confetti />}

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-6"
      >
        🎂 Happy Birthday 🎂
      </motion.h1>

      <div className="text-2xl mb-8">
        <ReactTyped
          strings={[
            "You are Amazing ❤️",
            "May your day be special 🎉",
            "Keep Smiling Forever 😊"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      <button
        onClick={playMusic}
        className="bg-white text-pink-600 px-8 py-3 rounded-full text-xl font-bold hover:scale-110 transition"
      >
        Click Surprise 🎁
      </button>

      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-3xl"
        >
          ❤️ Have the Best Birthday Ever ❤️
        </motion.div>
      )}
    </div>
  );
}

export default App;
