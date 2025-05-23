import {ReactNode} from "react";

export default async function ModalLayout({children}: { children: ReactNode }) {
  return <div style={{
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(105, 105, 105, 0.5)',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div className={`fixed inset-0 flex flex-col items-end justify-end`}>
      {children}
    </div>
  </div>
}
