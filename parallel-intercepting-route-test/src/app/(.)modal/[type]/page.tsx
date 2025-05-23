import ModalPage from "@/app/modal/[type]/page";

export default function Page({params}: { params: Promise<{ type: string }> }) {
  return <ModalPage params={params}/>
}
