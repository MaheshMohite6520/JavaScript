//! 1. reduce((accumulator, index, value, wholeArray), initialValue) => {}

//! It is an higher order function which accepts a callback-function & initial value as an argument.
//! It accepts 4 arguments
//! accumulator : It accumulates the value when we are iterating
//! initialValue : It is used to set the starting value for accumulator
//! It is used to perform mathamatical operations

// let arr = [10, 20, 30, 40];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("SUM: " + sum);

// let arr = [10, 20, 30, 40];

// let sum = arr.reduce((accumulator, value, index, wholeArray) => {
//   return (accumulator += value);
// }, 0);
// console.log(sum);

//! 2. find((value, index, wholeArray) => {})

// let arr = [10, 20, 30, 40];

// let value = arr.find((value, index, wholeArray) => {
//   return value > 20;
// });
// console.log(value);

let data = [
  {
    id: 1,
    name: "Bruce",
    email: "bwoolerton0@furl.net",
  },
  {
    id: 2,
    name: "Webster",
    email: "wskoughman1@bluehost.com",
  },
  {
    id: 3,
    name: "Teodor",
    email: "taleksahkin2@reverbnation.com",
  },
  {
    id: 4,
    name: "Adriano",
    email: "akase3@shop-pro.jp",
  },
  {
    id: 5,
    name: "Enid",
    email: "emattheissen4@bbc.co.uk",
  },
  {
    id: 6,
    name: "Carolann",
    email: "cwhybray5@time.com",
  },
  {
    id: 7,
    name: "Noam",
    email: "nbelsher6@loc.gov",
  },
  {
    id: 8,
    name: "Almeria",
    email: "akestin7@angelfire.com",
  },
  {
    id: 9,
    name: "Reinold",
    email: "rparncutt8@princeton.edu",
  },
  {
    id: 10,
    name: "Delphinia",
    email: "dmcnay9@washington.edu",
  },
  {
    id: 11,
    name: "Julio",
    email: "jlamertona@blogs.com",
  },
  {
    id: 12,
    name: "Elena",
    email: "esouttarb@economist.com",
  },
  {
    id: 13,
    name: "Jens",
    email: "jkemstonc@ihg.com",
  },
  {
    id: 14,
    name: "Denney",
    email: "ddelacroixd@seattletimes.com",
  },
  {
    id: 15,
    name: "Karlotte",
    email: "katkynse@digg.com",
  },
  {
    id: 16,
    name: "Peadar",
    email: "ppinchenf@hexun.com",
  },
  {
    id: 17,
    name: "Goldy",
    email: "ggarriockg@multiply.com",
  },
  {
    id: 18,
    name: "Chastity",
    email: "cpittsonh@uol.com.br",
  },
  {
    id: 19,
    name: "Rubi",
    email: "rhitzschkei@de.vu",
  },
  {
    id: 20,
    name: "Stafford",
    email: "scraddockj@noaa.gov",
  },
  {
    id: 21,
    name: "Matthiew",
    email: "mchampnissk@bloglovin.com",
  },
  {
    id: 22,
    name: "Agna",
    email: "apalerl@ihg.com",
  },
  {
    id: 23,
    name: "Jammal",
    email: "jbaldwinm@hexun.com",
  },
  {
    id: 24,
    name: "Jon",
    email: "jraincinn@shareasale.com",
  },
  {
    id: 25,
    name: "Sid",
    email: "sdorreo@ehow.com",
  },
  {
    id: 26,
    name: "Vanya",
    email: "vrountreep@i2i.jp",
  },
  {
    id: 27,
    name: "Jeffrey",
    email: "jfennessyq@wp.com",
  },
  {
    id: 28,
    name: "Melodee",
    email: "mhendrichr@statcounter.com",
  },
  {
    id: 29,
    name: "Kirbee",
    email: "kjeschners@ihg.com",
  },
  {
    id: 30,
    name: "Ninette",
    email: "noloughlint@elpais.com",
  },
  {
    id: 31,
    name: "Constantine",
    email: "ctonbridgeu@vimeo.com",
  },
  {
    id: 32,
    name: "Darcee",
    email: "dcreusv@example.com",
  },
  {
    id: 33,
    name: "Kaela",
    email: "klilleew@apple.com",
  },
  {
    id: 34,
    name: "Brewster",
    email: "bprazerx@foxnews.com",
  },
  {
    id: 35,
    name: "Bent",
    email: "bknockery@digg.com",
  },
  {
    id: 36,
    name: "Clement",
    email: "cganifordz@studiopress.com",
  },
  {
    id: 37,
    name: "Anjela",
    email: "acroxford10@ezinearticles.com",
  },
  {
    id: 38,
    name: "Phaedra",
    email: "pcocklin11@google.com.hk",
  },
  {
    id: 39,
    name: "Garvin",
    email: "gwix12@macromedia.com",
  },
  {
    id: 40,
    name: "Hersch",
    email: "hpantin13@upenn.edu",
  },
  {
    id: 41,
    name: "Oliy",
    email: "okamall14@t-online.de",
  },
  {
    id: 42,
    name: "Atlanta",
    email: "aolwen15@opensource.org",
  },
  {
    id: 43,
    name: "Hilary",
    email: "hstout16@amazon.com",
  },
  {
    id: 44,
    name: "Zarla",
    email: "zlouder17@wikimedia.org",
  },
  {
    id: 45,
    name: "Belicia",
    email: "bgoodbarr18@bbb.org",
  },
  {
    id: 46,
    name: "Bud",
    email: "bleverton19@cbslocal.com",
  },
  {
    id: 47,
    name: "Raddie",
    email: "rbettam1a@a8.net",
  },
  {
    id: 48,
    name: "Lanette",
    email: "ltille1b@nbcnews.com",
  },
  {
    id: 49,
    name: "Ceciley",
    email: "ccommins1c@godaddy.com",
  },
  {
    id: 50,
    name: "Therine",
    email: "thurcombe1d@clickbank.net",
  },
  {
    id: 51,
    name: "Carmelia",
    email: "cheskey1e@joomla.org",
  },
  {
    id: 52,
    name: "Vikki",
    email: "vboagey1f@stanford.edu",
  },
  {
    id: 53,
    name: "Ernesto",
    email: "eportman1g@ft.com",
  },
  {
    id: 54,
    name: "Kaiser",
    email: "kksandra1h@nhs.uk",
  },
  {
    id: 55,
    name: "Rahel",
    email: "rhirjak1i@reddit.com",
  },
  {
    id: 56,
    name: "Viviyan",
    email: "vkobpac1j@nba.com",
  },
  {
    id: 57,
    name: "Kata",
    email: "krowatt1k@hubpages.com",
  },
  {
    id: 58,
    name: "Maryjo",
    email: "moakey1l@alexa.com",
  },
  {
    id: 59,
    name: "Dickie",
    email: "ddeme1m@nationalgeographic.com",
  },
  {
    id: 60,
    name: "Rodd",
    email: "rcawthra1n@merriam-webster.com",
  },
  {
    id: 61,
    name: "Sydel",
    email: "sjenno1o@a8.net",
  },
  {
    id: 62,
    name: "Anatollo",
    email: "acouth1p@google.fr",
  },
  {
    id: 63,
    name: "Tiler",
    email: "tcareless1q@nsw.gov.au",
  },
  {
    id: 64,
    name: "Dominique",
    email: "dbrear1r@mysql.com",
  },
  {
    id: 65,
    name: "Lindi",
    email: "lmerrell1s@cargocollective.com",
  },
  {
    id: 66,
    name: "Gwenni",
    email: "gschnitter1t@wix.com",
  },
  {
    id: 67,
    name: "Chancey",
    email: "ccharleston1u@cpanel.net",
  },
  {
    id: 68,
    name: "Ediva",
    email: "ebloy1v@people.com.cn",
  },
  {
    id: 69,
    name: "Shadow",
    email: "sbaurerich1w@tiny.cc",
  },
  {
    id: 70,
    name: "Cyb",
    email: "cbowyer1x@webnode.com",
  },
  {
    id: 71,
    name: "Evangeline",
    email: "elinkie1y@simplemachines.org",
  },
  {
    id: 72,
    name: "Ardelis",
    email: "amulvenna1z@fotki.com",
  },
  {
    id: 73,
    name: "Bryna",
    email: "bnaper20@ebay.com",
  },
  {
    id: 74,
    name: "Julieta",
    email: "jpafford21@bizjournals.com",
  },
  {
    id: 75,
    name: "Etty",
    email: "ecutcliffe22@time.com",
  },
  {
    id: 76,
    name: "Norri",
    email: "npusey23@statcounter.com",
  },
  {
    id: 77,
    name: "Aldwin",
    email: "asnaddon24@sphinn.com",
  },
  {
    id: 78,
    name: "Lem",
    email: "ldanell25@flavors.me",
  },
  {
    id: 79,
    name: "Rayner",
    email: "rbransby26@amazon.co.uk",
  },
  {
    id: 80,
    name: "Sibelle",
    email: "sbengefield27@1und1.de",
  },
  {
    id: 81,
    name: "Lilyan",
    email: "lcobain28@netscape.com",
  },
  {
    id: 82,
    name: "Eyde",
    email: "ekeyte29@biblegateway.com",
  },
  {
    id: 83,
    name: "Nara",
    email: "nbeckitt2a@feedburner.com",
  },
  {
    id: 84,
    name: "Tana",
    email: "twoodwind2b@drupal.org",
  },
  {
    id: 85,
    name: "Haze",
    email: "htilson2c@harvard.edu",
  },
  {
    id: 86,
    name: "Drusi",
    email: "dmccleverty2d@webnode.com",
  },
  {
    id: 87,
    name: "Avram",
    email: "agiovannilli2e@seattletimes.com",
  },
  {
    id: 88,
    name: "Courtnay",
    email: "creaditt2f@rakuten.co.jp",
  },
  {
    id: 89,
    name: "Jenna",
    email: "jorrock2g@discuz.net",
  },
  {
    id: 90,
    name: "Garreth",
    email: "gnoad2h@shinystat.com",
  },
  {
    id: 91,
    name: "Marmaduke",
    email: "mdilworth2i@clickbank.net",
  },
  {
    id: 92,
    name: "Hedi",
    email: "hchander2j@deliciousdays.com",
  },
  {
    id: 93,
    name: "Kacey",
    email: "kcarletto2k@ning.com",
  },
  {
    id: 94,
    name: "Leann",
    email: "lrosson2l@cpanel.net",
  },
  {
    id: 95,
    name: "Delbert",
    email: "dbillison2m@wisc.edu",
  },
  {
    id: 96,
    name: "Dougie",
    email: "dbrolly2n@storify.com",
  },
  {
    id: 97,
    name: "Claudina",
    email: "cstanesby2o@goodreads.com",
  },
  {
    id: 98,
    name: "Loren",
    email: "lmcginney2p@is.gd",
  },
  {
    id: 99,
    name: "Leia",
    email: "lmountney2q@dropbox.com",
  },
  {
    id: 100,
    name: "Leia",
    email: "lkettlestringe2r@theatlantic.com",
  },
];

let cartItems = [];

let value = data.find((value) => {
  return (value.id = "45");
});

console.log(value);

cartItems.push(value);
console.log(cartItems);
