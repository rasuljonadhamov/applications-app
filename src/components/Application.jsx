const Application = ({ id, title, desc, user, onDragStart }) => (
  <div
    className="bg-white rounded p-4 mb-4 shadow-md"
    draggable
    onDragStart={onDragStart}
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-2">{desc}</p>
    <div className="flex items-center">
      <img
        src={user.image}
        alt={user.name}
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <p className="text-gray-800 font-semibold">{user.name}</p>
        <p className="text-gray-600">{user.job}</p>
      </div>
    </div>
  </div>
);

export default Application;
