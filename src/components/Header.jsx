import AnimatedPage from "./Animations/AnimatedPage";

const className = 'dark'
const bodyClass = window.document.body.classList;

const togg = () => {
    bodyClass.toggle(className)
}

const Header = (props) => {
    const { data } = props;

    return (
        <AnimatedPage>
        <div className="bg-prim text-center dark:bg-slate-900 dark:text-white
                         transition-all duration-300 p-6">
            <h1 className="text-4xl leading-relaxed font-heading">{data.title}</h1>
            <h2 className="text-4xl leading-relaxed">Nasa Feature of the Day</h2>
            <h4 className="text-3xl leading-snug p-4">{data.date}</h4>
            <button className="p-4" onClick={togg}>Dark/🌓/Light</button>
        </div>
        </AnimatedPage>
    )
}

export default Header;