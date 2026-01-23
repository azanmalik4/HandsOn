import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
