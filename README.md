## Mes divergences avec le projet initial :

-suppression de router.js. Ce fichier est remplacé par les routes
dynamiques
exemple : [address].js affichera la campagne selon address. Il sera même possible de récuperer
l'argument address avec le hook useRooter() pour pouvoir l'utiliser plus tard

-ajout de comptes hardhat manuellement. Ils sont dans accounts.json et ajoutés via hardhat.config

-abis isolés dans /backend/abis


## Pourquoi "v2" ?

-Partie web completement refaite de zero

-La v1 trichait en utilisant seulement le provider rpc de ethers pour toutes les transactions. Le site tournait avec seulement le manager pour vérifier si l'affichage des données était OK. Dans la v2, on peut jouer avec les comptes sur MetaMask.



**1) lancer le noeud local**

    npx hardhat node 
    
**2) deployer le script**

    npx hardhat run --network localhost scripts/deploy.ts

**3) lancer le serv web**

    npm run dev
    
**4) ajouter les comptes sur MetaMask depuis backend/accounts.json**
    
 ## Fix en cours :
 
 -conversion des montants
 
 -cas particulier avec onApprove dans requestHome.js
 

