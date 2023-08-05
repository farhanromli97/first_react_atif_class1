const ComponentB = ({func}) => {
    const updateNombor = () => {
        func(100)
    }
    return <div>
        <button style={{backgroundColor: "blue", border: "2px solid green", marginTop: "10px", marginBottom: "2px"}} onClick={() => func(100)}>Click to update count</button>
        <p style={{margin: "0px"}}>Below Count is updated by Component B using above button</p>
    </div>
}
    
export default ComponentB