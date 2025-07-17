import videoFile from "../assets/veo-video.mp4"

function by10() {
    return(
        <div>
            <p>
            hello
        </p>

        <video height='50%' width='50%' controls >
            <source src={videoFile} type="video/mp4"/>
            the video aint playing kido!
        </video>


        </div>
    );
}

export default by10 