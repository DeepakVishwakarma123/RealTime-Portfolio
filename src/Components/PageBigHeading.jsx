export default function PageBigHeading({bigText})
{
return (
      <div className="grid place-content-center p-4">
        <div className="flex justify-center items-center p-4">
          <h1 className="text-5xl sm:text-7xl">{bigText}</h1>
        </div>
      </div>
)
}