const ResumeTemplates = (props) => {
  return (
    <>
      <article className="template-item">
        <figure>
          <a className="template-link" onClick={props.onClick}>
            <img src={props.src} alt={props.alt} className={props.className} />
            <figcaption>{props.children}</figcaption>
          </a>
        </figure>
      </article>
    </>
  );
};
export default ResumeTemplates;
