class IdSelector extends React.Component{
    constructor(){
        super();
        this.handleChange=this.handleChange.bind(this);
        this.state = {ID: []}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data =>{
            for(var i =1;i<=data.length;i++){
                this.state.ID.push(i);
            }
            //console.log(data.length+" y "+this.state.ID);
            let id = this.state.ID.map(this.eachID.bind(this));
            this.setState({ID:id});
        })
    }

    eachID(pic){
        return(
                <option number={pic}>
                    {pic}
                </option>
            );
    }

    handleChange(e){
        this.props.stateID(e.target.value);
    }

    render(){
        return(
        <div>
            <select onChange={this.handleChange}>
                {this.state.ID}
            </select>
        </div>
        );
    }
}
