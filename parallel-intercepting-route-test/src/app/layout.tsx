import "./globals.css";
import {ReactNode} from "react";

type Props = Readonly<{
  children: ReactNode,
  chart: ReactNode,
  grid: ReactNode,
  table: ReactNode,
}>

export default function RootLayout({ children, chart, grid, table }: Props) {
  return (
    <html>
      <body>
        {children}
        <div className="grid grid-rows-[auto_1fr] gap-1 p-4">
          <div className="grid grid-cols-[auto_1fr] gap-1">
            {chart}
            {table}
          </div>
          <div className="grid grid-cols-[1fr] gap-4">
            {grid}
          </div>
        </div>
      </body>
    </html>
  );
}
