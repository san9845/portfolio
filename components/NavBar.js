// const navBarStyle = {
//     backgroundColor: "red",
//     color: "white",
//     width: "100%",
//     height: "60px"
//   };
  
  const NavBar = () => (
    <div className="md:container md:mx-auto px-3 py-3 flex justify-between ">
      <h2 className="font-logo text-2xl">{'<San.dev />'}</h2>
          <h2 className="text-2xl"><a href="mailto:iamsk14@live.com">Fire me an email!</a></h2>
    </div>
  );
  
  export default NavBar;