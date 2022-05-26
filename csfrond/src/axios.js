import React, { useEffect } from "react";
import {UseState} from "react";
import {UseEffect} from "react";

function Axios() {
const url = "http://localhost:3000/api_v1";

componentDidMount(){
  axios.get('http://localhost:8080/empdetails')
.then(res => {
  const persons = res.data;
  this.setState({ persons });
})
}
  
}


export default Axios;
