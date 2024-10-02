

function IconDuplicate (props){
    return(
        <a className="flex mt-4 xl:w-3/4 w-[85%] inline-block p-1 items-center hover:bg-blue-200 hover:rounded-r-xl hover:p-1" href="#" >
        <i> {props.icons} </i> <p className="pl-4 hover:text-blue-400"> {props.text} </p>
        <small className="flex justify-end xl:w-2/4 w-4/5" > {props.num} </small>
        </a>
    )
}

export default IconDuplicate
