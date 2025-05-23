import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
  return <div style={{
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(105, 105, 105, 0.5)',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '49',
  }}>
    <h3>올ㅋ</h3>
    {children}
  </div>
}
