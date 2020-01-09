class App extends React.Component{
  constructor(props){
    super(props);
    this.stateID=this.stateID.bind(this);
    this.state = {
      ID:1
    }
  }
  stateID(id){
    console.log(id);
    this.setState({ID:id});
  }
  render(){
    return(
      <div>
      <ButtonClick />
      <IdSelector stateID ={this.stateID}/>
      <TitleSelector titleid={this.state.ID}/>
      </div>
    );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById("comp")
);
