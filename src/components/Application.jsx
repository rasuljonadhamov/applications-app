import icon from "/src/images/tabler_users.svg";
import doc from "/src/images/tabler_file-description.svg";
const Application = ({ id, title, desc, user, onDragStart }) => (
  <div
    className="bg-white rounded p-3 mb-4 cursor-pointer shadow-md"
    draggable
    onDragStart={onDragStart}
  >
    <h3 className="text-sm font-semibold ">{title}</h3>
    <p className="text-gray-700 mb-2 text-xs">{desc}</p>
    <ul className="flex gap-2 pt-2 pb-3">
      <li className="text-[#856EC6] bg-[#F6F2FF]">В приоритете</li>
      <li className="flex gap-1">
        <img src={icon} alt="user icon" />
        <span>{Math.round(Math.random() * 10)}</span>
      </li>
      <li className="flex gap-1">
        <img src={doc} alt="document icon" />
        <span>{Math.round(Math.random() * 100)}</span>
      </li>
    </ul>
    <div className="flex items-center">
      <img
        src={user.image}
        alt={user.name}
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <p className="text-gray-600 text-xs">{user.job}</p>
        <p className="text-gray-800 font-semibold">{user.name}</p>
      </div>
    </div>
  </div>
);

export default Application;
