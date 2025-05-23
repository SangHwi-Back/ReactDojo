import {rows} from "@/app/(store)/rows";
import GridItem from "@/app/@grid/GridItem";

export default function Page() {
  return <div className={`grid grid-cols-3 gap-4`}>
    {rows.map((row, index) => <GridItem row={row} key={index}/>)}
  </div>
}
