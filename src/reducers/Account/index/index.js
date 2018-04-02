
export default (state={value:'xxx'},action)=>{
		switch(action.type){
			case "CHANGE":
				return {value:action.payload.data}
			case "BACK":
				return {value:action.payload.data}
			default:
				return state
		}
}