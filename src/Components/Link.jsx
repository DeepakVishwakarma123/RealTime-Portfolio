export default function Link({PlatFormIcon,PlatFormLink,platFormText})
{
return (
    <div>
        <a href={PlatFormLink}>
            <div className="flex gap-3  items-center   p-2 hover:bg-base-300">
                <PlatFormIcon/>
                {platFormText}
            </div>
        </a>
    </div>
)
}