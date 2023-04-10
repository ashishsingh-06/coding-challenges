
const useFetch = (url) => {
    const [data, setData] = React.useState([]);
    React.useEffect(()=>{
        fetch(url).then(res => res.json()).then(res => setData(res));
    },[url]);
    return data;
}

const App = () => {

    const data = useFetch('https://jsonplaceholder.typicode.com/users');

    return (<div className="container">
        {
           data && data.map((item, index)=>{
               return <div index={index} className="item">{item.name}</div>
            })
        }
    </div>)

}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);