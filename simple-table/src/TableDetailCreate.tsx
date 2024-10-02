import TableDetailForm, {FormAs} from "./TableDetailForm";
import { emptyData } from './data';

export default function TableDetailCreate() {
  return <TableDetailForm type={FormAs.create} dataProp={emptyData} />;
};