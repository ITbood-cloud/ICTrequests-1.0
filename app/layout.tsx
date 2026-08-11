import './globals.css';
import Link from 'next/link';
export const metadata={title:'DARROX ICT Request Queue',description:'ICT Services Repair Request Queue and Monitoring Dashboard'};
export default function RootLayout({children}:{children:React.ReactNode}) { return <div className="shell"><header className="topbar"><div className="brand"><div className="brandMark">ICT</div><div><h1>Department of Agrarian Reform — Regional Office X</h1><small>ICT Services Repair Request Queue</small></div></div><nav><Link href="/">Dashboard</Link><Link href="/request">New Request</Link><Link href="/queue">ICT Queue</Link></nav></header>{children}<footer>DARROX-QF-STO-PLN-01 Rev.00 · Eff. Date: Jun-30-2023 · ICT Services Repair Request Form</footer></div> }
