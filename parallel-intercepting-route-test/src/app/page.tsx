import { ReactNode } from "react";

export default function Home() {
  const Area = ({children}: { children: ReactNode }) => {
    return <div className={`bg-gray-50 rounded-2xl h-fit w-full flex justify-items-start content-start p-4`}>{children}</div>
  }
  const Title = () => {
    return <h1 className={`text-amber-900 font-bold p-2 text-xl text-left;`}>School Dashboard</h1>
  }

  return (
    <Area>
      <Title/>
    </Area>
  )
}
