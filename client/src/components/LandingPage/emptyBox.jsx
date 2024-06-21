
export default function Empty() {
  return (
    <div className="bg-white h-[14rem] w-[20rem] max-md:w-full max-md:h-[10rem] px-8 py-4">
      <div className="flex gap-4">
        <div className="h-24 w-20 bg-[#D9D9D9]" />
        <div className="flex flex-col gap-2">
          <div className="h-8 w-40 max-md:w-52 bg-[#D9D9D9]" />
          <div className="flex flex-col gap-2">
            <div className="h-6 w-40 max-md:w-52 bg-[#D9D9D9]" />
            <div className="h-6 w-40 max-md:w-52 bg-[#D9D9D9]" />
          </div>
        </div>
      </div>
    </div>
  )
}