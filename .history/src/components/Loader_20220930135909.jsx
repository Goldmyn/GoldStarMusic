import { loader } from "../assets";


const Loader = ({title}) => (

  <div className="w-full flex justify-center items-center flex-col">
    <img 
        src={loader} alt="loader"
    />
  </div>
);

export default Loader;
