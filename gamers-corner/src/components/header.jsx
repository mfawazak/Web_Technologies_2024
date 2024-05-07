import { Link } from 'react-router-dom';

export default function Header(){
    
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-primary">
                <div className="container-fluid">
                    <div className="navbar-brand">Gamers' Corner</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto">
                            <li className="nav-item w-xs-25 mx-auto p-2">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item w-sm-25 mx-auto p-2">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item w-xs-25 mx-auto p-2">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                       </ul>
                        <div className="d-md-flex justify-content-end pt-5 pt-md-0">
                            <ul className="navbar-nav">
                                <li className="nav-item p-2 m-auto m-md-0">
                                    <Link to="/auth/login"><button className="btn btn-light"><a href="#" className="nav-link">Login</a></button></Link>
                                </li> <span className="d-none d-md-block mt-4" >|</span>
                                <li className="nav-item p-2 m-auto m-md-0">
                                    <button className="btn btn-dark"><a href="#" className="nav-link text-white">Signup</a></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </nav>
        </header>
    )
}