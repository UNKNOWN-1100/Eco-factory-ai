import Link from "next/link";
import { ArrowRight, ArrowUpRight, Recycle, ScanLine, Factory, Leaf, Droplets, Zap, CircleCheck, Sprout, Globe2 } from "lucide-react";

const features = [
  { icon: ScanLine, title: "AI waste intelligence", text: "Classify material streams and surface practical recovery recommendations.", href: "/scanner", tag: "Computer vision" },
  { icon: Recycle, title: "Circular resource exchange", text: "Help connect organizations that have reusable by-products with those that need them.", href: "/marketplace", tag: "Material matching" },
  { icon: Zap, title: "Resource performance", text: "Understand energy and water use with clear trends and improvement opportunities.", href: "/energy", tag: "Operational insights" }
];

export default function Home() {
  return <div>
    <section className="overflow-hidden bg-[#f3f6ed]">
      <div className="container grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e6d5] bg-white/75 px-3 py-2 text-xs font-bold text-[#3f7650]"><span className="h-2 w-2 rounded-full bg-[#68a775]"/> A smarter path to circular industry</div>
          <h1 className="max-w-[650px] text-5xl font-black leading-[1.06] tracking-[-.055em] text-[#174D36] md:text-6xl">Make every resource <span className="text-[#6c9c70]">count.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#617166]">Eco Factory AI helps industries understand waste, discover reuse opportunities and make more informed sustainability decisions.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/scanner" className="btn-primary">Try the AI demo <ArrowRight size={17}/></Link><Link href="/dashboard" className="btn-secondary">Explore dashboard</Link></div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#dce6d8] pt-6 text-xs font-semibold text-[#6c7b6e]"><span className="flex items-center gap-2"><CircleCheck size={15} className="text-[#4E8B63}"/> Practical insights</span><span className="flex items-center gap-2"><CircleCheck size={15} className="text-[#4E8B63}"/> Circular thinking</span><span className="flex items-center gap-2"><CircleCheck size={15} className="text-[#4E8B63}"/> Data-led action</span></div>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 rounded-[40px] bg-[#dce9d5] blur-2xl"/>
          <div className="relative overflow-hidden rounded-[30px] border-[8px] border-white shadow-2xl">
            <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85" alt="Modern industrial facility" className="h-[430px] w-full object-cover"/>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between"><div><p className="text-xs font-bold text-[#6c7d6d]">CIRCULARITY IN ACTION</p><p className="mt-1 text-lg font-black text-[#174D36]">From by-product to resource</p></div><span className="rounded-xl bg-[#eaf3e7] p-3 text-[#4E8B63]"><Sprout size={23}/></span></div>
            </div>
          </div>
          <div className="absolute -right-4 -top-5 hidden rounded-2xl bg-white p-4 shadow-xl sm:block"><Leaf className="text-[#4E8B63]" size={22}/><p className="mt-2 text-xs font-bold text-[#174D36]">Better resource choices</p></div>
        </div>
      </div>
    </section>

    <section className="container -mt-7 relative z-10">
      <div className="grid gap-3 rounded-2xl border border-[#e6ece3] bg-white p-5 shadow-lg md:grid-cols-3 md:p-7">
        {[["AI","Understand material streams","Scan and classify waste"],["REUSE","Find value in by-products","Explore circular opportunities"],["IMPROVE","Make informed decisions","Track resource performance"]].map(([n,t,d])=><div key={n} className="flex items-start gap-4 p-2"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf5eb] text-sm font-black text-[#39764c]">{n}</div><div><p className="font-bold text-[#244331]">{t}</p><p className="mt-1 text-sm text-[#7a887d]">{d}</p></div></div>)}
      </div>
    </section>

    <section className="section container">
      <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">A connected toolkit</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#174D36] md:text-4xl">Better decisions across the resource lifecycle.</h2><p className="mt-4 text-sm leading-7 text-[#718075]">Start with visibility, find opportunities and turn insights into measurable operational action.</p></div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">{features.map(({icon:Icon,title,text,href,tag})=><Link href={href} key={title} className="card group p-6 transition hover:-translate-y-1 hover:shadow-xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5eb] text-[#438257]"><Icon size={22}/></div><p className="mt-6 text-[11px] font-extrabold uppercase tracking-widest text-[#7ca17b]">{tag}</p><h3 className="mt-2 text-xl font-black text-[#244331]">{title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-[#748176]">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#39764c]">Explore feature <ArrowUpRight size={16}/></span></Link>)}</div>
    </section>

    <section className="bg-[#174D36] py-16 text-white"><div className="container grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#b6d6ad]">Explore the platform</p><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">See what your materials could become.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/70">Try the interactive waste scanner concept, explore a sample factory dashboard or discover reusable materials in the marketplace.</p><Link href="/scanner" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#174D36]">Open AI waste scanner <ArrowRight size={16}/></Link></div><div className="grid grid-cols-2 gap-3">{[[Factory,"Factory insights"],[Recycle,"Material recovery"],[Droplets,"Water awareness"],[Globe2,"Circular economy"]].map(([Icon,label]:any)=><div key={label} className="rounded-2xl border border-white/15 bg-white/8 p-5"><Icon size={23} className="text-[#b6d6ad]"/><p className="mt-5 text-sm font-bold">{label}</p></div>)}</div></div></section>

    <section className="section container"><div className="rounded-[28px] bg-[#eef4e9] p-8 text-center md:p-14"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#4E8B63]"><Leaf size={26}/></div><h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-tight text-[#174D36]">A more circular future starts with one better decision.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#718075]">Explore the tools, understand the opportunities and take the next step toward smarter resource management.</p><Link href="/dashboard" className="btn-primary mt-7">Explore Eco Factory AI <ArrowRight size={16}/></Link></div></section>
  </div>;
}
