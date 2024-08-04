function RecomendedItem({url,price,key}) {
  return (
    <li className="w-full h-full m-auto relative ">
      <img
        className="w-full h-full lg:rounded-xl "
        src={url}
      />
      <p className="absolute text-lg p-1 bg-[#32323280] text-white font-bold bottom-1 rounded-r-xl">
       {price}
      </p>
    </li>
  );
}

export default RecomendedItem;
