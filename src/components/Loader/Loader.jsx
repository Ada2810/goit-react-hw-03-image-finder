import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <TailSpin color="#007bff" height={50} width={50} />
  </div>
);

export default Loader;
