import {ReactNode} from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={`bg-gray-50 rounded-2xl h-[400px] flex justify-items-start content-start flex-col m-2`}>
    <h2 className={`text-xl m-1 text-center font-bold`}>테이블</h2>
    <div className={`p-2 h-fit overflow-auto`}>
      {children}
    </div>
  </div>
}
