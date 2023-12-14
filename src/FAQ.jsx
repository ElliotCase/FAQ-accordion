import Accordion from "./Accordion";
import starIcon from "./assets/icon-star.svg";

function FAQ() {
  return (
    // Use min-h-screen to ensure the container takes up at least the height of the screen
    // Adjust padding as needed
    <div className="flex justify-center items-center min-h-[65vh] p-10">
      <div className="w-full max-w-[37.5rem] rounded-2xl bg-white p-[2.5rem] ">
        <div className="header flex items-center gap-3">
          <img src={starIcon} alt="Star" />
          <h1 className="text-black text-4xl font-bold ">FAQ</h1>
          <h2 className=""></h2>
        </div>
        <Accordion />
      </div>
    </div>
  );
}

export default FAQ;
