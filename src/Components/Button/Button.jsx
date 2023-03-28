function Button({ children, ...props }) {
  return (
    <a
        href={props.link}
        className={props.classCss ? props.classCss : "bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition duration-300 ease-in-out"}>
      {children}
    </a>
  );
}

export default Button;