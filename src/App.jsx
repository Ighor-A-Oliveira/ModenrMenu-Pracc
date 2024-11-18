import FlyoutLink from "./Components/FlyoutLink"; 
import FlyoutMenu from "./Components/FlyoutMenu";

/* Shows the page */
function App() {
  return (
    /* just centering the menu */
    <div className="flex h-screen justify-center bg-neutral-900 px-3 py-12">
      <FlyoutLink href="#" FlyoutContent={FlyoutMenu}>
        Pricing
      </FlyoutLink>
    </div>
  );
}

export default App;
