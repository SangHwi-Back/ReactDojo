import {ReactNode} from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={`bg-gray-50 rounded-2xl h-[400px] flex justify-items-start content-start flex-col m-2`}>
    <div className={`flex ml-2 mr-2 mt-2 justify-between items-center`}>
      <div className="flex-1"/>
      <h2 className={`text-xl m-1 text-center font-bold flex-1`}>테이블</h2>
      <div className="flex-1 flex justify-end">
        <Link href={'/modal/1'}>모달보기</Link>
      </div>
    </div>
    <div className={`p-2 h-fit overflow-auto`}>
      {children}
    </div>
  </div>
}
