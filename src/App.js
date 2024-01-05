import "./App.css";
import Partner from "./Component/Partner/Partner";
import Register from "./Component/RegForms/Registeration/Register";
import SpeakerApp from "./Component/SpeakerApp";
import ProfileOverview from "./Component/ProfileOverview/ProfileOverview";
import Contacts from "./Component/Contacts/Contacts";
import ComingSoon from "./Component/RegForms/WeAreComing/Index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/speaker-application" element={<SpeakerApp />} />
        <Route path="/profile" element={<ProfileOverview />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
