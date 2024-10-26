// components/TokenSkeleton.tsx

import { Skeleton } from "@/components/ui/skeleton";

interface TokenSkeletonProps {
  height?: string;
  width?: string;
}

const TokenSkeleton: React.FC<TokenSkeletonProps> = ({
  height = "9",
  width = "9",
}) => {
  return (
    <div className="flex items-center gap-2 p-5 py-6 w-full">
      <Skeleton className={`h-${height} w-${width} rounded-full`} />
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
};

export default TokenSkeleton;
