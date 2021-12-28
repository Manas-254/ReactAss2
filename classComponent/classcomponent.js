class Header extends React.Component{
    render(){
        return <h1>Header</h1>
    }
}

class Content extends React.Component{
    render(){
        return <h4>{this.props.content} {this.props.firstname}{this.props.lastname}</h4>
    }
}

class Footer extends React.Component{
    render(){
        return <h1>Footer</h1>
    }
}

ReactDOM.render(<div>
    <Header/>
    {/* props in content component */}
    <Content firstname="Manaswwini"lastname="Jain"/>
    <Content firstname="Manaswwini"lastname="Jain"/>
    <Content content="Content"firstname="Manaswwini"lastname="Jain"/>
    <Footer/>
</div>,document.getElementById('container'))