/*Exercice 1*/
//let numberOfSeasons = 6;
//let numberOfEpisodes = 12;
//console.log(numberOfSeasons, numberOfEpisodes);

/*Exercice 2 */

/*let episodeTime = 45;
let commercialTime = 5;

let totalShowTime = episodeTime + commercialTime * numberOfSeasons + numberOfEpisodes;*/

//console.log(totalShowTime);

/*Exercice 3*/

/*const hoursPerDays = 24;
const minutesPerhours = 60;
const secondsPerminutes = 60;*/

//console.log(hoursPerDays, minutesPerhours, secondsPerminutes);

/* Exercice 4*/

//let episodeTitle = 'Titre de la série';
//let episodeDuration = 40;
//let hasBeenWatched = 'True';

//console.log(episodeTitle, episodeDuration, hasBeenWatched);

/*Exercice 5*/


/*let episode = {
  title: 'Titre de lépisode',
  duration: 40,
  hasBeenWatched: 'True'
}*/

//console.log(episode);

/* Exercice 6 */

/*let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;*/

//console.log(episodeTitle, episodeDuration, episodeHasBeenWatched);

/* Exercice 7 */

/*class Episode {
  constructor(title, duration, hasBeenWatched) {

    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode("Le Titre", 40, 'True');
let secondEpisode = new Episode("Le Titre 2", 30, 'False');
let thirdEpisode = new Episode("Le Titre 3", 35, 'True');*/

//console.log(firstEpisode); 

/* Exercice 8 */

/*let episodes = [];

let firstEpisode = 'Episode 1';
let secondEpisode = 'Episode 2';
let thirdEpisode = 'Episode 3';

console.log(firstEpisode, secondEpisode, thirdEpisode);*/

/* Exercice 9 */

/*class Episode {
  constructor(title, duration, minutesWatched) {

    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

/*let firstEpisode = new Episode("Le Titre", 40, 'True');
let secondEpisode = new Episode("Le Titre 2", 30, 'False');
let thirdEpisode = new Episode("Le Titre 3", 35, 'True');

let episodes = [];

episodes.push("Le Titre");
episodes.push("Le Titre 2");
episodes.push("Le Titre 3");

episodes.pop();

episodes.numberOfepisodes = episodes.length;*/

//console.log(episodes);

/* Exercice 10 */

/*class Episode {
  constructor(title, duration, minutesWatched) {

    this.title = title;
    this.duration = duration;


    if (minutesWatched === duration) {
      this.hasBeenWatched = true;
    }
    else if (minutesWatched >= 0) {
      this.hasBeenWatched = false;
    }
  }
}


let firstEpisode = new Episode('Episode 1', 45, 45);
let secondEpisode = new Episode('Episode 2', 45, 10);
let thirdEpisode = new Episode('Episode 3', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];*/

//console.log(episodes);

/* Exercice 11 */

class Episode {
  constructor(title, duration, minutesWatched) {

    this.title = title;
    this.duration = duration;
    //this.watchedText = true || false;

    if (minutesWatched === 0) {
      this.watchedText = 'Pas encore regardé' && false;
    }

    else if (minutesWatched > 0 && minutesWatched < duration) {
      this.watchedText = 'En train de regarder' && true;
    }

    else {
      this.watchedText = 'Déjà regardé' && false;
    }
  }
}

let firstEpisode = new Episode('Episode 1', 45, 45);
let secondEpisode = new Episode('Episode 2', 45, 10);
let thirdEpisode = new Episode('Episode 3', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

console.log(episodes);


