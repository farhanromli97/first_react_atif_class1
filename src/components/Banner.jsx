import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Banner = () => {
    const haiwans = ["harimau", "kucing", "burung", "tikus"]
    // need to read about Truthy and Falsy values
    const isTrue = true;
    return (
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        { // this is to replace for loops
            haiwans.map((haiwan) => <p key={haiwan}>{haiwan}</p>) // (haiwan) is like i in "for i in x"
        }
        { // Ternary is used to replace if-else statement
            isTrue ? <p>True</p> : <p>False</p>
        }
      </div>
    );
};

export default Banner;