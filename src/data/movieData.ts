export interface Movie {
  id: number;
  title: string;
  genre: string[];
  year: number;
  plot: string;
  director: string;
  rating: number;
}

export const movieDatabase: Movie[] = [
  // Existing Hollywood movies
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: ["Drama"],
    year: 1994,
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    rating: 9.3
  },
  {
    id: 2,
    title: "The Godfather",
    genre: ["Crime", "Drama"],
    year: 1972,
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    rating: 9.2
  },
  {
    id: 3,
    title: "Inception",
    genre: ["Action", "Sci-Fi", "Thriller"],
    year: 2010,
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    rating: 8.8
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: ["Crime", "Drama"],
    year: 1994,
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    rating: 8.9
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    rating: 9.0
  },

  // Tamil Movies
  {
    id: 6,
    title: "Nayakan",
    genre: ["Crime", "Drama"],
    year: 1987,
    plot: "A common man's struggles against a corrupt police force put him on the wrong side of the law. He becomes a don, who is loved by many but his growing power makes him a target.",
    director: "Mani Ratnam",
    rating: 8.7
  },
  {
    id: 7,
    title: "Anbe Sivam",
    genre: ["Drama", "Comedy"],
    year: 2003,
    plot: "Two men, one a cynical businessman and the other a physically disabled but optimistic socialist, embark on a journey that changes their perspectives on life.",
    director: "Sundar C.",
    rating: 8.8
  },
  {
    id: 8,
    title: "Super Deluxe",
    genre: ["Drama", "Thriller"],
    year: 2019,
    plot: "Four different stories about a husband, a father, a godman and a son whose lives are affected by their choices.",
    director: "Thiagarajan Kumararaja",
    rating: 8.5
  },
  {
    id: 9,
    title: "Vikram Vedha",
    genre: ["Action", "Crime", "Thriller"],
    year: 2017,
    plot: "A tough police officer sets out to track down and kill an equally tough gangster.",
    director: "Pushkar-Gayathri",
    rating: 8.6
  },
  {
    id: 10,
    title: "Pariyerum Perumal",
    genre: ["Drama"],
    year: 2018,
    plot: "A law student from a lower caste begins a friendship with his upper caste classmate, but faces opposition from her family.",
    director: "Mari Selvaraj",
    rating: 8.7
  },
  {
    id: 11,
    title: "Kaithi",
    genre: ["Action", "Thriller"],
    year: 2019,
    plot: "A recently released prisoner becomes the unlikely protector of a group of police officers under attack from a drug cartel.",
    director: "Lokesh Kanagaraj",
    rating: 8.5
  },
  {
    id: 12,
    title: "96",
    genre: ["Romance", "Drama"],
    year: 2018,
    plot: "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
    director: "C. Prem Kumar",
    rating: 8.6
  },
  {
    id: 13,
    title: "Asuran",
    genre: ["Action", "Drama"],
    year: 2019,
    plot: "A teenage boy from an underprivileged caste kills a rich, upper caste landlord. How his father saves him forms the crux of the story.",
    director: "Vetrimaaran",
    rating: 8.5
  },
  {
    id: 14,
    title: "Sarpatta Parambarai",
    genre: ["Sports", "Drama"],
    year: 2021,
    plot: "A clash between two clans in 1970s North Chennai leads to a boxing rivalry between a young man and his opponent.",
    director: "Pa. Ranjith",
    rating: 8.7
  },
  {
    id: 15,
    title: "Jai Bhim",
    genre: ["Crime", "Drama"],
    year: 2021,
    plot: "A tribal woman seeks the help of a human-rights lawyer when her husband goes missing from police custody.",
    director: "T.J. Gnanavel",
    rating: 8.9
  },

  // Bollywood Movies
  {
    id: 16,
    title: "Sholay",
    genre: ["Action", "Adventure", "Drama"],
    year: 1975,
    plot: "After his family is murdered by a notorious bandit, a former police officer enlists the help of two outlaws to capture the bandit.",
    director: "Ramesh Sippy",
    rating: 8.7
  },
  {
    id: 17,
    title: "Dilwale Dulhania Le Jayenge",
    genre: ["Romance", "Drama"],
    year: 1995,
    plot: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt.",
    director: "Aditya Chopra",
    rating: 8.3
  },
  {
    id: 18,
    title: "3 Idiots",
    genre: ["Comedy", "Drama"],
    year: 2009,
    plot: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    director: "Rajkumar Hirani",
    rating: 8.5
  },
  {
    id: 19,
    title: "Lagaan",
    genre: ["Drama", "Musical", "Sport"],
    year: 2001,
    plot: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    director: "Ashutosh Gowariker",
    rating: 8.2
  },
  {
    id: 20,
    title: "Gangs of Wasseypur",
    genre: ["Action", "Crime", "Drama"],
    year: 2012,
    plot: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    director: "Anurag Kashyap",
    rating: 8.2
  },
  {
    id: 21,
    title: "Andhadhun",
    genre: ["Crime", "Thriller", "Comedy"],
    year: 2018,
    plot: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
    director: "Sriram Raghavan",
    rating: 8.3
  },
  {
    id: 22,
    title: "Taare Zameen Par",
    genre: ["Drama", "Family"],
    year: 2007,
    plot: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    director: "Aamir Khan",
    rating: 8.5
  },
  {
    id: 23,
    title: "Dangal",
    genre: ["Action", "Biography", "Drama"],
    year: 2016,
    plot: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    director: "Nitesh Tiwari",
    rating: 8.4
  },
  {
    id: 24,
    title: "Queen",
    genre: ["Adventure", "Comedy", "Drama"],
    year: 2013,
    plot: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    director: "Vikas Bahl",
    rating: 8.2
  },
  {
    id: 25,
    title: "Paan Singh Tomar",
    genre: ["Action", "Biography", "Crime"],
    year: 2012,
    plot: "The story of Paan Singh Tomar, an Indian athlete and seven-time national steeplechase champion who becomes one of the most feared dacoits in Chambal Valley after his retirement.",
    director: "Tigmanshu Dhulia",
    rating: 8.2
  },

  // More Tamil Movies
  {
    id: 26,
    title: "Thalapathi",
    genre: ["Action", "Drama"],
    year: 1991,
    plot: "An orphan raised by a slum-dweller becomes the right-hand man of a local don, but their friendship is tested when the don's sister falls in love with him.",
    director: "Mani Ratnam",
    rating: 8.4
  },
  {
    id: 27,
    title: "Roja",
    genre: ["Drama", "Romance", "Thriller"],
    year: 1992,
    plot: "A woman from a village in Tamil Nadu marries a city-bred cryptography expert. When he is kidnapped by terrorists in Kashmir, she takes on the system to get him back.",
    director: "Mani Ratnam",
    rating: 8.3
  },
  {
    id: 28,
    title: "Indian",
    genre: ["Action", "Drama", "Thriller"],
    year: 1996,
    plot: "A veteran freedom fighter becomes a vigilante to eliminate corrupt officials, while his son grows up to be a corrupt official himself.",
    director: "S. Shankar",
    rating: 8.2
  },
  {
    id: 29,
    title: "Kannathil Muthamittal",
    genre: ["Drama", "War"],
    year: 2002,
    plot: "A little girl's search for her biological mother takes her from India to war-torn Sri Lanka.",
    director: "Mani Ratnam",
    rating: 8.4
  },
  {
    id: 30,
    title: "Aaranya Kaandam",
    genre: ["Crime", "Thriller"],
    year: 2010,
    plot: "A gangster's life turns upside down when his mistress and son betray him for a younger gangster.",
    director: "Thiagarajan Kumararaja",
    rating: 8.1
  },
  {
    id: 31,
    title: "Visaranai",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2015,
    plot: "Four laborers are tortured by the police to confess to a theft they have not committed.",
    director: "Vetrimaaran",
    rating: 8.4
  },
  {
    id: 32,
    title: "Iruvar",
    genre: ["Biography", "Drama"],
    year: 1997,
    plot: "The friendship and rivalry between a Tamil film star and a writer-politician, inspired by the lives of MGR and Karunanidhi.",
    director: "Mani Ratnam",
    rating: 8.5
  },
  {
    id: 33,
    title: "Thevar Magan",
    genre: ["Drama"],
    year: 1992,
    plot: "A young man returns from London to his village in Tamil Nadu, where he gets caught in a violent feud between his family and another.",
    director: "Bharathan",
    rating: 8.4
  },
  {
    id: 34,
    title: "Mouna Ragam",
    genre: ["Drama", "Romance"],
    year: 1986,
    plot: "A young woman forced into an arranged marriage struggles to forget her past love and accept her husband.",
    director: "Mani Ratnam",
    rating: 8.5
  },
  {
    id: 35,
    title: "Virumandi",
    genre: ["Action", "Drama"],
    year: 2004,
    plot: "A village tough guy is caught in a feud between two families and is later framed for murder.",
    director: "Kamal Haasan",
    rating: 8.4
  },

  // More Bollywood Movies
  {
    id: 36,
    title: "Mughal-e-Azam",
    genre: ["Drama", "History", "Romance"],
    year: 1960,
    plot: "A 16th century prince falls in love with a court dancer and battles with his emperor father.",
    director: "K. Asif",
    rating: 8.4
  },
  {
    id: 37,
    title: "Pyaasa",
    genre: ["Drama", "Musical", "Romance"],
    year: 1957,
    plot: "A talented but indigent poet Vijay struggles for love and recognition in this selfish world.",
    director: "Guru Dutt",
    rating: 8.5
  },
  {
    id: 38,
    title: "Guide",
    genre: ["Drama", "Musical", "Romance"],
    year: 1965,
    plot: "A tour guide meets an unhappy married woman from a wealthy family and tries to help her become a dancer.",
    director: "Vijay Anand",
    rating: 8.3
  },
  {
    id: 39,
    title: "Black Friday",
    genre: ["Crime", "Drama", "History"],
    year: 2004,
    plot: "A film about the 1993 Bombay bomb blasts, told through the different stories of the people involved.",
    director: "Anurag Kashyap",
    rating: 8.3
  },
  {
    id: 40,
    title: "Udaan",
    genre: ["Drama"],
    year: 2010,
    plot: "After being abandoned for eight straight years in boarding school, Rohan returns to the small industrial town of Jamshedpur and finds himself closeted with an authoritarian father.",
    director: "Vikramaditya Motwane",
    rating: 8.2
  },
  {
    id: 41,
    title: "Ship of Theseus",
    genre: ["Drama"],
    year: 2012,
    plot: "The film explores questions of identity, justice, beauty, meaning and death through the stories of an experimental photographer, an ailing monk and a young stockbroker.",
    director: "Anand Gandhi",
    rating: 8.4
  },
  {
    id: 42,
    title: "Masaan",
    genre: ["Drama", "Romance"],
    year: 2015,
    plot: "Four lives intersect along the Ganges: a low caste boy hopelessly in love, a daughter ridden with guilt, a hapless father with fading morality, and a spirited child yearning for a family.",
    director: "Neeraj Ghaywan",
    rating: 8.1
  },
  {
    id: 43,
    title: "Tumbbad",
    genre: ["Drama", "Fantasy", "Horror"],
    year: 2018,
    plot: "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
    director: "Rahi Anil Barve",
    rating: 8.3
  },
  {
    id: 44,
    title: "Newton",
    genre: ["Comedy", "Drama"],
    year: 2017,
    plot: "A government clerk is sent on election duty to a Maoist-controlled town and must conduct a free and fair voting process despite the apathy of security forces and the looming fear of guerrilla attacks.",
    director: "Amit V Masurkar",
    rating: 8.0
  },
  {
    id: 45,
    title: "Sardar Udham",
    genre: ["Biography", "Drama", "History"],
    year: 2021,
    plot: "The story of Udham Singh, a revolutionary freedom fighter who assassinated Michael O'Dwyer in London to avenge the 1919 Jallianwala Bagh massacre.",
    director: "Shoojit Sircar",
    rating: 8.8
  },

  // Malayalam Movies
  {
    id: 46,
    title: "Manichitrathazhu",
    genre: ["Drama", "Horror", "Mystery"],
    year: 1993,
    plot: "A young woman moves into her ancestral home with her husband, only to discover that the house has a dark secret tied to a vengeful spirit.",
    director: "Fazil",
    rating: 8.8
  },
  {
    id: 47,
    title: "Drishyam",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2013,
    plot: "A man goes to extreme lengths to protect his family from punishment after they commit an unexpected crime.",
    director: "Jeethu Joseph",
    rating: 8.3
  },
  {
    id: 48,
    title: "Premam",
    genre: ["Comedy", "Drama", "Romance"],
    year: 2015,
    plot: "A young man's life through three stages of his life, as a teenager, a college student, and a grown man, and the women he loves in each phase.",
    director: "Alphonse Puthren",
    rating: 8.3
  },
  {
    id: 49,
    title: "Kumbalangi Nights",
    genre: ["Drama", "Romance"],
    year: 2019,
    plot: "The story of four brothers living in a dysfunctional family in the fishing village of Kumbalangi in Kochi, and how their lives change when one of them falls in love.",
    director: "Madhu C. Narayanan",
    rating: 8.6
  },
  {
    id: 50,
    title: "Ee.Ma.Yau",
    genre: ["Comedy", "Drama"],
    year: 2018,
    plot: "The film chronicles the events surrounding the death of an old man in a coastal village in Kerala and the subsequent funeral arrangements.",
    director: "Lijo Jose Pellissery",
    rating: 8.3
  },

  // More International Films
  {
    id: 51,
    title: "Parasite",
    genre: ["Comedy", "Drama", "Thriller"],
    year: 2019,
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
    rating: 8.6
  },
  {
    id: 52,
    title: "Oldboy",
    genre: ["Action", "Drama", "Mystery"],
    year: 2003,
    plot: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    director: "Park Chan-wook",
    rating: 8.4
  },
  {
    id: 53,
    title: "Spirited Away",
    genre: ["Animation", "Adventure", "Family"],
    year: 2001,
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    director: "Hayao Miyazaki",
    rating: 8.6
  },
  {
    id: 54,
    title: "Cinema Paradiso",
    genre: ["Drama", "Romance"],
    year: 1988,
    plot: "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    director: "Giuseppe Tornatore",
    rating: 8.5
  },
  {
    id: 55,
    title: "Amélie",
    genre: ["Comedy", "Romance"],
    year: 2001,
    plot: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and along the way, discovers love.",
    director: "Jean-Pierre Jeunet",
    rating: 8.3
  },

  // Continue adding more movies to reach 100+
  // ... (additional 45+ movies would be added here following the same pattern)

  // Example of additional entries:
  {
    id: 56,
    title: "Baahubali: The Beginning",
    genre: ["Action", "Adventure", "Drama"],
    year: 2015,
    plot: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    director: "S.S. Rajamouli",
    rating: 8.1
  },
  {
    id: 57,
    title: "Baahubali 2: The Conclusion",
    genre: ["Action", "Adventure", "Drama"],
    year: 2017,
    plot: "When Shiva learns that his father was the legendary warrior Bahubali, he begins to unravel his father's history and the reason for his death.",
    director: "S.S. Rajamouli",
    rating: 8.2
  },
  {
    id: 58,
    title: "K.G.F: Chapter 1",
    genre: ["Action", "Drama"],
    year: 2018,
    plot: "In the 1970s, a fierce rebel rises against the brutal oppression in the Kolar Gold Fields and becomes the symbol of hope to legions of downtrodden people.",
    director: "Prashanth Neel",
    rating: 8.2
  },
  {
    id: 59,
    title: "Pushpa: The Rise",
    genre: ["Action", "Crime", "Drama"],
    year: 2021,
    plot: "A laborer rises through the ranks of a red sandal smuggling syndicate, making some powerful enemies in the process.",
    director: "Sukumar",
    rating: 7.6
  },
  {
    id: 60,
    title: "RRR",
    genre: ["Action", "Drama"],
    year: 2022,
    plot: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.",
    director: "S.S. Rajamouli",
    rating: 7.9
  },
  // Additional Entries to reach 100+ movies

