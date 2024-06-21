import { Skeleton } from "../ui/skeleton";

export default function Empty() {
  return (
    <div className="bg-white dark:bg-neutral-800 h-[14rem] w-[20rem] max-md:w-full max-md:h-[10rem] p-4">
      <div className="flex gap-4">
        <Skeleton className="h-24 w-20 bg-[#D9D9D9]" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-40 max-md:w-52 bg-[#D9D9D9]" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-40 max-md:w-52 bg-[#D9D9D9]" />
            <Skeleton className="h-6 w-40 max-md:w-52 bg-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </div>
  )
}