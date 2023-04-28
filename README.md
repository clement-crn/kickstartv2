
## Pourquoi "v2" ?

-refonte complète du front-end

-La v1 trichait en utilisant seulement le JsonRpcProvider de ethers pour toutes les transactions. Le site tournait avec seulement le manager pour vérifier si l'affichage des données était OK. Dans la v2, on peut jouer avec les comptes sur MetaMask.

**0) Installer next dans /front et hardhat dans /back**

## Lancer le site

**1) lancer le noeud local**

    npx hardhat node

**2) deployer le script**

    npx hardhat run --network localhost scripts/deploy.ts

**3) lancer le serv web**

    npm run dev


Fix en cours :

-conversion des montants

-cas particulier avec onApprove dans requestHome.js



-   Séparer les contrats en fichiers individuels /

-   Campain_contract => CampaignContract /

-   Errors messages sur les requires /

-   Ajouter des natspec comments : https://docs.soliditylang.org/en/v0.8.15/natspec-format.html?highlight=natspec (modifié)

-   Utilise des interfaces : https://github.com/Uniswap/v2-core/blob/master/contracts/interfaces/IERC20.sol (modifié)

-   Respect styleguide : https://docs.soliditylang.org/en/v0.8.15/style-guide.html?highlight=layout

-   Emettre des events pour chaque state update

    
    
 ## Fix en cours :
 
 -conversion des montants
 
 -cas particulier avec onApprove dans requestHome.js
 
## Le problème le plus courant
Si le nonce est trop élevé, il suffit de réitinialiser les données de compte. Sur metamask: "paramètres" > "paramètres avancés" > "Effacer les données de l'onglet"

