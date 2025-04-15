function Navbar() {
    return (
      <nav className="bg-white shadow fixed w-full top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between">
          <span className="font-bold text-xl">teiku portfolio</span>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#career" className="hover:text-blue-500">Career</a></li>
            <li><a href="#work" className="hover:text-blue-500">Work</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  