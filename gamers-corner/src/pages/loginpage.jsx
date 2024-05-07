import { useForm } from 'react-hook-form';

export default function LoginPage(){

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    function submit(data){
        console.log(data);
    }
    
    return (
        <>
            <div className="vh-100 bg-body-tertiary d-flex justify-content-center align-items-center" data-bs-theme="dark">
                <div className="p-5 bg-dark border border-2 rounded-2 border-light-subtle">
                    <p className="display-6 bolder text-light text-center mb-5">Login to <span className="border rounded-2 text-bg-success p-2 bold"><strong>Gamers' Corner</strong></span></p>
                    <form onSubmit={handleSubmit(submit)}>
                       <div className="mb-3">
                            <label htmlFor="username" className="form-label text-light">Username</label>
                            <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            className="form-control"
                            {...register("username", {required: true})} />
                            {errors.username && <p className="text-warning mt-2">username is required</p>}
                        </div>
                       <div className="mb-3">
                            <label htmlFor="password" className="form-label text-light">Password</label>
                            <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="form-control"
                            {...register("password", {required: true})} />
                            {errors.password && <p className='text-warning mt-2'>Password is required</p>}
                        </div>
                        <button type="submit" className="btn btn-secondary w-100">login</button>
                    </form>
                </div>
            </div>
        </>
    )
}