// More Malayalam Movies
{
  id: 61,
  title: "Bangalore Days",
  genre: ["Comedy", "Drama", "Romance"],
  year: 2014,
  plot: "Three cousins from Kerala move to Bangalore for different reasons and experience life, love, and career challenges together.",
  director: "Anjali Menon",
  rating: 8.3
},
{
  id: 62,
  title: "Angamaly Diaries",
  genre: ["Action", "Crime", "Drama"],
  year: 2017,
  plot: "In Angamaly, a small town in Kerala, Vincent Pepe and his friends navigate the world of pork business and local gang wars.",
  director: "Lijo Jose Pellissery",
  rating: 8.3
},
{
  id: 63,
  title: "Jallikattu",
  genre: ["Action", "Drama", "Thriller"],
  year: 2019,
  plot: "A village's order is disrupted when a buffalo escapes slaughter and the entire community comes together to hunt it down.",
  director: "Lijo Jose Pellissery",
  rating: 7.7
},
{
  id: 64,
  title: "The Great Indian Kitchen",
  genre: ["Drama"],
  year: 2021,
  plot: "A newly married woman struggles to be the submissive wife that her husband and his family expect her to be.",
  director: "Jeo Baby",
  rating: 8.3
},
{
  id: 65,
  title: "Thondimuthalum Driksakshiyum",
  genre: ["Crime", "Drama", "Thriller"],
  year: 2017,
  plot: "A couple's life is turned upside down when a chain is stolen at a bus stop, and the main suspect is caught in an amusing case of mistaken identity.",
  director: "Dileesh Pothan",
  rating: 8.2
},

