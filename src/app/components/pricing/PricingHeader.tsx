export default function PricingHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-xl pt-1">{subtitle}</p>
      <br />
    </div>
  );
}
