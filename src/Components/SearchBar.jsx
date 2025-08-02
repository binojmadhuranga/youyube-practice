import { CloseIcon } from "./CloseIcon"
import { motion, AnimatePresence } from "motion/react"

function Searchbar({ isOpen, handleClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            y: -50,
            opacity: 0 
          }}
          animate={{ 
            y: 0,
            opacity: 1 
          }}
          exit={{ 
            y: -50,
            opacity: 0 
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 0.3
          }}
          className="fixed left-0 flex w-[100vw] top-5 px-[20px] border-b-black ml-3 z-20 bg-white"
        >
          <motion.input 
            type="text" 
            placeholder="Search" 
            className="w-[90%] outline-none border-b border-gray-300 py-2"
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
            transition={{ delay: 0.1, duration: 0.2 }}
            autoFocus
          />
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <CloseIcon onClick={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Searchbar