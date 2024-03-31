export const consultarCEP = async (cep: string) => {
    // Verifica se o CEP possui o formato correto
    const cepRegex = /^[0-9]{8}$/;
    if (!cepRegex.test(cep)) {
        console.log("Formato de CEP inválido.");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            console.log("CEP não encontrado na base de dados.");
            return;
        } else return data;

    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
};