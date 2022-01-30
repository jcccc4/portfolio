import classes from './Footer.module.css'

function Footer(props){
    return(
    <footer id='contact'>
        <h2 className={classes.contact}>Contact me</h2>
        <p className={classes.mail}>jcsacra4@gmail.com</p>
    </footer>
    )
}

export default Footer;