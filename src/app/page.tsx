import Header from "./_components/header";
import Spinner from "./_components/spinner";
import TabBar from "./_components/tab-bar";

export default function Home() {
    return (
        <div className="flex flex-col items-center mb-20">
            <Header />
            <Spinner />
            <TabBar />
        </div>
    );
}
