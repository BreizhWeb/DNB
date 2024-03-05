

function genererMotDePasse(longueur, options) {
    // Définir les caractères possibles
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

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
        motDePasse += caracteres.charAt(Math.floor(Math.random() * 10));
    }

    if (options.symboles) {
        motDePasse += "!@#$%^&*()";
    }

    // Retourner le mot de passe
    return motDePasse;
}

module.exports = genererMotDePasse;