import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function Listing({ data }) {
  
  const Navigate = useNavigate();

  function handleNavigate() {
    Navigate("/company/" + data.title, { state: data });
  }
  
  return (
    <div className="p-4 bg-white dark:bg-neutral-800 min-w-[18vw] h-fit max-md:min-w-[60vw]">
      <div className="flex gap-2">
        <img src={data.logo} className="h-10" />
        <p className="flex justify-center items-center">
          {data.title}
        </p>
      </div>

      <div className="flex gap-6 mt-10">
        <div className="text-slate-400 flex flex-col gap-2">
          <p>Role</p>
          <p>CTC</p>
          <p>Apply Before</p>
        </div>
        <div className=" font-semibold flex flex-col gap-2">
          <p>{data.role}</p>
          <p>{data.salary}</p>
          <p>{data.submissionDate}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="ghost" className="text-red-500" onClick={handleNavigate}>
          More Info {">"}
        </Button>
      </div>

    </div>
  )
}