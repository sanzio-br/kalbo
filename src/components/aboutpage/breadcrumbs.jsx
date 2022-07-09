export default function BreadcrumbsBlogs() {
    return (
        <section className="breadcrumbs-custom-inset">
            <div className="breadcrumbs-custom context-dark bg-overlay-60">
                <div className="container">
                    <h2 className="breadcrumbs-custom-title">Blogs</h2>
                    <ul className="breadcrumbs-custom-path">
                        <li><a href="/">Home</a></li>
                        <li className="active">Blogs</li>
                    </ul>
                </div>
                <div className="box-position"></div>
            </div>
        </section>
    )
}