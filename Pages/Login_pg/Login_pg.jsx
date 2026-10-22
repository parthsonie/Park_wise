import logo_without_heading from "../../Images/ParkWise_logo_without_sub_headings.png"
import Main_pg_img from "../../Images/ParkWise_main_pg_img.png"
import "./Login_pg.css";

function Login_pg() {
    return (
        <div className="Main_pg">
            <div className="main_pg_img">
                <img src={Main_pg_img} alt="" />
            </div>
            <div className="Main_pg_content">
                <div className="Logo">
                    <img src={logo_without_heading} alt="" />
                </div>
                <div>
                    <h3>Welcome Back!</h3>
                    <h5>Log in to your account</h5>
                </div>
                <div className="entries">
                    <span>
                        <i className="fa-regular fa-user"></i>
                        <h5>Email or Mobile Number</h5>
                    </span>
                    <input type="text" placeholder="Email or Mobile Number" />
                    <span>
                        <i className="fa-solid fa-lock"></i>
                        <h5>Password</h5>
                    </span>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="btn-container">
                    <button>Login</button>
                    <p>or</p>
                    <button>Create New Account</button>
                </div>
                <div className="forgot_sec">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login_pg