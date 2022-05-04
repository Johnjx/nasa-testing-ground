const className = 'dark'
const bodyClass = window.document.body.classList;

const togg = () => {
    bodyClass.toggle(className)
}

const Header = (props) => {
    const { data } = props;

    return (
        <div className="bg-prim text-center dark:bg-slate-900 dark:text-white">
            <h1 className="text-5xl leading-relaxed font-heading">{data.title}</h1>
            <h2 className="text-4xl leading-relaxed">Nasa Feature of the Day</h2>
            <h4 className="text-3xl leading-snug">{data.date}</h4>
            <button onClick={togg}>Switch</button>
        </div>
    )
}

export default Header;