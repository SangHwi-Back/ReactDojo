'use client'

import { useCallback, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function CommonModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onDismiss = useCallback(() => {
    router.back()
  }, [router]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [onDismiss]);

  const Dialog = () => {
    return <dialog
      ref={dialogRef}
      className="inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex flex-col items-center justify-center"
      aria-labelledby="modal-title"
      onClick={() => router.back()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  }

  return createPortal(
    <Dialog/>,
    document.body
  )
}
