import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "やあ！ Santiagoです。", "This's my portfolio.", "I'm a Backend developer (｡•̀ᴗ-)✧"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="absolute top-[-50px] flex flex-col justify-center items-center p-0 w-full h-full text-center">
        <BackgroundCircles />
        <img 
            src="https://cdn.discordapp.com/attachments/953786839435718706/1149177595540275320/satoru_original_x_riko_noise_parental_cutted.png" 
            alt=""
            className="relative rounded-full h-36 w-36 mx-auto object-cover"/>
        <div className="pt-4">
            <h2 className="text-sm uppercase text-[#752c92] tracking-[15px]">
                Engineering Student
            </h2>
            <h1 className="pt-4 text-2xl lg:text-4xl font-semibold scroll-px-10">
                <span>{text}</span>
                <Cursor cursorColor="white" />
            </h1>
        </div>
    </div>
  )
}
