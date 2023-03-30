export default function CheckboxOption(props) {
    return (
        <label className={"flex flex-row items-center gap-x-1"} htmlFor={props.id}>
            <input id={props.id} className={"w-auto"} type="checkbox" {...props.children}/>
            <span>{props.name}</span>
        </label>
    )
}