import AnimatedPage from "./Animations/AnimatedPage";

const Main = (props) => {
    const { data } = props;

    return (
        <AnimatedPage>
        <section className="flex flex-col items-center dark:bg-gray-600 dark:text-white
                            transition-all duration-300">
            <img className="w-screen max-h-screen" src={data.hdurl} alt="Nasa feature today"/>
            <h3 className="text-3xl leading-loose p-4 font-semibold">Details about this Piece</h3>
            <p className="2xl:max-w-5xl 2xl:text-2xl text-xl leading-relaxed lg:max-w-2xl sm:max-w-md xs:text-lg xs:max-w-xs">{data.explanation}</p>
            <p className="p-4 text-lg font-bold">{data.copyright}</p>
            <div className="h-12 w-screen bg-sec">
                <p className="text-center p-4 dark:text-black">© 2022 John Ruddock.</p>
            </div>
        </section>
        </AnimatedPage>
    )
}

export default Main;