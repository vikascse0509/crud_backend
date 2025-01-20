const Header = () => {
  return (
    <div className="bg-black text-white p-3">
      <ul className="flex justify-end gap-6 mr-28 m-2">
        <li className="bg-transparent hover:underline">
          <a href="">Home</a>
        </li>
        <li className="hover:underline">
          <a href="">About</a>
        </li>
        <li className="hover:underline">
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
