export default function Resume() {
    return (
        <div className="overflow-hidden scroll-none">
            <embed
                src="/KennethWang-Resume.pdf"
                type="application/pdf"
                className="border-none bg-none overflow-hidden w-screen md:w-full h-screen"
            />
        </div>
    );
}