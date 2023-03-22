Mes divergences avec le projet initial :

-suppression de router.js. Ce fichier est remplacé par les routes
dynamiques
exemple : [address].js affichera la campagne selon address. Il sera même possible de récuperer
l'argument address avec le hook useRooter() pour pouvoir l'utiliser plus tard

-ajout de comptes hardhat manuellement. Ils sont dans accounts.json et ajoutés via hardhat.config


**lancer le noeud local**
    npx hardhat node 
    
**deployer le script**
    npx hardhat run --network localhost scripts/deploy.ts

**lancer le serv web**
    npm run dev
    
    
 ***Fix en cours :
 -conversion des montants
 -cas particulier avec onApprove dans requestHome.js***
 

