interface RequirementsSectionProps {
  requirements: string[];
}

export default function RequirementsSection({
  requirements,
}: RequirementsSectionProps) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
      <ul className="space-y-4">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="material-icons text-green-500 mt-1 text-base">
              check_circle
            </span>
            <span className="text-lg leading-relaxed text-muted-foreground">
              {req}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
