'use client'

import {useRouter} from "next/navigation";
import {ReactNode, useTransition} from "react";
import dynamic from "next/dynamic";

export default function OverviewModal({ children }: { children: ReactNode }) {
  const CommonModal = dynamic(() => import('./CommonModal'), {
    ssr: false,
  });
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClose = () => {
    startTransition(() => {
      router.back();
      router.refresh();
    });
  }

  const ModalButton = () => {
    return <button
      className={`px-4 py-2 ${isPending ? 'bg-gray-300' : 'bg-blue-500'} text-white rounded mt-2 me-2`}
      onClick={handleClose}
      disabled={isPending}
    >
      {'닫기'}
    </button>
  }

  return <CommonModal>
    <div className="flex flex-col items-end justify-end">
      <ModalButton/>
      {children}
    </div>
  </CommonModal>
}
