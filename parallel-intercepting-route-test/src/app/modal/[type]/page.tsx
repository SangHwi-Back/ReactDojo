import TableModalPage from "@/app/modal/[type]/TableModalPage";
import ChartModalPage from "@/app/modal/[type]/ChartModalPage";
import GridModalPage from "@/app/modal/[type]/GridModalPage";

export default async function ModalPage({params}: { params: Promise<{ type: string }> }) {
  const {type} = await params;

  if (type === 'table') {
    return <TableModalPage/>
  } else if (type === 'chart') {
    return <ChartModalPage/>
  } else if (type === 'grid') {
    return <GridModalPage/>
  } else {
    return <div>asdf</div>
  }
}
