<script>
  Moralis.initialize("kCzMXtR88TkYnI93WrswBd2HCdTbuEj0PYxY3aE5");
  Moralis.serverURL = "https://1wnxk59wqrqv.usemoralis.com:2053/server";
  let status = "Out";
  async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.Web3.authenticate();
    }
    console.log("logged in user:", user);
    status = "In";
  }

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
    status = "Out";
  }
</script>

<p align="center">
  <button id="btn-login" on:click={login}>Login</button>
  --- Logged {status} ---
  <button id="btn-logout" on:click={logOut}>Logout</button>
</p>

<style>
  button {
    font-size: 20px;
    color: green;
  }
</style>
