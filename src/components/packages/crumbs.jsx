export default function Crumbs(props) {
    return (
        <section className="breadcrumbs-custom-inset">
            <div className="breadcrumbs-custom context-dark bg-overlay-60">
                <div className="container">
                    <h2 className="breadcrumbs-custom-title">packages</h2>
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="/">kalbo</a></li>
                        <li><a href="/packages">packages</a></li>
                        <li className="active">{props.title}</li>
                    </ul>
                </div>
                <div className="box-position"></div>
            </div>
        </section>
    )
}