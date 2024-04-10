import Image from "next/image";
import Header from "@/app/_components/header";

const Login = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Header />
            <div className="max-w-[385px] w-full h-[70vh] flex flex-col justify-center items-center px-5 gap-6 font-Pretendard">
                <Image
                    alt="logo"
                    src="/svg/logo.svg"
                    width={180}
                    height={57}
                    priority
                />
                <div className="text-white mt-4">로그인/회원가입</div>
                <div className="cursor-pointer w-full h-14 flex justify-center items-center gap-2 text-default bg-white rounded-lg">
                    <Image
                        alt="google-icon"
                        src="/svg/google.svg"
                        width={24}
                        height={24}
                    />
                    <div>구글 로그인으로 시작하기</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
