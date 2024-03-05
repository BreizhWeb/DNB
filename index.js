

function genererMotDePasse(longueur, options) {
    // Définir les caractères possibles
    const caracteres = "abcdefghijklmnopqrstuvwxyz";
    const symboles = "!@#$%^&*()";

    // Définir la longueur par défaut
    longueur = longueur || 12;

    // Définir les options par défaut
    options = options || {};

    // Génération d'un mot de passe aléatoire
    let motDePasse = "";
    for (let i = 0; i < longueur; i++) {
        motDePasse += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    // Appliquer les options
    if (options.majuscules) {
        motDePasse = motDePasse.replace(/./g, function(c) {
            return Math.random() < 0.5 ? c.toUpperCase() : c;
        });
    }

    if (options.chiffres) {
        motDePasse = motDePasse.replace(/./g, function(c) {
            return Math.random() < 0.3 ? Math.floor(Math.random() * 10) : c;
        });
    }

    if (options.symboles) {
        motDePasse = motDePasse.replace(/./g, function(c) {
            return Math.random() < 0.3 ? symboles.charAt(Math.floor(Math.random() * symboles.length)) : c;
        });
    }

    // Retourner le mot de passe
    return motDePasse;
}

module.exports = genererMotDePasse;