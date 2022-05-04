const className = 'dark'
const bodyClass = window.document.body.classList;

const togg = () => {
    bodyClass.toggle(className)
}

const Header = (props) => {
    const { data } = props;

    return (
        <div className="bg-prim text-center dark:bg-slate-900 dark:text-white
                         transition-all duration-300 p-6">
            <h1 className="text-4xl leading-relaxed font-heading">{data.title}</h1>
            <h2 className="text-4xl leading-relaxed p-3">Nasa Feature of the Day</h2>
            <h4 className="text-3xl leading-snug p-4">{data.date}</h4>
            <button className="p-4" onClick={togg}>Switch</button>
        </div>
    )
}

export default Header;