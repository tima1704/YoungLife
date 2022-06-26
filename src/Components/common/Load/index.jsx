import Style from "./index.module.css";
const Load = () => {
  return (
    <section className={Style.root}>
      <div className={Style.lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default Load;
