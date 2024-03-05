# # Générateur de mots de passe Node.js

Ce projet est un générateur de mots de passe simple écrit en Node.js. Il génère des mots de passe aléatoires en utilisant des caractères alphanumériques et spéciaux, avec une longueur spécifiée par l'utilisateur.


## Installation

Pour installer ce générateur de mots de passe, vous pouvez utiliser npm (Node Package Manager). Assurez-vous d'avoir Node.js installé sur votre système.
```bash 
npm install doriannicolasbaptiste-password-generator
```

## Utilisation

Pour utiliser le générateur de mots de passe, vous pouvez l'importer dans votre projet Node.js et appeler la fonction `generatePassword()` en spécifiant la longueur du mot de passe souhaité.

```javascript
const generatePassword = require('@doriannicolasbaptiste-password-generator/genererMotDePasse');

const password = generatePassword(12); // Génère un mot de passe de 12 caractères
console.log(password);
```



## Options

Vous pouvez également spécifier des options supplémentaires pour personnaliser la génération du mot de passe. Par exemple, vous pouvez exclure certains caractères spéciaux ou n'utiliser que des lettres majuscules et minuscules.

```javascript
const options = {
  length: 16,
  includeUppercase: true,
  includeNumbers: false,
  includeSymbols: false
};

const password = genererMotDePasse(options);
console.log(password);

```

Les options disponibles sont :

-   `length`: La longueur du mot de passe (par défaut: 12)
-   `includeUppercase`: Inclure des lettres majuscules (par défaut: false)
-   `includeNumbers`: Inclure des chiffres (par défaut: false)
-   `includeSymbols`: Inclure des caractères spéciaux (par défaut: false)

## Licence

Ce projet est sous licence ISC.