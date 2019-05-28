import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// DOES NOT WORK:
// Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// ("ref" is special 'property')
function InputDoesNotWork(props: InputProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

const Input = React.forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <div>
    <input ref={ref} {...props} />
  </div>
));

export default Input;
