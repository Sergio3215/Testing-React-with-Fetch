class ButtonClick extends React.Component{
  constructor(){
    super();
    this.state = {}
  }
  handleClick(){
    alert('you were click me');
  }
  render(){
    return(
      <div>
      <button onClick = {this.handleClick}> click me </button>
      </div>
    );
  }
}
