import { motion } from "framer-motion"

export default function BackgroundCircles() {
  return (
    <motion.div 
      initial={{ opacity: 0}}
      animate={{ 
        scale: [1,1.2,1.7,2,1], 
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%", "20%", "50%", "70%", "20%"],}}
      transition={{ duration: 5}}
      className="relative flex justify-center items-center">
        <div className="absolute border border-[#00FFFF] rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
        <div className="rounded-full border border-[#00FFFF] h-[300px] w-[300px] absolute mt-52"></div>
        <div className="rounded-full border border-[#00FFFF] opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse"></div>
        <div></div>
    </motion.div>
  )
}
