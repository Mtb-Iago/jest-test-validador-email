const validateEmail = require('./email-validado-correto') // or ./email-validado-correto

describe('Validador de email', () => {
    test('Deve aceitar email válido (Classe válida)', () => {
        expect(validateEmail('iago@outlook.com')).toBe(true)
    })

    test('Não deve aceitar email sem @', () => {
        expect(validateEmail('iagooutlook.com')).toBe(false)
    })

    test('Não deve aceitar email com mais de 64 caracteres', () => {
        var aux = ''
        for (let index = 0; index <= 100; index++) 
            aux += 'a'
        const email = aux +'@outlook.com'
        expect(validateEmail(email)).toBe(false)
    })
})