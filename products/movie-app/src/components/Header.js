import Style from '../css/Header.module.css';
function Header() {
  return (
    <div className={Style.container}>
      <h1>
        <span>Movieflex</span>
      </h1>
    </div>
  );
}
export default Header;
