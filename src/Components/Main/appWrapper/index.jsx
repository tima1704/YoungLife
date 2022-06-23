import { Foot, Head } from "..";
export const AppWrapper = ({ children }) => {
  return (
    <div>
      <Head/>
      <div className="container body">{children}</div>
      <Foot />
    </div>
  );
};