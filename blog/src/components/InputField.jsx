import {useState} from "react";

export default function InputField({addList}) {
  const [title, setTitle] = useState('title');
  const [contents, setContents] = useState('contents');
  const [writer, setWriter] = useState('writer');

  return (
    <div>
      <p>작성하기</p>
      <div>
        <div className={'flex-auto'}>
          <p>제목</p>
          <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
        </div>
        <div className={'flex-auto'}>
          <p>내용</p>
          <textarea name="" id="" cols="30" rows="3" onChange={e => setContents(e.target.value)} value={contents}/>
        </div>
        <div className={'flex-auto'}>
          <p>작성자</p>
          <input type="text" onChange={e => setWriter(e.target.value)} value={writer}/>
        </div>
      </div>
      <button onClick={() => {
        addList(title, contents, writer)
      }}>제출
      </button>
    </div>
  );
}