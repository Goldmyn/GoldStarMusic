import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {

    const genreTitle = "Pop";

    return (

        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreTitle}
                </h2>
                <select className="bg-black text-gray-300 p-3 te">

                </select>
            </div>
        </div>
    );
    
};
export default Discover;
