import { Skeleton } from "../ui/skeleton"

export default function UpdatesDiv({ jobs }) {
  return (
    <div className="">

      <div className="text-slate-500 font-semibold mb-4 text-xl">
        Latest Updates On Applied Jobs
      </div>

      <div className="bg-white dark:bg-neutral-800 w-[58vw] max-md:w-fit py-6 px-8 flex gap-6 ">
        <div>
          <img src={jobs.icon} className="h-12 w-full" />
        </div>

        <div>
          <p className="text-2xl max-md:text-xl">
            {jobs.title}
          </p>

          <p>
            {jobs.description}
          </p>

          <div className="flex gap-6 flex-col mt-4">
            <EmptyDiv />
            <EmptyDiv />
          </div>
        </div>

      </div>

    </div>
  )
}


function EmptyDiv() {

  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6 w-[30rem] max-md:w-[15rem] bg-[#D9D9D9]" />
      <Skeleton className="h-2 w-[30rem] max-md:w-[15rem] bg-[#D9D9D9]" />
      <Skeleton className="h-2 w-[30rem] max-md:w-[15rem] bg-[#D9D9D9]" />
    </div>
  )
}