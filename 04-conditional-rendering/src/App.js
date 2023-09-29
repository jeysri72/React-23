
function HomePage() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
    </>
  );
}


function LoginPage() {
  return (
    <>
      <h1>Login here! </h1>
    </>
  );
}

function App() {
  let isLoggedIn = true;
  let content;
  if (isLoggedIn) {
    content = <HomePage />;
  } else {
    content = <LoginPage />;
  }

  return (
    <div>
      {isLoggedIn ?
        (
          <HomePage />
        ) : (
          <LoginPage />
        )}

 
      
        {content}
     
  

    </div>
  );
}

export default App;
