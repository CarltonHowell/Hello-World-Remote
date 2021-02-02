import * as React from "react"
import {Link} from "react-router-dom";
import HelloComponent from "../components/HelloComponent";

const Home = () => {
    return (
        <>
            <h1>Page 1</h1>
            <br />
            <HelloComponent text="Hello world" />
            <br />
            <Link to={'/page2'}>Go to page 2</Link>
             <style>{`
                body {
                    background-color:  #bcffb8;
                }
            `}</style>
        </>
    )
}

export default Home;