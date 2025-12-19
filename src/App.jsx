import Footer from "./component/Footer";
import Header from "./component/Header";

// PAGES
import Accueil from "./pages/accueil/Accueil";
import Inscription from "./pages/inscription/Inscription";
import Dashboard from "./pages/dashboard/Dashboard";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Support from "./pages/support/Support";

  // authentificationn
import Login from "./pages/authentification/Login";
import Logout from "./pages/authentification/Logout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    // Router va rendre notre app et ses composants facilement naviguable
<Router>
  <Header/>
  {/* Dans Routes on met tous les composant qui sont susceptible d'etre naviguable */}
  <Routes>
    {/* Dans route on va afficher chaque composant individuellement grace a un path et un element qui est le composant lui meme */}
<Route path="/" element={<Accueil/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/inscription" element={<Inscription/>}/>
<Route path="/profile" element={<Dashboard/>} />
<Route path="/ecrire" element={<Write/>}/>
<Route path="/reglages" element={<Settings/>}/>
<Route path="/support" element={<Support/>}/>

  </Routes>


<Footer/>
</Router>
  )
}

export default App
