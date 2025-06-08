import { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email.includes('@') || password.length < 6) {
      setError('Please enter valid user credentials.');
    } else {
      setError('');
      alert("Submitted\n" + `Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <div className="App">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        /><br />
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        /><br />
        
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
        
        {error && <p className="error-message">{error}</p>}<br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
