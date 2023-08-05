import { useEffect, useState } from "react";


// the function is in js
// but the return is in jsx

const ComponentA = ({staticNumber}) =>{
    // isLapar is a variable
    // setIsLapar is a function
    const [isLapar,setIsLapar] = useState(true)
    const [nama, setNama] = useState("")
    const [bgColor, setBgColor] = useState("blue")

    const handleButton = () => {
        alert("Nyam Nyam Nyam")

        setIsLapar(false)
    }

    const handleInput = (event) => {
        setNama(event.target.value)
        console.log(`Old: ${nama}`) // this is using literal string
    }

    const handleBgColor = (color) => {
        setBgColor(color)
      }
    // this is a Hook, note the syntax
    // the function will be triggered when we pass something in the square bracket
    // in this example, when nama is updated, the function will be called
    useEffect(
        // Mounting or Updating
        () => {
        // mounting and updating
        console.log(`New: ${nama}`)
        // unmounting, though it seems to be triggered at times i am not sure of why
        //return alert("nak kluar ke?")
            },
        [nama])
    
    useEffect(() => 
        {const element =  document.getElementById("warna")
        element.style.backgroundColor = bgColor}, 
        [bgColor])
    

    return <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}>
            Static value of prop: {staticNumber}
            <br/>
            Lapar ke {isLapar.toString()}
            
            <button onClick={handleButton}>Makan</button>
            <input 
            type="text"
            name="nama"
            value={nama}
            // Function call by reference, there is no bracket()
            onChange={handleInput} // this is effectively the same as (event) => handleInput(event)
            />
            <div style={{display: "flex", flexDirection: "row"}}>
                <button onClick={() => handleBgColor("blue")}>Blue</button>
                <button onClick={() => handleBgColor("yellow")}>Yellow</button>
                <button onClick={() => handleBgColor("red")}>Red</button>
            </div>
            <div id="warna" style={{width: "100px", height: "100px"}}></div>
        </div>
    
}

export default ComponentA