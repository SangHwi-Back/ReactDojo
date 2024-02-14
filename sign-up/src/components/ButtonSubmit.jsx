import React from "react";

export default function ButtonSubmit({ email, password, handleSubmit, children }) {
  const baseClasses =
    "px-4 py-2 rounded-md text-white transition-colors duration-200";
  const enabledClasses =
    "bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";
  const disabledClasses = "bg-gray-500 cursor-not-allowed";
  const isEnabled = email !== '' && password !== '';

  return (
    <button
      onClick={(e) => handleSubmit(e, email, password)}
      disabled={!isEnabled}
      className={`${baseClasses} ${
        isEnabled ? enabledClasses : disabledClasses
      }`}
    >
      {children}
    </button>
  );
};