// Korean Films
{
  id: 66,
  title: "Memories of Murder",
  genre: ["Crime", "Drama", "Mystery"],
  year: 2003,
  plot: "In a small Korean province in 1986, three detectives struggle with the case of multiple young women being found raped and murdered by an unknown culprit.",
  director: "Bong Joon-ho",
  rating: 8.1
},
{
  id: 67,
  title: "Train to Busan",
  genre: ["Action", "Horror", "Thriller"],
  year: 2016,
  plot: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
  director: "Yeon Sang-ho",
  rating: 7.6
},
{
  id: 68,
  title: "The Handmaiden",
  genre: ["Drama", "Romance", "Thriller"],
  year: 2016,
  plot: "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
  director: "Park Chan-wook",
  rating: 8.1
},
{
  id: 69,
  title: "Burning",
  genre: ["Drama", "Mystery", "Thriller"],
  year: 2018,
  plot: "Jong-su bumps into a girl who used to live in the same neighborhood, who asks him to look after her cat while she's on a trip to Africa. When back, she introduces Ben, a mysterious guy she met there, who confesses his secret hobby.",
  director: "Lee Chang-dong",
  rating: 7.5
},
{
  id: 70,
  title: "Mother",
  genre: ["Crime", "Drama", "Mystery"],
  year: 2009,
  plot: "A mother desperately searches for the murderer who framed her son for a young girl's horrific death.",
  director: "Bong Joon-ho",
  rating: 7.8
},

// Japanese Films
{
  id: 71,
  title: "Seven Samurai",
  genre: ["Action", "Adventure", "Drama"],
  year: 1954,
  plot: "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
  director: "Akira Kurosawa",
  rating: 8.6
},
{
  id: 72,
  title: "Your Name",
  genre: ["Animation", "Drama", "Fantasy"],
  year: 2016,
  plot: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
  director: "Makoto Shinkai",
  rating: 8.4
},
{
  id: 73,
  title: "Rashomon",
  genre: ["Crime", "Drama", "Mystery"],
  year: 1950,
  plot: "The rape of a bride and the murder of her samurai husband are recalled from the perspectives of a bandit, the bride, the samurai's ghost and a woodcutter.",
  director: "Akira Kurosawa",
  rating: 8.2
},
{
  id: 74,
  title: "Howl's Moving Castle",
  genre: ["Animation", "Adventure", "Family"],
  year: 2004,
  plot: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
  director: "Hayao Miyazaki",
  rating: 8.2
},
{
  id: 75,
  title: "Grave of the Fireflies",
  genre: ["Animation", "Drama", "War"],
  year: 1988,
  plot: "A young boy and his little sister struggle to survive in Japan during World War II.",
  director: "Isao Takahata",
  rating: 8.5
},

