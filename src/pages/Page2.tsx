import * as React from "react"
import {Link} from "react-router-dom";
import HelloComponent from "../components/HelloComponent";

const Page2 = () => {
    return (
        <>
            <h1>Page 2</h1>
            <br />
            <HelloComponent text="Another Hello world" />
            <br />
            <Link to={'/'}>Go to page 1</Link>
             <style>{`
                body {
                    background-color:  #fffb88;
                }
            `}</style>
        </>
    )
}

export default Page2;