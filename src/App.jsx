import "./App.css";
import ProfilePage from "./pages/profile/ProfilePage";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const searches = {
    staredSearches: [
      "Software Engineer",
      "Computer Hardware Engineer",
      "Network Engineer",
      "Technical Support Engineer",
      "Network administrator",
      "Management",
      "Data Analysis",
      "Computer Technician",
    ],
    history: [
      "Past Search 1",
      "Past Search 2",
      "Computer and Information...",
      "Database Administrator",
      "Computer Security",
      "Computer System Analyst",
    ],
  };
  const myBoards = {
    boards: ["Board 1", "Board 2", "Board 3"],
    boardAgents: ["Board agent 1", "Board agent 2", "Board agent 3"],
  };
  return (
    <div className="container">
      <Sidebar searches={searches} myBoards={myBoards} userName="Clarla" />
      <ProfilePage />
    </div>
  );
}

export default App;
