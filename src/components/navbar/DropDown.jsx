
const Dropdown = (props) => {
  

  return (
    <><div  ref={props.dropdownRef}>
      <button  onClick={props.toggleDropdown}>
        <div className='grid md:grid-cols-2 gap-2'><h3 className='md:block hidden'>Category</h3> <img src={props.img} alt="" className='my-3' /> </div>
      </button>
      
    </div>
      </>
  );
};

export default Dropdown;
