import reactLogo from "./assets/react.svg"; //harus import karena react.svg berada di src dan folder src diperlakukan oleh React/vite/webpack sebagai kode yang harus diproses oleh bundler

function Header() {
  return (
    <header className="app-header">
      <img src={reactLogo} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