// French Films
{
  id: 76,
  title: "The Intouchables",
  genre: ["Biography", "Comedy", "Drama"],
  year: 2011,
  plot: "After becoming a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
  director: "Olivier Nakache, Éric Toledano",
  rating: 8.5
},
{
  id: 77,
  title: "La Haine",
  genre: ["Crime", "Drama"],
  year: 1995,
  plot: "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
  director: "Mathieu Kassovitz",
  rating: 8.1
},
{
  id: 78,
  title: "The 400 Blows",
  genre: ["Crime", "Drama"],
  year: 1959,
  plot: "A young boy, left without attention, delves into a life of petty crime.",
  director: "François Truffaut",
  rating: 8.1
},
{
  id: 79,
  title: "Blue Is the Warmest Color",
  genre: ["Drama", "Romance"],
  year: 2013,
  plot: "Adèle's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult.",
  director: "Abdellatif Kechiche",
  rating: 7.7
},
{
  id: 80,
  title: "Portrait of a Lady on Fire",
  genre: ["Drama", "Romance"],
  year: 2019,
  plot: "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
  director: "Céline Sciamma",
  rating: 8.1
},

// Latin American Films
{
  id: 81,
  title: "City of God",
  genre: ["Crime", "Drama"],
  year: 2002,
  plot: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
  director: "Fernando Meirelles, Kátia Lund",
  rating: 8.6
},
{
  id: 82,
  title: "Y Tu Mamá También",
  genre: ["Drama", "Romance"],
  year: 2001,
  plot: "In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.",
  director: "Alfonso Cuarón",
  rating: 7.7
},
{
  id: 83,
  title: "Pan's Labyrinth",
  genre: ["Drama", "Fantasy", "War"],
  year: 2006,
  plot: "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
  director: "Guillermo del Toro",
  rating: 8.2
},
{
  id: 84,
  title: "Amores Perros",
  genre: ["Drama", "Thriller"],
  year: 2000,
  plot: "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
  director: "Alejandro González Iñárritu",
  rating: 8.1
},
{
  id: 85,
  title: "Roma",
  genre: ["Drama"],
  year: 2018,
  plot: "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
  director: "Alfonso Cuarón",
  rating: 7.7
},

// Additional Hollywood Films
{
  id: 86,
  title: "The Lord of the Rings: The Fellowship of the Ring",
  genre: ["Action", "Adventure", "Drama"],
  year: 2001,
  plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  director: "Peter Jackson",
  rating: 8.8
},
{
  id: 87,
  title: "Fight Club",
  genre: ["Drama"],
  year: 1999,
  plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
  director: "David Fincher",
  rating: 8.8
},
{
  id: 88,
  title: "Forrest Gump",
  genre: ["Drama", "Romance"],
  year: 1994,
  plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
  director: "Robert Zemeckis",
  rating: 8.8
},
{
  id: 89,
  title: "The Matrix",
  genre: ["Action", "Sci-Fi"],
  year: 1999,
  plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  director: "Lana Wachowski, Lilly Wachowski",
  rating: 8.7
},
{
  id: 90,
  title: "Goodfellas",
  genre: ["Biography", "Crime", "Drama"],
  year: 1990,
  plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
  director: "Martin Scorsese",
  rating: 8.7
},

// Telugu Films
{
  id: 91,
  title: "Arjun Reddy",
  genre: ["Action", "Drama", "Romance"],
  year: 2017,
  plot: "A short-tempered medical college student sets out on a self-destructive path after his girlfriend is forced to marry another man.",
  director: "Sandeep Reddy Vanga",
  rating: 8.1
},
{
  id: 92,
  title: "Eega",
  genre: ["Action", "Comedy", "Fantasy"],
  year: 2012,
  plot: "A man is murdered by a jealous businessman and is reincarnated as a fly to take revenge on the killer.",
  director: "S.S. Rajamouli",
  rating: 7.8
},
{
  id: 93,
  title: "C/o Kancharapalem",
  genre: ["Drama", "Romance"],
  year: 2018,
  plot: "Four love stories intertwine in a small village in Visakhapatnam, exploring relationships across different age groups and backgrounds.",
  director: "Venkatesh Maha",
  rating: 8.8
},
{
  id: 94,
  title: "Jersey",
  genre: ["Drama", "Sport"],
  year: 2019,
  plot: "A failed cricketer decides to return to cricket in his late thirties to fulfill his son's wish for a jersey as a gift.",
  director: "Gowtam Tinnanuri",
  rating: 8.5
},
{
  id: 95,
  title: "Awe",
  genre: ["Drama", "Mystery", "Thriller"],
  year: 2018,
  plot: "Multiple storylines converge at a cafe, exploring themes of mental health, abuse, and redemption.",
  director: "Prasanth Varma",
  rating: 7.9
},

// Kannada Films
{
  id: 96,
  title: "Lucia",
  genre: ["Mystery", "Romance", "Sci-Fi"],
  year: 2013,
  plot: "A man suffering from insomnia is tricked into buying a drug, Lucia, that makes his desires come true in his dreams, but blurs the line between reality and fantasy.",
  director: "Pawan Kumar",
  rating: 8.2
},
{
  id: 97,
  title: "Rangitaranga",
  genre: ["Horror", "Mystery", "Thriller"],
  year: 2015,
  plot: "A novelist and his wife return to her ancestral village in search of inspiration, but discover dark secrets buried in the community.",
  director: "Anup Bhandari",
  rating: 8.4
},
{
  id: 98,
  title: "U Turn",
  genre: ["Mystery", "Thriller"],
  year: 2016,
  plot: "A reporter investigating accidents at a particular flyover discovers a pattern that leads her into a supernatural mystery.",
  director: "Pawan Kumar",
  rating: 7.8
},
{
  id: 99,
  title: "Ulidavaru Kandanthe",
  genre: ["Action", "Crime", "Drama"],
  year: 2014,
  plot: "The disappearance of a fisherman told from different perspectives, revealing the complexity of truth and perception.",
  director: "Rakshit Shetty",
  rating: 8.4
},
{
  id: 100,
  title: "KGF: Chapter 2",
  genre: ["Action", "Crime", "Drama"],
  year: 2022,
  plot: "The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their savior, the government sees him as a threat, and his enemies are clamoring for revenge.",
  director: "Prashanth Neel",
  rating: 8.3
},
// More Tamil Movies to reach 150 total entries

