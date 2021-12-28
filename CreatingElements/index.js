const element =React.createElement('p',null,'Reactjs Training')

const element1 =React.createElement('h1',{id:'react'},'Training')
let allItems=React.createElement('div',null,element,element1)
ReactDOM.render(allItems,document.getElementById('container'))