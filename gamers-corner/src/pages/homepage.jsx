import herobg from '../assets/hero-background.webp';

export default function Homepage(){
    return (
        <>
            <main>
                <div style={{
                    height: '40rem',
                    background: `url(${herobg})`,
                    backgroundSize: 'cover',
            }} className="container-fluid p-0">
                    <div className="p-2 text-white h-100 w-100 d-flex flex-column justify-content-center align-items-md-start" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))'}}>
                        <h1 className="ms-md-5 text-center display-1 text-light">Gamers' Corner</h1>
                        <p className="ms-md-5 text-center display-6 text-light" style={{lineHeight: '4rem'}}>Shop for premium gaming accessories
                        & <span className="text-bg-success p-2 m-2 rounded-2 fw-bolder bg-opacity-100">LEVEL UP</span> your game!
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}