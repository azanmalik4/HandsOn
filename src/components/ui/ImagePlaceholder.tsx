import { Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  portrait: "aspect-[3/4]",
};

export const ImagePlaceholder = ({
  className,
  label = "Image placeholder",
  aspectRatio = "video",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        "image-placeholder",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        <Image className="w-8 h-8 opacity-50" />
        <span className="text-sm opacity-70">{label}</span>
      </div>
    </div>
  );
};
