import { useState } from "react";

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    project: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Your name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Your email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.company.trim()) {
      nextErrors.company = "Your company is required.";
    }

    if (!form.budget) {
      nextErrors.budget = "Select an estimated budget.";
    }

    if (!form.project.trim()) {
      nextErrors.project = "Tell us about your project.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-green-500"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Company
        </label>

        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Inc."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-green-500"
        />

        {errors.company && (
          <p className="mt-2 text-sm text-red-400">
            {errors.company}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-green-500"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Estimated Budget
        </label>

        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-[#0d1117] px-4 py-3 text-white outline-none transition focus:border-green-500"
        >
          <option value="">Select Budget</option>
          <option>$500 - $2,000</option>
          <option>$2,000 - $5,000</option>
          <option>$5,000 - $10,000</option>
          <option>$10,000+</option>
        </select>

        {errors.budget && (
          <p className="mt-2 text-sm text-red-400">
            {errors.budget}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Tell us about your project
        </label>

        <textarea
          rows={5}
          name="project"
          value={form.project}
          onChange={handleChange}
          placeholder="Describe your campaign goals..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-green-500"
        />

        {errors.project && (
          <p className="mt-2 text-sm text-red-400">
            {errors.project}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:bg-green-400"
      >
        Book Strategy Call
      </button>
    </form>
  );
}

export default BookingForm;