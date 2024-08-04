import { ArrowDropDown, KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";

function DropDownButton({ title, texts }) {
  const [click, setClick] = useState(false);
  const [isLargeViewPort, setIsLargeViewport] = useState(
    window.innerWidth >= 1024
  );
  useEffect(() => {
    function handleResize() {
      setIsLargeViewport(window.innerWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function handleClick() {
    if (!isLargeViewPort) {
      setClick(!click);
    }
  }

  return (
    <div className="lg:flex-col mr-6 lg:w-1/4">
      <button
        onClick={!isLargeViewPort ? handleClick : null}
        className="flex justify-between items-center mb-2 lg:mb-0 w-full h-[48px] text-white"
      >
        <span className="font-bold text-sm">{title}</span>
        <div className="lg:hidden">
          {click ? <KeyboardArrowUp /> : <ArrowDropDown />}
        </div>
      </button>
      <ul>
        {texts.map((text, index) => (
          <li
            className={`text-white text-sm ${
              !click && !isLargeViewPort ? "hidden" : ""
            }`}
            key={index}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownButton;
