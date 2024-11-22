import FormComponent from "../components/FormComponent";

export default function MainPage() {

  return (
    <div className="bg-blue-50 border w-full h-auto">
      <div className=" my-20 bg-white px-10 py-5 lg:max-w-5xl md:max-w-3xl w-[88%] mx-auto border shadow-sm flex flex-col">
        <div className="text-3xl font-semibold text-left">
          <h3>Gift Card</h3>
        </div>
        <hr className="lg:mt-5 mt-5 text-gray-400 h-2" />
        <FormComponent />
      </div>
    </div>
  );
}