{
  id: 121,
  title: "Petta",
  genre: ["Action", "Drama", "Thriller"],
  year: 2019,
  plot: "A hostel warden with a mysterious past takes on a local gangster who causes trouble for the students under his care.",
  director: "Karthik Subbaraj",
  rating: 7.5
},
{
  id: 122,
  title: "Mahanati",
  genre: ["Biography", "Drama"],
  year: 2018,
  plot: "The life and career of the legendary actress Savitri, who ruled the Tamil and Telugu cinema from the 1950s to 1980s.",
  director: "Nag Ashwin",
  rating: 8.5
},
{
  id: 123,
  title: "Hey Ram",
  genre: ["Drama", "History"],
  year: 2000,
  plot: "Saketh Ram's wife is raped and killed during communal riots. Devastated, he gets involved in the movement to assassinate Gandhi and becomes witness to crucial historical events.",
  director: "Kamal Haasan",
  rating: 8.1
},
{
  id: 124,
  title: "Vaaranam Aayiram",
  genre: ["Action", "Drama", "Romance"],
  year: 2008,
  plot: "A young man's journey through life, inspired by his father, as he faces various challenges and experiences across different phases.",
  director: "Gautham Vasudev Menon",
  rating: 8.3
},
{
  id: 125,
  title: "Kaakha Kaakha",
  genre: ["Action", "Crime", "Romance"],
  year: 2003,
  plot: "An honest police officer finds himself caught between his personal and professional life when he falls in love, while pursuing a ruthless gang.",
  director: "Gautham Vasudev Menon",
  rating: 8.2
},
{
  id: 126,
  title: "Peranbu",
  genre: ["Drama"],
  year: 2019,
  plot: "A father struggles to care for his daughter with cerebral palsy, learning profound life lessons along the way.",
  director: "Ram",
  rating: 8.5
},
{
  id: 127,
  title: "Irudhi Suttru",
  genre: ["Drama", "Sport"],
  year: 2016,
  plot: "A disgraced boxing coach discovers a young woman with immense potential, training her to become a champion despite many obstacles.",
  director: "Sudha Kongara",
  rating: 8.1
},
{
  id: 128,
  title: "Theeran Adhigaaram Ondru",
  genre: ["Action", "Crime", "Thriller"],
  year: 2017,
  plot: "Based on true events, a police officer tracks down a gang of dacoits who commit violent highway robberies and murders.",
  director: "H. Vinoth",
  rating: 8.2
},
{
  id: 129,
  title: "Dhanush",
  genre: ["Comedy", "Romance"],
  year: 2007,
  plot: "A barber falls in love with a village belle, but faces opposition from her father and a wealthy suitor.",
  director: "Balu Mahendra",
  rating: 7.7
},
{
  id: 130,
  title: "Kadhalum Kadandhu Pogum",
  genre: ["Comedy", "Drama", "Romance"],
  year: 2016,
  plot: "An unlikely friendship develops between a corporate employee and a rowdy when they become temporary housemates.",
  director: "Nalan Kumarasamy",
  rating: 7.9
},
{
  id: 131,
  title: "Vazhakku En 18/9",
  genre: ["Crime", "Drama", "Thriller"],
  year: 2012,
  plot: "Two parallel stories of teenagers from different social backgrounds whose lives intersect due to a crime.",
  director: "Balaji Sakthivel",
  rating: 8.0
},
{
  id: 132,
  title: "Kaththi Sandai",
  genre: ["Action", "Comedy"],
  year: 2016,
  plot: "A man returns to his village to avenge his father's death but gets caught up in a land dispute involving corrupt politicians.",
  director: "Suraj",
  rating: 7.3
},
{
  id: 133,
  title: "Mersal",
  genre: ["Action", "Thriller"],
  year: 2017,
  plot: "A magician and a doctor expose corruption in India's medical system while seeking revenge for their father's death.",
  director: "Atlee Kumar",
  rating: 7.8
},
{
  id: 134,
  title: "Kanchivaram",
  genre: ["Drama"],
  year: 2008,
  plot: "A silk weaver struggles to keep his promise of weaving a silk saree for his daughter's wedding in a town known for silk but where weavers cannot afford to own one.",
  director: "Priyadarshan",
  rating: 8.2
},
{
  id: 135,
  title: "Enthiran",
  genre: ["Action", "Sci-Fi"],
  year: 2010,
  plot: "A scientist creates a robot with human emotions, but when the robot falls in love with the scientist's girlfriend, things go awry.",
  director: "S. Shankar",
  rating: 7.1
},
{
  id: 136,
  title: "Sethu",
  genre: ["Drama", "Romance"],
  year: 1999,
  plot: "A college rowdy falls in love with a conservative girl, but his violent tendencies lead to tragic consequences.",
  director: "Bala",
  rating: 8.0
},
{
  id: 137,
  title: "Mozhi",
  genre: ["Comedy", "Drama", "Romance"],
  year: 2007,
  plot: "A musician falls in love with a hearing-impaired woman and tries to win her heart despite the challenges.",
  director: "Radha Mohan",
  rating: 8.1
},
{
  id: 138,
  title: "Maari",
  genre: ["Action", "Comedy", "Crime"],
  year: 2015,
  plot: "A local gangster's life changes when he meets a woman who stands up to him, and when a new police officer arrives in town.",
  director: "Balaji Mohan",
  rating: 6.9
},
{
  id: 139,
  title: "Aadukalam",
  genre: ["Action", "Drama", "Sport"],
  year: 2011,
  plot: "In Madurai, a young man gets involved in rooster fighting and the bitter feud between two veteran trainers.",
  director: "Vetrimaaran",
  rating: 8.0
},
{
  id: 140,
  title: "Madras",
  genre: ["Action", "Drama"],
  year: 2014,
  plot: "In North Chennai, two friends get caught in the political crossfire over a wall that has deep significance to the local community.",
  director: "Pa. Ranjith",
  rating: 7.8
},
{
  id: 141,
  title: "Kaatru Veliyidai",
  genre: ["Drama", "Romance", "War"],
  year: 2017,
  plot: "A fighter pilot is captured during war and reflects on his romance with a doctor while in captivity.",
  director: "Mani Ratnam",
  rating: 6.8
},
{
  id: 142,
  title: "Mankatha",
  genre: ["Action", "Crime", "Thriller"],
  year: 2011,
  plot: "A suspended police officer joins a group of cricket bookies planning to rob 500 crores of cricket betting money.",
  director: "Venkat Prabhu",
  rating: 7.7
},
{
  id: 143,
  title: "Pizza",
  genre: ["Horror", "Mystery", "Thriller"],
  year: 2012,
  plot: "A pizza delivery boy lands in a mysterious circumstance and it works a dramatic change in his life.",
  director: "Karthik Subbaraj",
  rating: 7.9
},
{
  id: 144,
  title: "Ratsasan",
  genre: ["Crime", "Mystery", "Thriller"],
  year: 2018,
  plot: "A film school graduate becomes a police officer and hunts for a serial killer targeting schoolgirls.",
  director: "Ram Kumar",
  rating: 8.4
},
{
  id: 145,
  title: "Autograph",
  genre: ["Drama", "Romance"],
  year: 2004,
  plot: "A man about to get married goes on a journey to invite people from his past, reflecting on his life experiences and lost loves.",
  director: "Cheran",
  rating: 8.0
},
{
  id: 146,
  title: "Chekka Chivantha Vaanam",
  genre: ["Action", "Crime", "Drama"],
  year: 2018,
  plot: "When a powerful gangster is hospitalized, his three sons compete to take control of his criminal empire.",
  director: "Mani Ratnam",
  rating: 7.5
},
{
  id: 147,
  title: "Dhuruvangal Pathinaaru",
  genre: ["Crime", "Drama", "Mystery"],
  year: 2016,
  plot: "A retired police officer recounts the most challenging case of his career to a prospective cadet, involving multiple mysteries and perspectives.",
  director: "Karthick Naren",
  rating: 8.2
},
{
  id: 148,
  title: "Kaaviya Thalaivan",
  genre: ["Drama", "History", "Musical"],
  year: 2014,
  plot: "In pre-independence India, two stage actors and friends become rivals when one achieves success and the other faces decline.",
  director: "Vasanthabalan",
  rating: 7.6
},
{
  id: 149,
  title: "Pichaikaaran",
  genre: ["Drama"],
  year: 2016,
  plot: "A millionaire takes a vow to live as a beggar for 48 days to save his mother's life, based on an astrologer's advice.",
  director: "Sasi",
  rating: 7.9
},
{
  id: 150,
  title: "Maanaadu",
  genre: ["Action", "Sci-Fi", "Thriller"],
  year: 2021,
  plot: "A man finds himself caught in a time loop on the day of a political conference, repeatedly trying to prevent an assassination.",
  director: "Venkat Prabhu",
  rating: 8.0
},
{
  id: 151,
  title: "Parasakthi",
  genre: ["Drama"],
  year: 1952,
  plot: "A man returns from abroad during World War II to find his family destroyed by poverty, corruption and societal injustice.",
  director: "Krishnan-Panju",
  rating: 8.3
},
{
  id: 152,
  title: "Veerapandiya Kattabomman",
  genre: ["Historical", "Drama"],
  year: 1959,
  plot: "The story of the 18th-century Tamil warrior Kattabomman who fought against British colonization and tax collection.",
  director: "B. R. Panthulu",
  rating: 8.5
},
{
  id: 153,
  title: "Thiruvilayadal",
  genre: ["Drama", "Fantasy", "Mythology"],
  year: 1965,
  plot: "A collection of stories depicting Lord Shiva's divine games in the city of Madurai, showcasing his powers and benevolence.",
  director: "A. P. Nagarajan",
  rating: 8.7
},
{
  id: 154,
  title: "Karnan",
  genre: ["Historical", "Drama", "Mythology"],
  year: 1964,
  plot: "The life story of Karna from the Mahabharata, focusing on his friendship with Duryodhana and eventual tragic demise.",
  director: "B. R. Panthulu",
  rating: 8.4
},
{
  id: 155,
  title: "Server Sundaram",
  genre: ["Comedy", "Drama"],
  year: 1964,
  plot: "A poor restaurant waiter struggles to provide for his mother while aspiring to become an actor, eventually finding success.",
  director: "Krishnan-Panju",
  rating: 8.0
},
{
  id: 156,
  title: "Thillana Mohanambal",
  genre: ["Drama", "Musical", "Romance"],
  year: 1968,
  plot: "The love story between a talented Nagaswaram player and a classical dancer set against the backdrop of traditional Tamil arts.",
  director: "A. P. Nagarajan",
  rating: 8.6
},
{
  id: 157,
  title: "Ethir Neechal",
  genre: ["Comedy", "Drama"],
  year: 1968,
  plot: "A poor man assumes a dual identity to improve his social standing, leading to humorous complications.",
  director: "K. Balachander",
  rating: 7.9
},
{
  id: 158,
  title: "Bama Vijayam",
  genre: ["Comedy", "Family"],
  year: 1967,
  plot: "A middle-class family becomes obsessed with acquiring modern household appliances, resulting in comical situations.",
  director: "K. Balachander",
  rating: 8.1
},
{
  id: 159,
  title: "Adimai Penn",
  genre: ["Historical", "Drama", "Adventure"],
  year: 1969,
  plot: "A princess disguises herself as a slave to avenge her father's death at the hands of a tyrannical ruler.",
  director: "K. Shankar",
  rating: 7.8
},
{
  id: 160,
  title: "Aayirathil Oruvan",
  genre: ["Adventure", "Drama"],
  year: 1965,
  plot: "A ship captain is enslaved along with his crew by Arab pirates, and plans an escape while romance blooms.",
  director: "B. R. Panthulu",
  rating: 8.3
},
{
  id: 161,
  title: "Padikkadha Medhai",
  genre: ["Drama"],
  year: 1960,
  plot: "An uneducated villager with innate intelligence helps solve village problems, challenging the educated elite.",
  director: "A. Bhimsingh",
  rating: 7.7
},
{
  id: 162,
  title: "Pasamalar",
  genre: ["Drama", "Family"],
  year: 1961,
  plot: "The strong bond between a brother and sister faces societal pressures and misunderstandings, leading to tragedy.",
  director: "A. Bhimsingh",
  rating: 8.4
},
{
  id: 163,
  title: "Paava Mannippu",
  genre: ["Drama"],
  year: 1961,
  plot: "A reformed criminal tries to lead an honest life but faces obstacles from society and his past.",
  director: "A. Bhimsingh",
  rating: 7.9
},
{
  id: 164,
  title: "Aalayamani",
  genre: ["Drama", "Family"],
  year: 1962,
  plot: "A wealthy man adopts an orphan who grows up to become a doctor, but a misunderstanding threatens their relationship.",
  director: "K. Shankar",
  rating: 7.6
},
{
  id: 165,
  title: "Paalum Pazhamum",
  genre: ["Drama", "Romance"],
  year: 1961,
  plot: "A doctor dedicated to serving the poor in a village faces opposition from traditional healers and wealthy merchants.",
  director: "A. Bhimsingh",
  rating: 7.8
},
{
  id: 166,
  title: "Pattinathar",
  genre: ["Devotional", "Drama"],
  year: 1962,
  plot: "The life story of the Tamil saint-poet Pattinathar, who renounced his wealth and kingdom to seek spiritual enlightenment.",
  director: "K. Somu",
  rating: 8.0
},
{
  id: 167,
  title: "Kai Kodutha Deivam",
  genre: ["Drama", "Family"],
  year: 1964,
  plot: "A man sacrifices his happiness to raise his younger siblings, only to face ingratitude when they become successful.",
  director: "K. Shankar",
  rating: 8.2
},
{
  id: 168,
  title: "Kaviya Thalaivi",
  genre: ["Drama", "Biography"],
  year: 1970,
  plot: "The life of a renowned female poet who overcomes gender barriers to achieve recognition in a male-dominated literary world.",
  director: "C. V. Sridhar",
  rating: 7.5
},
{
  id: 169,
  title: "Deiva Magan",
  genre: ["Drama"],
  year: 1969,
  plot: "A man returns from prison to find his daughter has grown up not knowing his identity, and he chooses to remain anonymous.",
  director: "A. C. Tirulokchandar",
  rating: 8.3
},
{
  id: 170,
  title: "Sorgam",
  genre: ["Drama", "Family"],
  year: 1970,
  plot: "A devoted husband works hard to provide for his family, but his wife misunderstands his intentions, leading to family conflict.",
  director: "T. R. Ramanna",
  rating: 7.7
},
{
  id: 171,
  title: "Nenjil Or Aalayam",
  genre: ["Drama", "Romance"],
  year: 1962,
  plot: "A doctor falls in love with his patient but sacrifices his love when he discovers she has a terminal illness.",
  director: "C. V. Sridhar",
  rating: 8.1
},
{
  id: 172,
  title: "Then Nilavu",
  genre: ["Romance", "Drama"],
  year: 1961,
  plot: "A poor sculptor falls in love with a wealthy woman, but their social differences create obstacles to their relationship.",
  director: "B. R. Panthulu",
  rating: 7.8
},
{
  id: 173,
  title: "Paarthal Pasi Theerum",
  genre: ["Drama", "Family"],
  year: 1962,
  plot: "A struggling family faces hardships in a village, with the father working multiple jobs to provide education for his children.",
  director: "A. Bhimsingh",
  rating: 7.9
},
{
  id: 174,
  title: "Puthiya Paravai",
  genre: ["Mystery", "Thriller"],
  year: 1964,
  plot: "A newly married woman discovers mysterious circumstances surrounding her husband's former wife's death.",
  director: "Dada Mirasi",
  rating: 8.0
},
{
  id: 175,
  title: "Anbe Vaa",
  genre: ["Comedy", "Romance"],
  year: 1966,
  plot: "A wealthy young man pretends to be poor to win the heart of a woman who dislikes rich people.",
  director: "A. C. Tirulokchandar",
  rating: 8.2
},
{
  id: 176,
  title: "Uyarndha Manithan",
  genre: ["Drama"],
  year: 1968,
  plot: "A humble clerk rises to become a wealthy businessman but struggles to maintain his principles in the face of corruption.",
  director: "M. Krishnan Nair",
  rating: 7.8
},
{
  id: 177,
  title: "Saraswati Sabatham",
  genre: ["Mythology", "Musical", "Fantasy"],
  year: 1966,
  plot: "A contest between the goddesses Saraswati and Lakshmi to determine whose blessing is more valuable to humanity.",
  director: "A. P. Nagarajan",
  rating: 8.0
},
{
  id: 178,
  title: "Bhadrakali",
  genre: ["Devotional", "Drama"],
  year: 1976,
  plot: "The story of a woman who becomes possessed by the goddess Kali and gains divine powers to fight injustice.",
  director: "Durai",
  rating: 7.5
},
{
  id: 179,
  title: "Vietnam Veedu",
  genre: ["Drama", "Family"],
  year: 1970,
  plot: "An honest government employee struggles to maintain his large family while staying true to his principles.",
  director: "P. Madhavan",
  rating: 8.3
},
{
  id: 180,
  title: "Sange Muzhangu",
  genre: ["Drama", "Social"],
  year: 1972,
  plot: "A village headman fights against caste discrimination and works to unite people from different social backgrounds.",
  director: "A. P. Nagarajan",
  rating: 7.6
},
{
  id: 181,
  title: "Rajaraja Cholan",
  genre: ["Historical", "Drama"],
  year: 1973,
  plot: "The life story of the great Chola emperor Raja Raja I, depicting his conquests and contributions to art and architecture.",
  director: "A. P. Nagarajan",
  rating: 8.1
},
{
  id: 182,
  title: "Thiruvarutchelvar",
  genre: ["Devotional", "Biographical"],
  year: 1967,
  plot: "The life of Tamil saint Ramalinga Swamigal, known as Vallalar, who spread the message of compassion and universal brotherhood.",
  director: "K. Shankar",
  rating: 7.9
},
{
  id: 183,
  title: "Major Chandrakanth",
  genre: ["Drama"],
  year: 1966,
  plot: "A blind retired army major stands firm on his principles of justice, even when his own son commits a crime.",
  director: "K. Balachander",
  rating: 8.4
},
{
  id: 184,
  title: "Naan Avanillai",
  genre: ["Drama", "Thriller"],
  year: 1974,
  plot: "A conman marries multiple women under different identities and is ultimately brought to trial where he defends himself.",
  director: "K. Balachander",
  rating: 8.2
},
{
  id: 185,
  title: "Idhaya Kamalam",
  genre: ["Romance", "Drama"],
  year: 1965,
  plot: "A neglected wife tries to win back her husband's affection after he becomes infatuated with another woman.",
  director: "T. R. Ramanna",
  rating: 7.7
},
{
  id: 186,
  title: "Kumari Penn",
  genre: ["Drama", "Family"],
  year: 1966,
  plot: "A young woman takes on family responsibilities after her mother's death, raising her siblings while facing various challenges.",
  director: "K. S. Gopalakrishnan",
  rating: 7.8
},
{
  id: 187,
  title: "Andavan Kattalai",
  genre: ["Drama", "Social"],
  year: 1964,
  plot: "A man lies about being married to get a visa to visit Singapore, leading to complications when he returns to India.",
  director: "K. Balachander",
  rating: 8.3
},
{
  id: 188,
  title: "Aalayam",
  genre: ["Drama", "Family"],
  year: 1962,
  plot: "Two friends are torn apart when one suspects the other of having an affair with his wife.",
  director: "C. V. Sridhar",
  rating: 7.9
},
{
  id: 189,
  title: "Kai Koduttha Dheivam",
  genre: ["Drama", "Family"],
  year: 1964,
  plot: "A man sacrifices his own happiness for the sake of his siblings, only to be forgotten and abandoned by them later.",
  director: "K. Shankar",
  rating: 8.0
},
{
  id: 190,
  title: "Ragasiya Police 115",
  genre: ["Mystery", "Crime", "Thriller"],
  year: 1968,
  plot: "A talented detective goes undercover to solve a series of mysterious crimes baffling the police force.",
  director: "M. Krishnan Nair",
  rating: 7.6
},
{
  id: 191,
  title: "Saraswathi Sabatham",
  genre: ["Mythology", "Fantasy"],
  year: 1966,
  plot: "A divine wager between goddesses Saraswathi and Lakshmi leads to a test of which divine blessing is more valuable.",
  director: "A. P. Nagarajan",
  rating: 8.1
},
{
  id: 192,
  title: "Thanga Pathakkam",
  genre: ["Crime", "Drama"],
  year: 1974,
  plot: "A dedicated police officer who upholds the law at all costs faces a moral dilemma when his son commits a crime.",
  director: "P. Madhavan",
  rating: 8.2
},
{
  id: 193,
  title: "Kalathur Kannamma",
  genre: ["Drama", "Family"],
  year: 1960,
  plot: "A young boy brings together his estranged parents who had separated due to misunderstandings.",
  director: "A. Bhimsingh",
  rating: 8.4
},
{
  id: 194,
  title: "Sivantha Mann",
  genre: ["Action", "Adventure"],
  year: 1969,
  plot: "An archaeological professor embarks on an adventure to recover a stolen ancient artifact of cultural significance.",
  director: "C. V. Sridhar",
  rating: 7.8
},
{
  id: 195,
  title: "Dheiva Thai",
  genre: ["Drama", "Family"],
  year: 1964,
  plot: "A woman undergoes hardships to raise her children after her husband's death, exemplifying motherly sacrifice.",
  director: "A. Bhimsingh",
  rating: 8.0
},
{
  id: 196,
  title: "Enga Veettu Pillai",
  genre: ["Action", "Drama", "Family"],
  year: 1965,
  plot: "Identical twins separated at birth grow up in different environments, one becoming a police officer and the other a thief.",
  director: "B. R. Panthulu",
  rating: 8.0
},
{
  id: 197,
  title: "Navarthri",
  genre: ["Drama", "Musical"],
  year: 1964,
  plot: "A talented musician plays nine different roles representing the nine emotions in classical Indian arts.",
  director: "A. P. Nagarajan",
  rating: 7.9
},
{
  id: 198,
  title: "Bhakta Prahlada",
  genre: ["Mythology", "Devotional"],
  year: 1967,
  plot: "The story of the young devotee Prahlada who remains devoted to Lord Vishnu despite persecution from his father, the demon king.",
  director: "A. P. Nagarajan",
  rating: 7.8
},
{
  id: 199,
  title: "Motor Sundaram Pillai",
  genre: ["Comedy", "Drama"],
  year: 1966,
  plot: "A village man becomes obsessed with cars and modern technology, creating humorous situations in his traditional community.",
  director: "T. R. Ramanna",
  rating: 7.7
},
{
  id: 200,
  title: "Iru Malargal",
  genre: ["Romance", "Drama"],
  year: 1967,
  plot: "A complex love triangle between a widower, his daughter's teacher, and a woman who has loved him from afar.",
  director: "C. V. Sridhar",
  rating: 8.2
}
  
];

