"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["Home", "/"], ["Dashboard", "/dashboard"], ["AI Scanner", "/scanner"],
  ["Waste", "/waste"], ["Marketplace", "/marketplace"], ["Energy", "/energy"], ["Carbon", "/carbon"]
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <>
    <header className="sticky top-0 z-50 border-b border-[#e8eee6] bg-white/90 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#174D36] text-white"><Leaf size={21}/></span>
          <span><span className="block text-[15px] font-black tracking-tight text-[#174D36]">ECO FACTORY AI</span><span className="block text-[10px] font-semibold tracking-[.16em] text-[#7b8c7d]">INDUSTRIAL CIRCULARITY</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className={`text-[13px] font-semibold transition ${path === href ? "text-[#174D36]" : "text-[#66746a] hover:text-[#174D36]"}`}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/assistant" className="text-sm font-semibold text-[#45624e]">Eco Assistant</Link>
          <Link href="/dashboard" className="btn-primary !px-4 !py-2.5 text-sm">Open platform <ArrowUpRight size={15}/></Link>
        </div>
        <button aria-label="Toggle navigation" className="rounded-xl border border-[#e5ebe2] p-2 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="container grid gap-1 pb-4 lg:hidden">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#315b40] hover:bg-[#f0f5ee]">{label}</Link>)}<Link onClick={() => setOpen(false)} href="/assistant" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#315b40]">Eco Assistant</Link></nav>}
    </header>
    <main>{children}</main>
    <footer className="mt-16 bg-[#123c2b] py-12 text-white">
      <div className="container grid gap-9 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><div className="flex items-center gap-2 text-lg font-black"><Leaf size={21}/> ECO FACTORY AI</div><p className="mt-3 max-w-sm text-sm leading-6 text-white/65">Turning industrial by-products into tomorrow's resources through intelligent, practical sustainability.</p></div>
        <div><p className="mb-3 text-sm font-bold">Explore</p><div className="grid gap-2 text-sm text-white/65"><Link href="/scanner">AI waste scanner</Link><Link href="/marketplace">Resource marketplace</Link><Link href="/dashboard">Factory dashboard</Link></div></div>
        <div><p className="mb-3 text-sm font-bold">Our mission</p><p className="text-sm leading-6 text-white/65">Make circular manufacturing easier to understand, measure and act on.</p></div>
      </div>
      <div className="container mt-10 border-t border-white/15 pt-5 text-xs text-white/45">© 2026 Eco Factory AI · Demo platform with illustrative sample data.</div>
    </footer>
  </>;
}
