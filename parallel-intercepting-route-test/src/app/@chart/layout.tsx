import {ReactNode, Suspense} from "react";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className={`bg-gray-50 rounded-2xl w-[400px] h-[400px] flex justify-items-start content-start flex-col m-2`}>
    <div className={`flex ml-2 mr-2 mt-2 justify-between items-center`}>
      <div className="flex-1"/>
      <h2 className={`text-xl m-1 text-center font-bold flex-1`}>차트</h2>
      <div className="flex-1 flex justify-end">
        <Link href={'/modal/chart'}>
          <Image
            src="/ButtonModal.svg"
            alt="Modal button"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
      </div>
    </div>
    <div className={`p-2 h-full`}>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  </div>
}
