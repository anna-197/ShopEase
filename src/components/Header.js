//  LOGO
export const Logo = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://scontent.fdel1-6.fna.fbcdn.net/v/t1.18169-9/11008826_442944775857565_3502259416364063964_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=AX39et6r9q8AX-7KyjR&_nc_ht=scontent.fdel1-6.fna&oh=00_AfAIB1FRS4muvkuAO2IqkNS9KJvOe_TVwPViIJ7QWiEL7g&oe=642FA250" />
    </a>
  );



//   HEADER RENDERING LOGO
  
  const Header = () => {
    return (
      <div className="header">
        <Logo />
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
  
            <li>Sign Up</li>
  
            <li>Log In</li>
  
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;