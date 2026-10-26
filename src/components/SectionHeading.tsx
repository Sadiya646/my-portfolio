export default function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-navy-400">
        {index}. {kicker}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
    </div>
  );
}
