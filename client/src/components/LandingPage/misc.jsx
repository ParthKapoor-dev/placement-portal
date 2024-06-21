import { Skeleton } from "../ui/skeleton";
import Empty from "./emptyBox";

export default function MiscSection() {
  return (
    <div>
      <div className=" text-slate-600 font-semibold mb-4 text-xl">
        Miscellaneous Info
      </div>

      <div className="flex gap-4 flex-col">
        <Empty />
        <Empty />
      </div>      
    </div>
  )
}