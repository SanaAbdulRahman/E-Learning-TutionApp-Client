import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
//import { useRouter } from "next/router";

const Hero: FC = () => {
    const [search, setSearch] = useState("");
    //const router = useRouter();

    const handleSearch = () => {
        if (search.trim() !== "") {
            //   router.push(`/courses ? title = ${ search } `);
        }
    };

    return (
        <section className="hero flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container flex flex-col md:flex-row items-center justify-between">
                {/* Banner Image */}
                <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[600px] 1500px:w-[600px] 1100px:h-[500px] 1100px:w-[500px] h-[40vh] left-5 w-[40vh] hero_animation rounded-[50%] 1100px:left-8 1500px:left-14"></div >
                <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">

                    <Image
                        src={require("../../../public/assests/banner-img-1.png")}
                        width={400}
                        height={400}
                        alt=""
                        layout="responsive" // Add this line to make the image responsive
                        className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
                    />
                </div>

                {/* Hero Content */}
                <div className="w-full md:w-1/2 px-4 py-8 md:p-12 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Improve Your Online Learning Experience Instantly
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6">
                        We have 40k+ online courses & 500k+ registered students. Find your desired course from them.
                    </p>

                    <div className="1500px:w-[60%] 1100px:w-[95%] w-[85%] h-[35px] bg-transparent relative ">
                        <input
                            type="search"
                            placeholder="Search Courses..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                        />
                        <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[35px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"
                            onClick={handleSearch}
                        >
                            <BiSearch className="text-white" size={30} />
                        </div>
                    </div>




                    <br />
                    <br />
                    <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
                        <Image
                            src={require("../../../public/assests/client-1.jpg")}
                            alt=""
                            className="rounded-full"
                        />
                        <Image
                            src={require("../../../public/assests/client-2.jpg")}
                            alt=""
                            className="rounded-full ml-[-20px]"
                        />
                        <Image
                            src={require("../../../public/assests/client-3.jpg")}
                            alt=""
                            className="rounded-full ml-[-20px]"
                        />

                        <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[15px] font-[400]">
                            500K+ People already trusted us.{" "}
                            <Link
                                href="/courses"
                                className="dark:text-[#46e256] text-[crimson]"
                            >
                                View Courses
                            </Link>{" "}
                        </p>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Hero;
