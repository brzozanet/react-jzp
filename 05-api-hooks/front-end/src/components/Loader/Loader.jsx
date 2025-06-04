import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <ThreeCircles
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};
