
export default function UpdatesDiv({ jobs }) {
  return (
    <div className="">

      <div className="text-slate-500 font-semibold mb-4 text-xl">
        Latest Updates On Applied Jobs
      </div>

      <div className="bg-white h-60 w-[58vw] py-6 px-8 flex gap-6 ">
        <div>
          <img src={jobs.icon} className="h-12" />
        </div>

        <div>
          <p className="text-2xl">
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
      <div className="h-6 w-[30rem] bg-[#D9D9D9]" />
      <div className="h-2 w-[30rem] bg-[#D9D9D9]" />
      <div className="h-2 w-[30rem] bg-[#D9D9D9]" />
    </div>
  )
}