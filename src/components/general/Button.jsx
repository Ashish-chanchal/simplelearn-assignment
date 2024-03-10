
function Button(props) {
  const { title,classN } = props;
  return (
    <button className={` px-2 py-1  border rounded-full border-blue-900 ${classN}`} >{title}</button>
  )
}

export default Button