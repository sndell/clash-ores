import { motion } from "motion/react";

interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

export const Modal = ({ children, close }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      onMouseDown={close}
      className="grid fixed inset-0 place-items-center bg-primary"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.1 }}
        onMouseDown={(e) => e.stopPropagation()}
        className="mx-2 rounded-xl border backdrop-blur-xl bg-primary border-primary"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
