import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../utils/useFollowPointer";

const Cursor = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div
          ref={ref}
          className="light-cursor"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 5,
            stiffness: 10,
            restDelta: 0.001
          }}
        />
      );
}

export default Cursor;