export default function Header({isOpen, toggleSideBarOpen}) {
  const headerClass = "flex h-200px m-7";
  const headerButtonClass = "rounded-full bg-blue-50 p-2 mr-2 ml-2 flex-none align-middle";
  return (
    <div className={headerClass}>
      <button 
        className={headerButtonClass} 
        onClick={() => toggleSideBarOpen(!isOpen)}
      >
        {isOpen ? "<" : ">"}
      </button>
      <div className="my-auto">Header</div>
    </div>
  );
}