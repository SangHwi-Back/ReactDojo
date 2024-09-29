import TableDetailForm from "./TableDetailForm";
import { emptyData } from './data';

export default function TableDetailCreate() {
  return <TableDetailForm editable={true} data={emptyData} />;
};