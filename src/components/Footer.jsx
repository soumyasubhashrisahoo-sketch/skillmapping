const Footer = ({ currentUserEmail, onLogout }) => (
  <footer className="border-t-[3px] border-black bg-gray-100 py-6 relative z-10 mt-auto">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-500 gap-2">
      <p>© 199X SkillMap Interactive. {currentUserEmail && `User: ${currentUserEmail}`}</p>
      <div className="flex gap-4">
        <span className="hover:text-black cursor-pointer">SYS.INFO</span>
        <span className="hover:text-black cursor-pointer">HELP.TXT</span>
        {currentUserEmail && (
          <span className="hover:text-red-500 cursor-pointer sm:hidden" onClick={onLogout}>
            LOGOUT
          </span>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
