import React from "react";

const Input = React.forwardRef(({ ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className={`rounded-md border-[1px] border-solid border-slate-300 bg-inherit px-2 py-1.5 focus:outline focus:outline-2 focus:outline-slate-500 disabled:bg-slate-200 ${props.className}`}
  />
));
Input.displayName = "Input";

export default Input;
