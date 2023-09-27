import { FaCheck } from "react-icons/fa";

function Priorities({ title, content }) {
  return (
    <div className="flex space-x-4 items-start justify-start mb-8">
      <div className="block">
        <div className="bg-secondary mt-1 p-1 rounded-lg inline-block">
          <FaCheck className="font-semibold text-[#faeb97] " />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg  text-secondary">{title}</h3>
        <p className="text-sm text-[#333]">
         {content}
        </p>
      </div>
    </div>
  );
}

export default Priorities;
