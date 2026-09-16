type Props = { number: string; label: string; detail?: string };

export function SectionLabel({ number, label, detail }: Props) {
  return (
    <div className="section-label" aria-label={`${number} — ${label}`}>
      <span>{number}</span>
      <span>{label}</span>
      {detail && <span className="section-detail">{detail}</span>}
    </div>
  );
}
