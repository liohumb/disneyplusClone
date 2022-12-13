# Disney+ Clone React App (sans HOOKS)
Un projet de clone de Disney+ avec des recherches de données à partir d'une API (Elorri)  

Formation M2i

Après avoir cloné le repository, déplacez vous dans le dossier :  
`cd disneyplusClone`  

Puis installer les dépendances :  
`npm install`

Et lancer l'application :  
`npm start`

## Instructions de l'API

### Obtenir les derniers films

Pour obtenir les derniers films, il faut interroger l'url suivante :

`https://elorri.fr/api/disney-plus/movies`

### Obtenir le détail d'un film

Pour obtenir le détail d'un film, il faut interroger l'url suivante :

`https://elorri.fr/api/disney-plus/movie/:id`

Exemple : `https://elorri.fr/api/disney-plus/movie/8587`

### Obtenir les films d'un studio

Pour obtenir les films d'un studio en particulier, il faut interroger l'url suivante :

`https://elorri.fr/api/disney-plus/company/:name`

Exemple : `https://elorri.fr/api/disney-plus/company/starwars`

### Obtenir des suggestions

Pour obtenir des suggestions de films, il faut interroger l'url suivante :

`https://elorri.fr/api/disney-plus/suggest`

Site réalisé par Lionel Humbert lors de la formation Développeur Web Web Mobile à M2i Formation Villeneuve d'Ascq
