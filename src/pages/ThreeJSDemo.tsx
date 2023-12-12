import { useState } from "react";
import { motion } from "framer-motion";

export default function ThreeJSDemo() {
  return (
    <div>
      <motion.div
        style={{
          padding: "40px",
          maxWidth: "max-content",
          border: "2px solid red",
          fontSize: "30px"
        }}
        animate={{ opacity: [0, 1], transition: { duration: 2 } }}
      ></motion.div>
    </div>
  );
}
