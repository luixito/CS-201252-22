const axios = require("axios");
const url = "http://localhost:4000/api_v1/user/login";

function getUser() {
  return axios.get(url);
}

function getUserPermissions() {
  return axios.get("url");
}

Promise.all([getUser(), getUserPermissions()]).then(function (results) {
  const token = "results[0]";
  const id_user = "results"[1];
  console.log(token, id_user);
});

return (
  <div class="main">
    <input type="checkbox" id="chk" aria-hidden="true"></input>

    <div class="signup">
      <form onSubmit={handleSubmit}>
        <label for="chk" aria-hidden="true">
          Sign up
        </label>
        <input
          type="text"
          name="txt"
          placeholder="Nombre de Usuario"
          value={state.job}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={state.job}
          onChange={handleChange}
        ></input>
        <input
          type="phone"
          name="phone"
          placeholder="Telefono"
          value={state.job}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="pswd"
          placeholder="Contraseña"
          value={state.job}
          onChange={handleChange}
        ></input>
        <button>Sign up</button>
      </form>
    </div>

    <div class="login">
      <form>
        <label for="chk" aria-hidden="true">
          Login
        </label>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={state.job}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="pswd"
          placeholder="Contraseña"
          value={state.job}
          onChange={handleChange}
        ></input>
        <button onClick={Axios()}>Login</button>
      </form>
    </div>
  </div>
);

export default getUser;
