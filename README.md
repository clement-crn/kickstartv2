Mes divergences avec le projet initial :

-suppression de router.js. Ce fichier est remplacé par les routes
dynamiques, directement dans les fichiers
exemple : [address].js affichera la campagne selon address. Il sera même possible de récuperer
l'argument address avec le hook useRooter() pour pouvoir l'utiliser ensuite

-suppression des methodes getInitialProps(). On passera plutot par une fonction flechee et
useState pour jouer avec nos variables avant le rendu

-utilisation de JsonRpcProvider() au lieu de metamask

-utilisation des instances du contrat principal directement dans le code. Mais possible d'utiliser
campaign.js plus tard. Le debug etait simplement plus facile
