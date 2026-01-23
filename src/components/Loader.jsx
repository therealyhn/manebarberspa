import loaderGif from '../assets/loader.gif'

function Loader() {
    return (
        <div id="loader-wrapper" className="fixed inset-0 z-50 flex items-center justify-center">
            <img src={loaderGif} alt="Loading..." className="w-20" /> 
        </div>
    )
}

export default Loader