import "../../components/ResumesTemplates/Template1/style.css"

const Titles = (props) => {
    return (
        <>
        <h1 className="Title">{props.children}</h1>
        </>
    )
}
export default Titles;