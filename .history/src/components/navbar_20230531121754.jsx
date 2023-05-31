import useSta
import DropBar from "./Layout/DropBar";
import Header from "./Layout/Header";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <>
      <Header />
      <DropBar />
    </>
  );
};

export default Navbar;
