"use client";

interface VideoProps {
    link: string;
}

const Video = ({ link }: VideoProps) => {
    return (
        <div className="relative pb-[56.25%] lg:mr-2.5">
            <div className="w-full h-full absolute">
                <iframe
                    className="w-full h-full"
                    title="YouTube video player"
                    src={link}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default Video;
