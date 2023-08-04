import { useEffect, useState } from "react";


// the function is in js
// but the return is in jsx

const ComponentA = ({}) =>{
    // isLapar is a variable
    // setIsLapar is a function
    const [isLapar,setIsLapar] = useState(true)
    const [nama, setNama] = useState("")
    
    const handleButton = () => {
        alert("Nyam Nyam Nyam")

        setIsLapar(false)
    }

    const handleInput = (event) => {
        setNama(event.target.value)
        console.log(`Old: ${nama}`) // this is using literal string
    }
    // this is a Hook, note the syntax
    // the function will be triggered when we pass something in the square bracket
    // in this example, when isLapar is updated, the function will be called
    useEffect(
        // Mounting or Updating
        () => {
        // mounting and updating
        console.log(`New: ${nama}`)
        // unmounting, though it seems to be triggered at times i am not sure of why
        //return alert("nak kluar ke?")
            },
        //;
        // Unmounting
        [isLapar, nama])
    

    return <div
            style={{
                display: "flex",
                flexDirection: "column"
            }}>
            Nombor daripada App component:
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
        </div>
    
}

export default ComponentA