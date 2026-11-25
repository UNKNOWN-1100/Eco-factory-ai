import type { LucideIcon } from "lucide-react";
export function StatCard({ label, value, change, icon: Icon, tone = "green" }: { label: string; value: string; change: string; icon: LucideIcon; tone?: string }) {
  return <div className="card p-5"><div className="flex items-center justify-between"><p className="text-sm font-semibold text-[#748176]">{label}</p><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone === "blue" ? "bg-blue-50 text-blue-700" : tone === "amber" ? "bg-amber-50 text-amber-700" : "bg-[#edf5eb] text-[#36764d]"}`}><Icon size={19}/></span></div><p className="mt-4 text-3xl font-black tracking-tight text-[#203b2b]">{value}</p><p className="mt-2 text-xs font-semibold text-[#4E8B63]">{change}</p></div>;
}
