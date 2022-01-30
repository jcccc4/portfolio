import Introduction from "./main/Introduction";
import About from "./main/About";
import Projects from "./main/Projects";
import Footer from "./main/Footer";
import react from "react";



function App(){
    return (
            <react.Fragment>
                <Introduction /> 
                <About />
                <Projects />
                <Footer />
            </react.Fragment>
            )
}

export default App;