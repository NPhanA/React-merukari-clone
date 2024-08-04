import { Notifications } from "@mui/icons-material";
import Logo from "../../assets/Mercari_logo.svg.png";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
function Header() {
  const [visibleItems, setVisibleItems] = useState([]);
  useEffect(() => {
    const navArray = [
      "おすすめ",
      "マイリスト",
      "ゲーム・おもちゃ・グッズ",
      "本・雑誌・漫画",
      "メンズ",
      "レディース",
      "ベビー・キッズ",
      "すべて見る",
    ];
    // Function to update visible items based on window width
    const updateVisibleItems = () => {
      const cutoffWidth = 768; // Set the viewport width cutoff

      const newVisibleItems =
        window.innerWidth >= cutoffWidth && window.innerWidth < 1024
          ? [...navArray.slice(0, -3), navArray[navArray.length - 1]]
          : navArray;

      setVisibleItems(newVisibleItems);
    };

    // Call the function initially
    updateVisibleItems();

    // Add event listener for window resize
    window.addEventListener("resize", updateVisibleItems);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  return (
    <header className="bg-[#222] w-full  h-auto fixed top-0  border-b border-gray-300 z-50 border-solid">
      <div className="wrapper flex lg:w-[95%] lg:m-auto h-full items-center">
        <div className="w-full lg:hidden" />
        <div className="flex w-4/6  justify-start lg:gap-5 items-center lg:p-3  ">
          <img src={Logo} className="w-full h-1/2 lg:w-1/5 text-white" />
          <div className="hidden w-[560px] flex-shrink-0 lg:flex relative ">
            <input
              placeholder="なにを探しますか？"
              className="hidden placeholder:p-4 placeholder:text-gray-500 lg:inline-block w-full bg-[#2d2d2d]"
            />
            <IconButton className="p-0 m-0 absolute top left-[-7%] z-10">
              <SearchIcon fontSize="medium" className="text-gray-300 " />
            </IconButton>
          </div>
        </div>
        <div className=" hidden lg:flex justify-end gap-5 w-2/6 h-full items-center text-white">
          <button>ログイン</button>
          <button>会員登録</button>
          <div>
            <Notifications />
          </div>
          <div className="h-full text-base w-[62px] bg-red-500 rounded text-center p-2">
            <a href="../" className="">
              出品
            </a>
          </div>
        </div>
        <div className="icon-group w-full flex items-center  justify-end lg:hidden">
          <button>
            <SearchIcon fontSize="medium" className="text-white " />
          </button>
        </div>
        <div className="lg:hidden">
          <IconButton className="p-0 m-0 ">
            <CheckIcon className="text-white " />
          </IconButton>
        </div>
      </div>
      <div className="w-full h-[37px] flex justify-between items-center text-sm border-b border-gray-300 border-solid lg:hidden">
        <p className="text-white ml-[10px]">メルカリへようこそ！</p>
        <div className="h-full flex justify-around gap-3 p-2  text-[#30B2FF] ">
          <button className="">会員登録</button>
          <button className="">ログイン</button>
        </div>
      </div>
      <ul className="overflow-auto whitespace-nowrap lg:flex lg:justify-center lg:items-center">
        {visibleItems.map((item, index) => {
          return (
            <li
              key={index}
              className="text-gray-400  inline-block p-[18px] text-center text-gray-400"
            >
              {item}
            </li>
          );
        })}
      </ul>
{/* 
      <div className="inset-0 fixed h-screen w-screen  overflow-hidden">
            <p>content</p>
      </div> */}
      
    </header>
    
  );
}

export default Header;
