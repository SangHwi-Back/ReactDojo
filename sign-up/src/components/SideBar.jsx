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
  const sideBarClasses = `${isOpen && 'p-4'} left-0 bg-white h-full overflow-auto ease-in-out duration-300 ${
    !isOpen && "-left-64"
  }`;

  return (
    <div className={sideBarClasses}>
      {isOpen && <SidebarList />}
    </div>
  );
}
