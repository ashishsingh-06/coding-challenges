function Accordion(){

    const [isActive, setIsActive] = React.useState(false);
    const [height, setHeight] = React.useState(0);
    const container = React.useRef(null);

    React.useEffect(() => {
        setHeight(container.current.scrollHeight);
    },[isActive]);

    return (
        <div className='container'>
            <div className="accordion-container">
                <div className='accordion-header' onClick={(e)=> setIsActive(!isActive)}>
                    <span>{!isActive ? 'Open' : 'Close'}</span>
                    <span>{!isActive ? '+' : '-'}</span>
                </div>
                <div ref={container} className="accordion-body" style={{maxHeight: isActive ? height : 0, opacity: isActive ? 1 : 0}}>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </div>
    )

}

const root = document.getElementById('root');
ReactDOM.render(<Accordion/>, root);