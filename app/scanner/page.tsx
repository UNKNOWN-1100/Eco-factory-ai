"use client";
import { useRef, useState } from "react";
import { PageHeading } from "@/components/page-heading";
import { Upload, ScanLine, Recycle, Leaf, RotateCcw, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function Scanner() {
 const inputRef=useRef<HTMLInputElement>(null);
 const [file,setFile]=useState<File|null>(null);
 const [preview,setPreview]=useState("");
 const [result,setResult]=useState(false);
 const [busy,setBusy]=useState(false);
 function choose(f?:File){ if(!f)return; setFile(f); setPreview(URL.createObjectURL(f)); setResult(false); }
 function analyze(){ if(!file)return; setBusy(true); setTimeout(()=>{setBusy(false);setResult(true)},900); }
 return <div className="container py-12"><PageHeading eyebrow="Interactive AI experience" title="AI waste scanner" description="Explore how computer vision can help identify material streams and guide better recovery decisions. This frontend demo uses a sample result; connect a real model to enable actual image inference."/>
 <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]"><div className="card p-6 md:p-8"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf5eb] text-[#438257]"><ScanLine/></span><div><h2 className="font-black text-[#244331]">Upload a material image</h2><p className="text-xs text-[#849087]">Choose an image to start the demo</p></div></div>
 <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={e=>choose(e.target.files?.[0])}/>
 <button onClick={()=>inputRef.current?.click()} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();choose(e.dataTransfer.files?.[0])}} className="mt-6 flex min-h-[280px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#cbdcc9] bg-[#f7faf5] p-5 text-center transition hover:border-[#6a9b70]">
 {preview?<img src={preview} alt="Selected material preview" className="max-h-[245px] rounded-xl object-contain"/>:<><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#4E8B63] shadow-sm"><Upload size={25}/></span><span className="mt-4 font-bold text-[#315b40]">Click to upload or drop an image</span><span className="mt-2 text-xs text-[#89958b]">PNG, JPG or WEBP · Max 10 MB recommended</span></>}
 </button>
 {file&&<p className="mt-3 truncate text-xs text-[#718075]"><ImageIcon size={14} className="mr-1 inline"/> {file.name}</p>}
 <div className="mt-5 flex flex-wrap gap-3"><button disabled={!file||busy} onClick={analyze} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">{busy?"Analyzing demo...":"Analyze material"} <ScanLine size={16}/></button><button onClick={()=>{setFile(null);setPreview("");setResult(false);if(inputRef.current)inputRef.current.value=""}} className="btn-secondary"><RotateCcw size={15}/> Reset</button></div>
 </div>
 <div className="card min-h-[420px] p-6 md:p-8"><div className="flex items-center justify-between"><h2 className="font-black text-[#244331]">Analysis result</h2><span className="rounded-full bg-[#f1f4ed] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#718075]">Demo output</span></div>
 {!result?<div className="flex h-[330px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f0f5ed] text-[#79a17a]"><Leaf size={28}/></div><p className="mt-5 font-bold text-[#47604d]">Your analysis will appear here</p><p className="mt-2 max-w-xs text-sm leading-6 text-[#89958b]">Upload an image and run the demo to see a sample material classification and recovery guidance.</p></div>:<div className="mt-6"><div className="rounded-2xl bg-[#eef5eb] p-5"><div className="flex items-center gap-2 text-sm font-bold text-[#39764c]"><CheckCircle2 size={17}/> Sample analysis complete</div><h3 className="mt-3 text-2xl font-black text-[#174D36]">Mixed recyclable material</h3><p className="mt-2 text-sm leading-6 text-[#647568]">Demo classification only. A connected vision model is required to identify the uploaded image.</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-white"><div className="h-full w-[86%] rounded-full bg-[#6a9b70]"/></div><p className="mt-2 text-xs font-semibold text-[#52775a]">Example confidence indicator: 86%</p></div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl border border-[#e8eee6] p-4"><Recycle className="text-[#4E8B63]"/><p className="mt-3 text-xs text-[#849087]">Suggested route</p><p className="mt-1 font-bold text-[#315b40]">Sort & assess</p></div><div className="rounded-xl border border-[#e8eee6] p-4"><Leaf className="text-[#4E8B63]"/><p className="mt-3 text-xs text-[#849087]">Next action</p><p className="mt-1 font-bold text-[#315b40]">Check purity</p></div></div><p className="mt-4 text-xs leading-5 text-[#879287]">Always verify material type and contamination before recycling or reuse.</p></div>}
 </div></div></div>;
}
