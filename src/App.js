import "./App.css";
import Partner from "./Component/RegForms/Partner/Partner";
import Register from "./Component/RegForms/Registeration/Register";
import SpeakerApp from "./Component/RegForms/SpeakerApp/index";
import ProfileOverview from "./Component/CustomComponents/ProfileOverview/ProfileOverview";
import Contacts from "./Component/RegForms/Contacts/Contacts";
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
