function Header (){
    return <h1>Header</h1>
}
function Content (props){
    return <h4>Content {props.firstname}{props.lastname}</h4>
}
function Footer (){
    return <h1>Footer</h1>
}
 {/* props in content component */}
ReactDOM.render(<div>
    <Header/>
    <Content firstname="Manaswwini"lastname="Jain"/>
    <Content firstname="ini"lastname="Jain"/>
    <Footer/>
</div>,document.getElementById('container'))