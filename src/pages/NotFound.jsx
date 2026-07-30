import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-8xl font-black text-green-400">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-lg text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-10 inline-flex rounded-xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:bg-green-400"
        >
          Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;