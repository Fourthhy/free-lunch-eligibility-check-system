import HeaderBar from "./reusableComponents/HeaderBar"

function LoginPage() {
    return (
        <>
        <HeaderBar />
        <div 
            className="h-[calc(100vh-145px)] w-[100%] bg-cover bg-center relative"
            style={{'backgroundImage': 'url(/background-image.svg)'}}>
            <div className="absolute inset-0 bg-[rgba(31,52,99,0.8)]"></div>
            Content
        </div>
        </>
    )
}

export default LoginPage