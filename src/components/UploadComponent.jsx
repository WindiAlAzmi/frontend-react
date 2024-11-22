import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { putImage } from "../features/imageSlice";

export default function UploadComponent() {
  const dispatch = useDispatch();

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      dispatch(putImage(URL.createObjectURL(file)));
    } else {
      alert("Please drop a valid image file.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col my-10 gap-5">
      <h4 className="text-left">File Upload</h4>
      <div
        className="border border-black  border-dashed flex flex-col py-10 bg-blue-50 justify-center items-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="">
          <CloudArrowUpIcon color="gray" height="40" />
        </div>
        <h4 className="font-medium text-lg">Browse Files</h4>
        <h5 className="text-gray-500 text-xs">drag and drop file to upload </h5>
      </div>
    </div>
  );
}
