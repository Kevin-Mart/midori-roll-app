export default function Button({ text, type = "button", className, Onclick }) {
  return (
    <button
      Onclick={Onclick}
      type={type}
      className={`px-4 py-2 bg-slate-900ate-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      {text}
    </button>
  );
}
