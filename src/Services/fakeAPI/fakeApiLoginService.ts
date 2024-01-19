export const login = async (username: string, password: string) => {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      // Armazenar o token no localStorage
      localStorage.setItem("authToken", data.token);

      // Redirecionar ou realizar outras ações após o login bem-sucedido
      console.log("Login bem-sucedido!");
    } else {
      console.error("Credenciais inválidas");
    }
  } catch (error) {
    console.error("Erro durante o login:", error);
  }
};
