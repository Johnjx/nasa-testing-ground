const Main = (props) => {
    const { data } = props;

    return (
        <section className="flex flex-col items-center dark:bg-gray-600 dark:text-white
                            transition-all duration-300">
            <img className="max-w-7xl mt-6 rounded shadow-xl" src={data.hdurl} alt="Nasa feature today"/>
            <h3 className="text-3xl leading-loose p-4 font-semibold">Details about this Piece</h3>
            <p className="max-w-5xl text-xl leading-relaxed">{data.explanation}</p>
            <p className="p-4 text-lg font-bold">{data.copyright}</p>
        </section>
    )
}

export default Main;