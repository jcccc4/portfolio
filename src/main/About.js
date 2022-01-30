import classes from './About.module.css'
import picture from '../images/headshot.JPG'
function About(props){
    return(
    <section id='about' className={classes.subsection}>
        <div className={classes.information}>
            <h2>About Me</h2>
            <p>Hello, My name is John Carlo Sacramento. I am an aspiring Full-stack Developer.</p>
        </div>
        <div className={classes.headshotcontainer}>
            <img src={picture} className={classes.headshot} alt='John Carlo Sacramento'></img>
        </div>

    </section>
    )
}

export default About;