import videoFile from "../assets/veo-video.mp4"
import anakinVideo from "../assets/Anakin_vs_Palpatine_Video.mp4"
import "../styles/by10.css"

function by10() {
    return(
        <div>

        <h4 style={{ color: "#f5f5f5", marginLeft: "13%" }}>Star Wars Video</h4>

        <video height='50%' width='50%' controls className="center" >
            <source src={anakinVideo} type="video/mp4"/>
            the video aint playing kido!
        </video>

        <video height='50%' width='50%' controls className="center" >
            <source src={videoFile} type="video/mp4"/>
            the video aint playing kido!
        </video>
        </div>
    );
}

export default by10 