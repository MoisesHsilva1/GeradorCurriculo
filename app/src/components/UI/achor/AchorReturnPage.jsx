const AchorReturnPage = (props) => {
  return (
    <>
      <a onClick={props.onClick} className={props.className}>
        {props.children}
      </a>
    </>
  );
};
export default AchorReturnPage;
