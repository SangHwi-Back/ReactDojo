import THEAD from "./THEAD";
import TBODY from "./TBODY";

export default function Main({list}) {
  return (
    <article className={'w-4/5 p-[20px] bg-white shadow-lg'}>
      <h2>첫 번째 포스트</h2>
      <p>이곳에 내용을 작성하세요.</p>
      <table>
        <THEAD/>
        <TBODY list={list}/>
      </table>
    </article>
  )
}