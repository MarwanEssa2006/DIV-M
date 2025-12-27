import { useState } from "react";

export default function JoinDivMForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxAHdNZ_9MnvhfzWqvZwyfRdN110PpcIZUBed1QnrlZ5MK6KyJ-d_Yx0K6umaYOhWc/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form),
        }
      );

      // Assume success (required for no-cors)
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="join-hydra"
      className="relative bg-[#2E2B44] text-white py-32"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-12 rounded-[40px]
                   bg-gradient-to-br from-[#2E2B44] to-[#1F1D2E]"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          CONTACT DIV-M
        </h2>

        <p className="text-center mb-10 text-[#C9C6E3]">
          Let’s build your next digital solution
        </p>

        {/* INPUTS */}
        <div className="grid md:grid-cols-2 gap-6">
          <Input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
          <Input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
        </div>

        {/* SERVICES DROPDOWN */}
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full mt-6 p-4 rounded-full
                     bg-[#1F1D2E]
                     border border-white/40
                     text-white
                     focus:outline-none
                     appearance-none"
        >
          <option value="" disabled>
            Select a Service
          </option>
          <option value="Software Development">Software Development</option>
          <option value="Web Applications">Web Applications</option>
          <option value="Mobile Applications">Mobile Applications</option>
          <option value="Data & Analytics">Data & Analytics</option>
        </select>

        <Input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-6"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full mt-6 p-4 rounded-2xl
                     bg-transparent
                     border border-white/40
                     focus:outline-none"
        />

        <button
          disabled={loading}
          className="mt-10 block mx-auto px-10 py-3 rounded-full
                     bg-[#8B7CFF]
                     text-[#2E2B44]
                     font-semibold
                     hover:scale-105 transition
                     disabled:opacity-50"
        >
          {loading ? "Sending..." : "SEND MESSAGE"}
        </button>

        {success && (
          <p className="text-center mt-4 text-green-400">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

/* INPUT */
function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      required
      className={`w-full p-4 rounded-full
                  bg-transparent
                  border border-white/40
                  focus:outline-none ${className}`}
    />
  );
}
