// FUNÇÃO COM FALHA NA VALIDAÇÃO

function validadorEmail(email) {
    var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return emailRegex.test(String(email).toLocaleLowerCase());
}

module.exports = validadorEmail;