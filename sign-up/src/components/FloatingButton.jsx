export default function FloatingButtoin({onClick, children}) {
  return (
    <div>
      <button className="
      fixed top-4 right-4 
      p-2 
      text-white bg-blue-100 rounded-full shadow-lg"
      onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}