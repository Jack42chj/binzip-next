import Image from "next/image";

const Spinner = () => {
    return (
        <div className="z-997 w-full h-full">
            <Image
                className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                alt="spinner-icon"
                src="/webp/spinner.webp"
                height={80}
                width={80}
                unoptimized
            />
        </div>
    );
};

export default Spinner;
