### *Expliquer*

Afin de préparer votre échange avec l’encadrante, voici une liste de termes à savoir expliquer :

- **Les différents types de tests (unitaires, d’intégration, de parcours/validation)**

**Tests unitaires (unit tests)**: tests complètement isolés

⇒ ex : tester une fonction

**Tests d'intégration (Integration tests)** : tests d'un code qui a des dépendances, test général de la solution

ex : une fonction qui appelle une fonction

**Tests de parcours/validation (end-to end/ E2E tests/user interface tests)** : qui teste toute l'appli ou une partie de l'application, très orienté utilisateur (tester le parcours utilisateur).

Note : la complexité de ces tests est différente. Les tests unitaires sont les plus simples à écrire car c'est un petit bout de code indépendant que l'on souhaite tester. Généralement, plus il y a des dépendances dans le code, plus ce sera compliqué d'écrire le test/ et de repérer d'où vient l'erreur.

C'est pour cette raison qu'on écrit beaucoup de tests unitaires, quelques tests d'intégrations et moins souvent des E2E.

- **Qu’est ce que le code coverage ?**

En génie logiciel, la **couverture de code** est une mesure utilisée pour décrire le taux de code source exécuté d'un programme quand une suite de test est lancée. Un programme avec une haute couverture de code, mesurée en pourcentage, a davantage de code exécuté durant les tests ce qui laisse à penser qu'il a moins de chance de contenir de bugs logiciels non détectés.

La mesure de ce taux implique souvent l'utilisation de tests unitaires.

- **Qu’est ce que le TDD ?**

Test-Driven Development (TDD), ou Développements Pilotés par les Tests en français, est une méthode de développement de logiciel, qui consiste à concevoir un logiciel par petits pas, de façon itérative et incrémentale, en écrivant chaque test avant d'écrire le code source et en remaniant le code continuellement.

- **A quoi doit répondre un test unitaire (F.I.R.S.T.)?**

**F pour Fast**

S’exécute rapidement (quelques millisecondes, afin d’avoir la capacité de faire des milliers de tests sans contrainte de temps) et est donc automatisé

**I pour Independant / Isolated**

Est indépendant des facteurs externes et des autres tests

**R pour Repeatable**

Les résultats obtenus doivent toujours être les mêmes afin de s’assurer de la fiabilité des retours de celui-ci.

**S pour Self-validating**

Le test doit être capable de vérifier lui même les résultats 
automatiquement. On évitera les vérifications humaines qui peuvent 
devenir rapidement chronophage et parfois amener à l’erreur (dû souvent à une lassitude de répéter régulièrement les mêmes tests).

**T pour Thorough**

Le test devra couvrir l’ensemble des cas de tests et non couvrir 100%
des données. La raison est simple: en couvrant 100% des données, nous 
aurions des tests trop longs qui pourraient durer des jours à chaque 
exécution.

Pour approfondir la qualité de nos tests, voici quelques astuces à suivre :

- tester les limites applicatives
- utiliser des volumes de données conséquents et représentatifs de la réalité
- tester les différents types d’utilisateurs de l’application pour
s’assurer que les droits sont biens définis (sécurité des données)
- utiliser des valeurs proches des limites gérées par les types
utilisés (erreurs de débordement et de débordement des types de données
comme un entier)
- tester les exceptions et les erreurs
- tester des arguments erronés
