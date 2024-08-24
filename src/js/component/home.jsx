import React, {useState} from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [list, setList] = useState([])

	const addTask = () => {	
		if(inputValue != ""){
			setList(list.concat(inputValue))
			setInputValue("")
		}
	}
	
	const deleteTask = (position) => {
			setList(list.filter((_tarea,index) => position != index ))
	}
	

	return (
		<div className="text-center">
			<input className="form-control form-control-lg" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter"){addTask()}}} type="text" placeholder="ingresar tarea" aria-label=".form-control-lg example"></input>
			<ul className="list-group">
				{list.map((item,index) => {
					return(
						<li key={index} className="list-group-item d-flex justify-content-between">
							<label>{item}</label>
							<button onClick={() => deleteTask(index)} className="btn-close" ></button>
						</li>    	  

					)
				})}
			</ul>
		</div>
	);
};

export default Home;
