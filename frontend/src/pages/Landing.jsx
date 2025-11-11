import {Link, useNavigate} from "react-router-dom";
import "../App.css";

export default function LandingPage(){

    const router = useNavigate();

    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>CamJam</h2>
                </div>
                <div className="navList">
                    <p onClick={() => {
                        router("/aid8w0");
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth");
                    }}>Register</p>
                    <div role="button" onClick={() => {
                        router("/auth");
                    }}>
                        Login
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color : "#FF9839"}}>Connect</span> with your Loved Ones</h1>
                    <p>Cover a distance with CamJam Video Call</p>
                    <div role="button">
                        <Link to={"/home"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    );
}