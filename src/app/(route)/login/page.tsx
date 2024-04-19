import Image from "next/image";
import Header from "@/app/_components/header";
import AuthButton from "./_components/auth-button";

const Login = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center font-Pretendard text-white">
            <Header />
            <div className="max-w-[385px] w-full h-[70vh] flex flex-col justify-center items-center px-5 gap-6">
                <Image
                    alt="logo"
                    src="/svg/logo.svg"
                    width={180}
                    height={57}
                    priority
                />
                <div className="mt-4">로그인 / 회원가입</div>
                <AuthButton />
            </div>
        </div>
    );
};

export default Login;

//test
