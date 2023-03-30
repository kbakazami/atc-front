export default function Option ({isAvailable, ...props}) {
    return (
        <>
            {isAvailable === 1 && (
                <div className={"flex flex-row items-center gap-x-1"}>
                    {props.children}
                    <span>{props.name}</span>
                </div>
            )}
        </>
    )
}