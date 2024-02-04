function SidePanel({isEmpty}) {
  return <>
    <aside className={'w-3/10 bg-[#333] text-white p-[20px] shadow-lg'}>
      <h2>사이드 패널</h2>
      {isEmpty && <p>사이드 패널 내용을 작성하세요.</p>}
    </aside>
  </>
}

export default SidePanel;