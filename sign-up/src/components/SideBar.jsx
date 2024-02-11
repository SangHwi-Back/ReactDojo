function SidebarList() {
  return (
    <ul>
      <li>Home</li>
      <li>Signout</li>
      <li>Signin</li>
    </ul>
  );
}

export default function Sidebar({ isOpen, toggleOpen }) {
  return (
    <div
      className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <button className="text-black" onClick={toggleOpen}>
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        {isOpen && <SidebarList />}
      </div>
    </div>
  );
}
