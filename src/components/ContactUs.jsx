import FormContactUs from "./FormContactUs";
import NavBar from "./NavBar";

export default function ContactUs() {
  return (
    <>
      <NavBar></NavBar>
      <div className="grid grid-cols-2 grid-rows-1 h-dvh ">
        <div className="flex items-center justify-center flex-col">
          <div>
            <h1 className="text-4xl">CONTACT US</h1>
            <p className="text-2xl">Do you have any problems or questions ?</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <FormContactUs></FormContactUs>
        </div>
      </div>
    </>
  );
}
