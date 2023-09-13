"use client"

import Hero from "./Hero"

export default function BackgroundVideo({videopath, children}) {

    const path_video = "/assets/videos/video-xd.mp4"
  return (
    <>
        <div className="relative ovdiverflow-hidden w-full h-full">
            <video 
                autoPlay="autoPlay"
                loop="loop"
                muted
                className="w-full ">
                <source src={path_video} type="video/mp4"/>
            </video>
            <section className="snap-center"><Hero /></section>
            
        </div>
        {/* <Hero /> */}
    </>
  )
}
