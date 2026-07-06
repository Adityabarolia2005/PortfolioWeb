import { ScaleLoader } from "react-spinners";

function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#040212]">
      <ScaleLoader height={50} width={4} loading color="#38bdf8" />
    </div>
  );
}

export default PageLoader;