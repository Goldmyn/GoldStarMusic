import { loader } from "../assets";


const Loader = ({title}) => (

  <div className="w-full flex justify-center items-center flex-col">
    <img 
        src={loader} alt="loader" className="w-"
    />
  </div>
);

export default Loader;
