import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function SuccessMessage({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center py-8 text-center"
    >
      <div className="mb-6 rounded-full bg-green-500/15 p-5">
        <CheckCircle2
          size={64}
          className="text-green-400"
        />
      </div>

      <h3 className="text-3xl font-bold text-white">
        Thank You!
      </h3>

      <p className="mt-4 max-w-md leading-7 text-gray-400">
        Your discovery call request has been received successfully.
        Our team will review your information and contact you within
        24 hours.
      </p>

      <button
        onClick={onClose}
        className="mt-8 rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Close
      </button>
    </motion.div>
  );
}

export default SuccessMessage;