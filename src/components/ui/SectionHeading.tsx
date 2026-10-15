interface SectionHeadingProps {
  title: string;
  id?: string;
}

export function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      {id && <div id={id} className="scroll-mt-24" />}
      <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide text-gray-900">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-20 h-1 bg-yellow" />
    </div>
  );
}
