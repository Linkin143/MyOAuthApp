import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import SignIn from './components/SignInForm';
import SignUp from './components/SignUpForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-950">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;