type HeaderParams={
    text:string;
    textSub?:string;
  }
  function Header({text,textSub}:HeaderParams){
    return (
      <div><h1>{text}</h1>
      <h3>{textSub}</h3>
      </div>
    )
  }

  export default Header;