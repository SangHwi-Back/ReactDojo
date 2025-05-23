'use client'

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ModalPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClose = () => {
    startTransition(() => {
      router.back();
      router.refresh();
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[400px]">
        모달입니당
        <button
          onClick={handleClose}
          disabled={isPending}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isPending ? '닫는 중...' : '닫기'}
        </button>
      </div>
    </div>
  );
}
