
import { NavigateNext } from "@mui/icons-material";
function ItemList({ title, viewAllText, items }) {
  return (
    <div className="w-full mt-6">
    <div className="flex justify-between">
      <h3 className="text-gray-500 font-bold text-lg">{title}</h3>
      <div className="text-blue-500 text-sm">
        <span>{viewAllText}</span>
        <NavigateNext />
      </div>
    </div>
    <ul className="overflow-auto whitespace-nowrap w-full flex justify-evenly gap-2 mt-4 scrollbar-hide">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center text-center min-w-[90px] max-w-[120px]"
        >
          <img
            src={item.link}
            className="object-cover rounded-full w-24 h-24 bg-[#2d2d2d]"
            alt={item.name}
          />
          <span className="text-white text-xs w-full mt-2 break-words whitespace-normal">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
  )
}
export default ItemList