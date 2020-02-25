import React from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import "./App.css";
import PostsList from "./components/PostsList";

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        user:{
      userName: "Isis",
      password:"isis123"
    },
    error: '',
    posts: []
  };

  this.logout = this.logout.bind(this);
  this.signin = this.signin.bind(this);
}

logout(event){
  event.preventDefault();

  this.setState({user: {
    userName: "",
    password: ""
  }});
}

signin(){
    this.setState({user: {
    userName:"WemanConnect",
    password: "we123"
  }})
}

componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    this.setState({
      posts: result.data
    });
  });
}


componentDidUpdate(){
  console.log("Uddating phase: componentDidUpdate");
}
componentWillUnmount(){
  console.log("Unmounting phase: constructor");
}
static getDerivedStaticFromError(error) {
  //Actualiza el state, así el sigueinte renderizado lo mostrara en la IU
  return { error: error};
}
componentDidCatch(error, info){
  console.log("Error phase: " + error)
}


  render() {
    /*console.log(this.state.error);
    if (this.state.error){
      return <div>User not found</div>
    }*/
    console.log(this.state.post)
    return (
    <div className="container">
      <Header 
      user={this.state.user.userName} logout={this.logout} signin={this.signin} 
      /> 

      {
        //Mostrar si no hay usuario loggeado
        this.state.user.userName ? <PostsList posts={this.state.posts} /> : <Formulario 
        userName={this.state.user.userName}
        password={this.state.user.password} />
         
      }

      

      {
          //Mostrar si no hay usuario loggeado
      }
      


      
      <footer>By WemanConnect</footer>
    </div>
    );
 };
}