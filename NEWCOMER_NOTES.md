## Installation

Je commence par modifier le .gitignore pour exclure les fichiers de configurations liés à l'utilisation de Webstorm.

Je vois qu'il y a un package.json par dossier. Peut être serait-il judiicieux d'en avoir un seul commun. Tant que le nombre de dépendances et de scripts est faible, tout rassembler en un fichier pourrait être intéressant. Cela permettrai d'ailleurs de lancer une seul fois la commande yarn et d'éviter de dupliquer les dépendances téléchargés dans node-modules si certaines sont communes au différentes sous parties du projet.

Je créé 2 configuration de run pour le lancement de l'API et du front.

Après avoir démarrer l'API et le front, je teste les routes disponibles et le formulaire de recherche. Je teste aussi les cas d'erreurs pour voir si tout est déjà géré.

## Fonctionnement
Au démarrage, le serveur récupère sous forme de csv les codes postaux de France et de Grande-Bretagne via une api publique. 
Le soucis est que cette opération est très longue et donc les codes postaux ne sont pas disponibles tout de suite

## Améliorations
L'api /postal-codes ne gère pas le cas d'erreur lorsque le paramètre postalCode est absent, c'est une amélioration à ajouoter au backlog. 
Il serait intéressant de démarrer le serveur d'API avec un nodemon ou un forever pou éviter de devoir redémarrer manuellement à chaque modification du code.
Revoir l'initialisation des codes postaux.
Etendre la récupération des codes postaux

## Problèmes rencontrés
Erreur spawn yarn ENOENT lors du yarn dans les dossiers cli-tools et api.
En cherchant sur stackoverflow et consort je découvre que le problème vient de windows pour qui yarn doit être yarn.cmd.

child_process.spawn("yarn", ... devient donc child_process.spawn("yarn.cmd", ...
Je chercherai un fix définitf plus tard, le problème ne touchant à priori que les environemetns Windows.


