import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Home() {
  const showMessage = () => {
    alert("Welcome to John Bernard's Portfolio!");
  };

  return (
    <div className="john-card">
      <h1 style={{ textTransform: 'uppercase', color: '#00bfff', fontWeight: 'bold', letterSpacing: '1px' }}>Introduction</h1>
      <h1>Hi There!</h1>
      <h1 style={{ marginBottom: '15px' }}>I'm John Bernard C. Adayo</h1>
      <img src="/jb.jpg" alt="My Picture" />
      <p className="email-badge">johnbernardadayo@gmail.com</p>
      
      <p>Welcome to my official application framework space. Use the sidebar menu options to explore my education profile background and specific skill listings.</p>
      <button className="action-btn" onClick={showMessage}>Click Me</button>
    </div>
  );
}