import SidePanel from "./SidePanel";
import Main from "./Main";
import {useContext, useState} from "react";
import InputField from "./InputField";
import {LoginContext} from '../store/LoginContextProvider'
import LoginArea from "./LoginArea";

const CONTENTS = [
  {'title': 'testTitle', 'contents': '내용입니다', 'writer': '작성자임'},
  {'title': 'testTitle', 'contents': '내용입니다', 'writer': '작성자임'},
  {'title': 'testTitle', 'contents': '내용입니다', 'writer': '작성자임'}
];

export default function MainContents() {
  const {isLogin} = useContext(LoginContext);
  const [list, setList] = useState(CONTENTS);

  function addList(title, contents, writer) {
    setList(prevState => {
      const result = [...prevState, {'title': title, 'contents': contents, 'writer': writer}];
      console.log(result);
      return result;
    });
  }

  return <>
    <main className={'w-screen flex px-[20px] justify-start'}>
      <SidePanel isEmpty={list.length === 0}/>
      {isLogin
        ? <><Main list={list}/><InputField addList={addList}/></>
        : <LoginArea/>}
    </main>
  </>
}