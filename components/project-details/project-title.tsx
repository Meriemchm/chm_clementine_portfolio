export default function ProjectTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6">
      <h2 className="text-2xl font-semibold text-white whitespace-nowrap">
        {title}
      </h2>
      {/* <div className="flex-1 h-px bg-gradient-to-r from-[#e4c46c] to-transparent" /> */}
    </div>
  );
}