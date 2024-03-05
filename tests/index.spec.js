const genererMotDePasse = require('../index');

describe('Génère un mot de passe', () => {
    it('Génère un mot de passe avec la longueur spécifiée', () => {
        expect(genererMotDePasse(8)).toHaveLength(8);
    });

    it('Génère un mot de passe avec les majuscules si l\'option est activée', () => {
        const options = { majuscules: true };
        const motDePasse = genererMotDePasse(8, options);
        expect(/[A-Z]/.test(motDePasse)).toBeTruthy();
    });

    it('Génère un mot de passe avec des chiffres si l\'option est activée', () => {
        const options = { chiffres: true };
        const motDePasse = genererMotDePasse(8, options);
        expect(/[0-9]/.test(motDePasse)).toBeTruthy();
    });

    it('Génère un mot de passe avec des symboles si l\'option est activée', () => {
        const options = { symboles: true };
        const motDePasse = genererMotDePasse(8, options);
        expect(/[!@#$%^&*()]/.test(motDePasse)).toBeTruthy();
    });
});
