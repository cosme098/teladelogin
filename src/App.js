import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Sing In</title>
        <main className="content">
      <header className="cabecalho">
        <h1 className="title">Entrar</h1>
      </header>
      <form>
       <input type="text" id="log"/>
       <input type="password" id="pass"/>
       <input type="submit" value="Login" id="login" onclick="asd()"/>
      </form>
      <a href="https://www.google.com.br/" className="registrar"> Registre-se</a>
        </main>
    </div>
  );
}

export default App;
