import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SIH2024Page from "./pages/SIH2024Page";
import AboutSIHPage from "./pages/AboutSIHPage";
import Timeline from "./pages/Timeline";
import Schedule from "./pages/Schedule";
import SIH2023Page from "./pages/SIH2023Page";
import ProblemStatementsPage from "./pages/ProblemStatementPage";
import ComingSoonResultPage from "./pages/ComingSoonResultPage";
import ComingSoonWinnersPage from "./pages/ComingSoonWinnersPage";
import SIH_2023GrandFinalePage from "./pages/SIH_2023GrandFinalePage";
import SIH_2023WinnersPage from "./pages/SIH_2023WinnersPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { AdminLayout } from "./components/admin/Admin-Layout";
import { AdminContacts } from "./components/admin/Admin-Contacts";
import { AdminUsers } from "./components/admin/Admin-Users";
import { AdminTeams } from "./components/admin/Admin-Teams";
import { AdminLogout } from "./components/admin/Admin-Logout";
import AdminProblemStatements from "./components/admin/Admin-Problem-Statements";
import AdminResults from "./components/admin/Admin-Results";
import { AdminDashboard } from "./components/admin/Admin-Dashboard";
import SIH_2024GrandFinalePage from "./pages/SIH_2024GrandFinalePage";
import SIH_2024WinnersPage from "./pages/SIH_2024WinnersPage";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/about" Component={AboutSIHPage} />
        <Route path="/timeline" Component={Timeline} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/explore" Component={SIH2023Page} />
        <Route path="/problem statements" Component={ProblemStatementsPage} />

        {/* <Route path="/result" Component={ComingSoonResultPage} />
        <Route path="/winners" Component={ComingSoonWinnersPage} /> */}

        <Route path="/contact" Component={ContactPage} />

        <Route path="/register" Component={RegistrationPage} />

        {/* New Routes for SIH 1.0 */}
        <Route path="/sih 2023" Component={SIH2023Page} />
        <Route
          path="/sih 2023 grand finale"
          Component={SIH_2023GrandFinalePage}
        />
        <Route path="/sih 2023 winners" Component={SIH_2023WinnersPage} />

        {/* New Routes for SIH 2.0 */}
        <Route path="/sih 2024" Component={SIH2024Page} />
        <Route
          path="/sih 2024 grand finale"
          Component={SIH_2024GrandFinalePage}
        />
        <Route path="/sih 2024 winners" Component={SIH_2024WinnersPage} />

        <Route path="admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="teams" element={<AdminTeams />} />
          <Route
            path="problem-statements"
            element={<AdminProblemStatements />}
          />
          <Route path="results" element={<AdminResults />} />
          <Route path="logout" element={<AdminLogout />} />
        </Route>
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
};

export default App;
