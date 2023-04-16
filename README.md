Mes divergences avec le projet initial :

-suppression de router.js. Ce fichier est remplacé par les routes
dynamiques
exemple : [address].js affichera la campagne selon address. Il sera même possible de récuperer
l'argument address avec le hook useRooter() pour pouvoir l'utiliser plus tard

-ajout de comptes hardhat manuellement. Ils sont dans accounts.json et ajoutés via hardhat.config

**1) lancer le noeud local**

    npx hardhat node

**2) deployer le script**

    npx hardhat run --network localhost scripts/deploy.ts

**3) lancer le serv web**

    npm run dev

Fix en cours :

-conversion des montants

-cas particulier avec onApprove dans requestHome.js

==========================================

-   Séparer les contrats en fichiers individuels /

-   Campain_contract => CampaignContract /

-   Errors messages sur les requires /

-   Ajouter des natspec comments : https://docs.soliditylang.org/en/v0.8.15/natspec-format.html?highlight=natspec (modifié)

-   Utilise des interfaces : https://github.com/Uniswap/v2-core/blob/master/contracts/interfaces/IERC20.sol (modifié)



-   Respect styleguide : https://docs.soliditylang.org/en/v0.8.15/style-guide.html?highlight=layout

-   Emettre des events pour chaque state update
