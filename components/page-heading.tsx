export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mb-8"><p className="eyebrow">{eyebrow}</p><h1 className="mt-3 text-3xl font-black tracking-tight text-[#174D36] md:text-4xl">{title}</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[#718075]">{description}</p></div>;
}
