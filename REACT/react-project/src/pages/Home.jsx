import Head from "../components/head"
import Button from "../components/Button"
import Navbar from "./Navbar"
export function Home(){
    return (
<>
<Navbar/>
<Head heading="Welcome Again"/>
<Button btnClass="btn" btnName="Click Me"/>
</>
    )
}