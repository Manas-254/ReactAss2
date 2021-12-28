let friend='Manaswini'

let element=<h1>Hello,{friend}</h1>

let Vegetables=['potato','carrot','tomato','onion']

let vegetablsItems=<ul>{
    Vegetables.map((value,index)=>{
        return <li key={value+index}>
            {value}
        </li>
    })
}
</ul>
// let allItems = React.createElement('div',null,element,fruitsItems)
// let allItems=<div>
//     {element}{fruitsItems}
// </div>
ReactDOM.render(<div>
       {element}{vegetablsItems}
    </div>, document.getElementById('container'))
// ReactDOM.render(element,document.getElementById('container'))