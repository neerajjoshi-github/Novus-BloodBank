import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation1 from "../../assets/animations/animation-1.json";
import { Button } from "antd";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="h-[80vh] flex flex-col">
        <div className="py-10 px-5 sm:px-20 flex items-center justify-between">
          <span className="font-mont font-bold text-black">NOVUS</span>
          <div className="flex items-center gap-10 ">
            <Link
              className="no-underline text-black font-semibold group relative"
              to="/register"
            >
              Register
              <span className="group-hover:w-full transition-all duration-300 w-0 absolute left-0 bottom-0 h-px bg-black"></span>
            </Link>
            <Link
              className="no-underline text-black font-semibold group relative"
              to="/login"
            >
              Login
              <span className="group-hover:w-full transition-all duration-300 w-0 absolute left-0 bottom-0 h-px bg-black"></span>
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-1 px-4 sm:px-10">
          <h1 className="font-black text-5xl sm:text-7xl md:text-[8vw] md:leading-[8vw] w-3/4 text-primary z-10">
            Streamline Blood Donation Records
          </h1>
          <div className="absolute right-[3.5vw] rotate-12 w-[40vw]">
            <img
              className="w-full object-contain drop-shadow-2xl"
              src="/images/hero-image.png"
              alt="Record Keeper"
            />
          </div>
        </div>
      </div>

      <div className="w-full text-white py-10 px-5 sm:p-20 flex flex-col gap-3 lg:flex-row bg-[#090D15]">
        <h2 className="text-xl xs:text-2xl md:text-3xl xl:text-4xl font-bold whitespace-nowrap">
          Welcome To Novus Platform
        </h2>
        <div className="max-lg:ml-4 flex justify-center w-full">
          <p className="w-full lg:w-3/4 xl:w-1/2 text-sm md:text-base xl:text-lg font-medium">
            We’re your ultimate blood bank storage solution, offering you a
            digital platform to securely log and manage all your donated blood
            records. No more painful spreadsheets or lost data, let us save your
            day and lives!
          </p>
        </div>
      </div>

      <div className="bg-[#ECE2F4] w-full flex flex-col items-center justify-center gap-6 md:gap-10 py-10 px-5 sm:p-20 text-black">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 p-2 rounded-lg bg-white/70 flex flex-col items-center justify-center">
            <div className="h-1/3">
              <img
                className="w-full h-full object-contain"
                src="/svgs/record-saved.svg"
                alt="Record Saved"
              />
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-1">
              1000+
            </span>
            <span>Records Saved</span>
          </div>
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 p-2 rounded-lg bg-white/70 flex flex-col items-center justify-center">
            <div className="h-1/3">
              <img
                className="w-full h-full object-contain"
                src="/svgs/donars.svg"
                alt="Record Saved"
              />
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-1">
              400+
            </span>
            <span>Donors Listed</span>
          </div>
          <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 p-2 rounded-lg bg-white/70 flex flex-col items-center justify-center">
            <div className="h-1/3">
              <img
                className="w-full h-full object-contain"
                src="/svgs/lives-impacted.svg"
                alt="Record Saved"
              />
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 mb-1">
              150+
            </span>
            <span>Lives Impacted</span>
          </div>
        </div>

        <div className="w-full sm:w-[30vw] text-center flex flex-col items-center">
          <Lottie
            className="w-[max(300px,25vw)] text-center"
            animationData={Animation1}
            loop={true}
          />
          <h4 className="text-2xl font-bold">
            Transform Your Blood Bank Today
          </h4>
          <p className="my-4  text-sm">
            Ready to revolutionize the way you manage donated blood? Sign up now
            and witness the seamless blood record management experience for a
            profound impact on countless lives.
          </p>

          <Button
            onClick={() => navigate("/register")}
            type="primary"
            size="large"
          >
            Register Today
          </Button>
        </div>

        <div className="w-full p-5 sm:p-10 md:px-20 md:pt-10 md:pb-20">
          <div className="flex items-center justify-center">
            <img
              className="w-full max-h-[720px] max-w-[1280px] drop-shadow-xl"
              src="/images/image-2.png"
              alt=""
            />
          </div>
          <h3 className="text-3xl font-bold mt-12">Why NOVUS?</h3>
          <div className="text-xs sm:text-sm md:text-base mt-5 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-5 md:gap-10">
            <p>
              We provide a user-friendly and intuitive web app for blood banks
              to efficiently track and manage donated blood. With real-time
              updates and secure data storage, you can trust us to deliver a
              comprehensive solution for all your blood bank management needs.
            </p>
            <p>
              Our committed support ensures a smooth transition to our platform
              and assistance every step of the way. With BloodBayers, you can be
              sure that you’re choosing the best in blood bank management
              solutions.
            </p>
          </div>
        </div>

        <div className="">
          <div className="w-full flex items-center justify-center gap-10">
            <BsFacebook className="cursor-pointer text-xl sm:text-2xl hover:text-primary transition duration-300" />
            <BsInstagram className="cursor-pointer text-xl sm:text-2xl hover:text-primary transition duration-300" />
            <BsTwitter className="cursor-pointer text-xl sm:text-2xl hover:text-primary transition duration-300" />
          </div>
          <p className="mt-5 text-xs sm:text-sm md:text-base">
            © 2023 novus, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
