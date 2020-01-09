class TitleSelector extends React.Component{
    constructor(){
        super();
        this.state ={
            Title:[]
        }
    }

    componentDidUpdate(propsPrev){
        if(propsPrev.titleid!==this.props.titleid)
        {
            fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.titleid,{
                method:'GET',headers:{}
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data.title);
                this.setState({Title:data.title});
            }).catch(err=>console.log(err))
        }
    }

    render(){
        return(
            <div>
                <label>Titulo: {this.state.Title}
                </label>
            </div>
        );
    }
}
