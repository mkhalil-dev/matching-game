import LoginForm from "../components/forms/LoginForm";

const Login: React.FC = () => {
  // When the user submits the form, we save the username in the local storage.
  const handleSubmit = (username: string) => {
    localStorage.setItem("username", username);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
