export default function Header({onClick}) {
  return (
    <div className="flex h-200px m-7">
      <button className="rounded-full bg-blue-50 p-2 mr-2 ml-2" onClick={onClick}>{'<'}</button>
      <p>Header</p>
    </div>
  );
}