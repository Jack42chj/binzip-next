const ListSkeleton = () => {
    return Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-full flex flex-col">
            <div className="w-[173px] h-[247px] rounded-xl bg-skeleton animation-pulse" />
        </div>
    ));
};

export default ListSkeleton;
