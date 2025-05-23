import ModalLayout from '@/app/modal/layout';
import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
  return <ModalLayout>{children}</ModalLayout>
}
