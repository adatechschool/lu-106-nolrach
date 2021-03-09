#Comprendre

- Tests sont importants pour réfléchir à différents usecases et donc tester la solidité de son code, ce n'est pas un outil pour débugger

- Un bon test c'est un test qui échoue car il permet de détecter un bug
Bien réalisés, ils ne font pas forcément perdre du temps puisque qu'ils permettent de limiter le nombre d'anomalies lors de la prod

- TDD : Test Driven Developement ⇒ penser aux tests à réaliser avant d'écrire le code


Pourquoi faire des tests ?
- très utile pour ne pas avoir à répéter manuellement un test d'un bout de code
-
- les tests automatiques peuvent être exécutés dès qu'il y a un changement dans le code pour s'assurer que tout fonctionne toujours (et cela sans recourir à un test manuel)
-
- Avantages : avoir une erreur dès qu'on "casse" notre code, gain de temps, réfléchir en amont aux bugs que l'on peut rencontrer, on écrit un code plus qualitatif


Types de tests :
Les tests automatiques sont du code qui permettent de tester du code.

Il en existe plusieurs types :

- Tests unitaires (unit tests): tests complètement isolés
⇒ ex : tester une fonction

- Tests d'intégration (Integration tests) : qui a des dépendances dans le coed
ex : une fonction qui appelle une fonction

- Tests de parcours/validation (end-to end/ E2E tests/user interface tests) : qui teste toute l'appli ou une partie de l'application
- 
Note : la complexité de ces tests est différente. Les tests unitaires sont les plus simples à écrire car c'est un petit bout de code indépendant que l'on souhaite tester. Généralement, plus il y a des dépendances dans le code, plus ce sera compliqué d'écrire le test/ et de repérer d'où vient l'erreur.
C'est pour cette raison qu'on écrit beaucoup de tests unitaires, quelques tests d'intégrations et moins souvent des E2E.

Comment écrire un test ?

Il nous faut trois outils :
- un test runner : exécute les tests, et récapitule les résultats (ex : Mocha)

- une bibliothèque d'assertion (assertion library) : définir la logique de test et ses conditions (ex: Chai)
ex : Jest fait les deux

- Pour les tests end to end, on peut avoir besoin en plus d'un headless browser (un navigateur où on ne clique pas manuellement) ex : Peppeteer



Test unitaire (effectué par la machine) : vérifie si une petite partie du code renvoie l’info demandée
Test manuel (effectué par l’humain) : vérification globale (exemple : teste les fonctionnalités d’un site par le client)

Selon la méthodologie de travail choisie (agile ou séquentielle), on utilisera les tests adéquates.
En méthode agile on utilisera 3 types de tests :
-Intégration (machine)
-Fonctionnels (machine)
-Acceptation (humain)

-Test d’intégration : la fonctionnalité s’intègre-t-elle au reste du programme ?
-Test fonctionnel : tester le parcours utilisateur autour d’une fonctionnalité
-Test d’acceptation : la fonctionnalité correspond-elle aux attentes ?

En méthode séquentielle, 3 types aussi :
-Intégration (machine)
-Validation (humain)
-Recette (humain)

-Intégration : s’intéressera aux spécifications techniques
-Validation : aux spécifications fonctionnelles
-Recette : aux attentes du client
