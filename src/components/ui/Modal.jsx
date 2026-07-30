import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function Modal({
  open,
  onClose,
  title,
  description,
  children,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-6"
          >
            <div
              className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#050505] p-8 shadow-[0_30px_80px_rgba(0,0,0,.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full p-2 transition hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <h2 className="text-3xl font-bold text-white">
                {title}
              </h2>

              {description && (
                <p className="mt-3 leading-7 text-gray-400">
                  {description}
                </p>
              )}

              <div className="mt-8">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;