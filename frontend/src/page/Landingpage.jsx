import Galaxy from "./Galaxy";
import Text from "./TextPrint";
import { useEffect } from "react";
import{useNavigate} from "react-router-dom";

export default function LandingPage() {
 const navigate = useNavigate();
  useEffect(() => {
    const timer= setTimeout(() => {
        navigate("/home");
    }, 50000);
    return ()=> clearTimeout(timer);
  }, [navigate]);

    return (
        <div>
            <div className="h-screen w-screen bg-black">
                <Galaxy mouseRepulsion
                    mouseInteraction
                    density={1}
                    glowIntensity={0.3}
                    saturation={0}
                    hueShift={140}
                    twinkleIntensity={0.3}
                    rotationSpeed={0.1}
                    repulsionStrength={2}
                    autoCenterRepulsion={0}
                    starSpeed={0.5}
                    speed={1}
                />
                <div>
                </div>
                <Text
                    text={["  We solve real-world problems with smart and scalable solutions.", "  Hire me to transform your ideas into reality.", " I deliver top-tier development with excellence and innovation."]}
                    typingSpeed={200}
                    pauseDuration={2000}
                    showCursor
                    cursorCharacter=""
                    deletingSpeed={100}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                    loop={false}
                    className="text-white text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </div>
    )
}