export const generateResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();
  
  // Check for non-cinema related queries
  const cinemaKeywords = [
    'movie', 'film', 'cinema', 'actor', 'actress', 'director', 
    'recommend', 'suggestion', 'genre', 'tamil', 'bollywood', 
    'hollywood', 'rating', 'release', 'year', 'watch', 'star',
    'oscar', 'award', 'theater', 'review', 'plot', 'story',
    'character', 'scene', 'sequel', 'prequel', 'series', 'tv show',
    'netflix', 'amazon prime', 'disney+', 'ott', 'streaming',
    'box office', 'collection', 'hit', 'flop', 'blockbuster'
  ];

  const isCinemaRelated = cinemaKeywords.some(keyword => input.includes(keyword));

  if (!isCinemaRelated) {
    return "I specialize only in cinema-related topics. I can help with movie recommendations, information about films, directors, actors, and other movie-related queries. Could you ask something about movies?";
  }

  // Movie recommendations by genre
  if (input.includes('recommend') || input.includes('suggestion')) {
    const genres = ['action', 'drama', 'crime', 'sci-fi', 'thriller', 'comedy', 'romance', 'horror', 'biography', 'history'];
    const matchedGenre = genres.find(genre => input.includes(genre));
    
    if (matchedGenre) {
      const recommendations = movieDatabase
        .filter(movie => movie.genre.map(g => g.toLowerCase()).includes(matchedGenre))
        .sort((a, b) => b.rating - a.rating);
      
      if (recommendations.length > 0) {
        const movie = recommendations[0];
        return `I recommend watching "${movie.title}" (${movie.year}). It's a highly rated ${matchedGenre} movie directed by ${movie.director}. ${movie.plot}`;
      }
    }
  }

  // Movie information by title
  const movieMatch = movieDatabase.find(movie => 
    input.includes(movie.title.toLowerCase())
  );
  if (movieMatch) {
    return `"${movieMatch.title}" (${movieMatch.year}) is directed by ${movieMatch.director}. ${movieMatch.plot} It has a rating of ${movieMatch.rating}/10.`;
  }

  // Director information
  if (input.includes('director')) {
    const directors = [...new Set(movieDatabase.map(movie => movie.director))];
    const matchedDirector = directors.find(director => 
      input.includes(director.toLowerCase())
    );
    
    if (matchedDirector) {
      const directorMovies = movieDatabase
        .filter(movie => movie.director === matchedDirector)
        .map(movie => movie.title)
        .join(', ');
      return `${matchedDirector} directed ${directorMovies}.`;
    }
  }

  // Year based queries
  if (input.includes('year') || input.includes('released')) {
    const yearMatch = input.match(/\d{4}/);
    if (yearMatch) {
      const year = parseInt(yearMatch[0]);
      const moviesInYear = movieDatabase.filter(movie => movie.year === year);
      if (moviesInYear.length > 0) {
        const titles = moviesInYear.map(movie => movie.title).join(', ');
        return `In ${year}, the following movies were released: ${titles}`;
      }
    }
  }

  // Language/country based queries
  if (input.includes('tamil') || input.includes('tamil movie')) {
    const tamilMovies = movieDatabase.filter(movie => 
      movie.director.includes('Mani Ratnam') || 
      movie.director.includes('Kamal Haasan') ||
      movie.title.includes('Nayakan') ||
      movie.title.includes('Anbe Sivam')
    ).slice(0, 5);
    const titles = tamilMovies.map(movie => movie.title).join(', ');
    return `Some great Tamil movies include: ${titles}. Would you like more information about any of these?`;
  }

  if (input.includes('indian') || input.includes('bollywood')) {
    const bollywoodMovies = movieDatabase.filter(movie => 
      movie.director.includes('Rajkumar Hirani') || 
      movie.director.includes('Anurag Kashyap') ||
      movie.title.includes('Sholay') ||
      movie.title.includes('3 Idiots')
    ).slice(0, 5);
    const titles = bollywoodMovies.map(movie => movie.title).join(', ');
    return `Some popular Indian/Bollywood movies include: ${titles}. Would you like details about any of these?`;
  }

  // Default responses
  const defaultResponses = [
    "I can help you find movies by genre, director, year, or language (like Tamil or Bollywood). Try asking for a recommendation!",
    "Would you like a movie recommendation? Just tell me what genre you prefer or if you want Tamil/Indian movies!",
    "I can tell you about specific movies, directors, or give you recommendations. What would you like to know?",
    "Feel free to ask about any movie in my database, or ask for recommendations based on genre or language!"
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};