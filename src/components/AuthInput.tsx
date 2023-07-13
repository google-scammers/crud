type AuthInputProps = {
  type : string;
  label : string
  id : string
  onChange : React.ChangeEventHandler<HTMLInputElement>
  name : string
  value : string
}

export const AuthInput = ({
  type,
  label,
  id,
  onChange,
  name,
  value,
}:AuthInputProps) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      {label}
      <input
        type={type}
        placeholder={label}
        id={id}
        onChange={onChange}
        name={name}
        value={value}
      />
    </label>
  )
}



