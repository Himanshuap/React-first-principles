import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function Home() {
  return <h1>Home Page (anyone can see)</h1>;
}

function Dashboard() {
  return <h1>Dashboard (logged-in only)</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}

// the gatekeeper
function ProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  const isLoggedIn = true;   // flip to true to test the other case

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/dashboard">Dashboard</Link>
        {' | '}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;