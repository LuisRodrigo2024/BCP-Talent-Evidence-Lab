import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import ChallengeBankPage from "./pages/ChallengeBankPage";
import ChallengeDetailPage from "./pages/ChallengeDetailPage";
import TeamWorkspace from "./pages/TeamWorkspace";
import AssessmentCenter from "./pages/AssessmentCenter";
import Portfolio from "./pages/Portfolio";
import OpportunitiesHub from "./pages/OpportunitiesHub";
import SeniorReferralRequest from "./pages/SeniorReferralRequest";
import CompanyDashboard from "./pages/CompanyDashboard";
import ValidatorDashboard from "./pages/ValidatorDashboard";
import HRDashboard from "./pages/HRDashboard";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "student", Component: StudentDashboard },
      { path: "challenges", Component: ChallengeBankPage },
      { path: "challenges/:id", Component: ChallengeDetailPage },
      { path: "team/:teamId", Component: TeamWorkspace },
      { path: "assessment", Component: AssessmentCenter },
      { path: "portfolio", Component: Portfolio },
      { path: "oportunidades", Component: OpportunitiesHub },
      { path: "fast-track", Component: OpportunitiesHub },
      { path: "senior-referral", Component: SeniorReferralRequest },
      { path: "company", Component: CompanyDashboard },
      { path: "validator", Component: ValidatorDashboard },
      { path: "hr", Component: HRDashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
