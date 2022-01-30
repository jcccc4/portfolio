import Name from "../Layout/Name";
import Navbar from "../Layout/Navbar";
import classes from "./Introduction.module.css"

function Introduction(props){
    return(
    <section className={classes.introduction}>
        <Navbar />
        <Name />
    </section>
    )
}

export default Introduction;