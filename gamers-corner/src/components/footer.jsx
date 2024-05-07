export default function Footer(){
    return (
        <footer className="bg-dark pt-5 pb-2">
            <div className="w-50 m-auto d-flex justify-content-around">
                <div>
                    <p className="fs-4 bolder text-center text-light">Pages</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center bg-transparent border-0 text-light">
                            <a className="link-opacity-75-hover">Home</a>
                        </li>
                        <li className="list-group-item text-center bg-transparent border-0 text-light">
                            <a className="link-opacity-75-hover">About Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="fs-4 bolder text-center text-light">Shop</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center bg-transparent border-0 text-light">
                            <a className="link-opacity-75-hover">Mice</a>
                        </li>
                        <li className="list-group-item text-center bg-transparent border-0 text-light">
                            <a className="link-opacity-75-hover">Keyboard</a>
                        </li>
                        <li className="list-group-item text-center bg-transparent border-0 text-light">
                            <a className="link-opacity-75-hover">Monitors</a>
                        </li>
                        <li className="list-group-item text-center bg-transparent border-0 text-light">
                            <a className="link-opacity-75-hover">Headsets</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="fs-6 w-50 text-center mx-auto text-light pt-5">All Rights Reserved</p>
        </footer>
    )
}