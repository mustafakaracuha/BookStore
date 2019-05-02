sap
    .ui
    .define(["sap/ui/core/mvc/Controller"], function (Controller, FragmentController) {
        "use strict";
        var base,
            router;
        return Controller.extend(
            "SapUI5Tutorial.Application.Main.views.StartUp.controller.bookstore",
            {

                onInit: function () {
                  this
                  .getView()
                  .setModel(oModel);
              $.ajax({
                  type: "GET",
                  url: 'https://raw.githubusercontent.com/ozlerhakan/mongodb-json-files/master/datasets/catalog.books.json',
                  data: "",
                  dataType: 'json',
                  success: function (firstmovies) {
                      oModel.setProperty("/bookstore", firstmovies);
                  }
              })

                    var bookstore = [
                        {
                            title: "BOOKSTORE",
                            booksthat: "Books That We Love",
                            hand: "Handpicked",
                            latest: "Latest Releases"
                        }
                    ]
                    oModel.setProperty("/bookcategories", bookstore);

                    var best = [
                        {
                            title: "BEST AUTHORS",
                            jk: "J.K Rowling",
                            jane: "Jane Austen",
                            neil: "Neil Gaiman",
                            ronald: "Roald Dahl",
                            george: "George R. R. Martin"
                        }
                    ]
                    oModel.setProperty("/bestauthors", best);

                    var categories = [
                        {
                            title: "CATEGORIES",
                            crime: "Crime & Thriller Books",
                            romance: "Romance Books",
                            classic: "Classic Fantasy Books",
                            graphic: "Graphic Novels",
                            history: "History Books"
                        }
                    ]
                    oModel.setProperty("/categories", categories);
                
                    var booksmodel=[
                        
                        {
                        
                                author: "Chinua Achebe",
                                country: "Nigeria",
                                imageLink: "resources/images/things-fall-apart.jpg",
                                pages: "209",
                                title: "Things Fall Apart",
                                summary: " Okonowo is the greatest warrior alive. His fame has spread like a bushfire in West Africa and he is one of the most powerful men of his clan. But he also has a fiery temper. Determined not to be like his father, he refuses to show weakness to anyone - even if the only way he can master his feelings is with his fists. When outsiders threaten the traditions of his clan, Okonowo takes violent action. Will the great man's dangerous pride eventually destroy him? + Okonkwo is a wealthy and respected warrior of the Umuofia clan, a lower Nigerian tribe that is part of a consortium of nine connected villages, including Okonkwo’s village, Iguedo. In his youth, he brought honor to his village by beating Amalinze the Cat in a wrestling contest. Until his match with Okonkwo, the Cat had been undefeated for seven years. Okonkwo is completely unlike his now deceased father, Unoka, who feared the sight of blood and was always borrowing and losing money, which meant that his wife and children often went hungry. Unoka was, however, a skilled flute player and had a gift for, and love of, language."
                              
                        },

                ]
                oModel.setProperty("/firstbooksModel", booksmodel);
                
                var secondbooksmodel=[
                        
                    {
                    
                            author: "Chinua Achebe",
                            country: "Nigeria",
                            imageLink: "resources/images/things-fall-apart.jpg",
                            pages: "209",
                            title: "Things Fall Apart",
                            summary: " Okonowo is the greatest warrior alive. His fame has spread like a bushfire in West Africa and he is one of the most powerful men of his clan. But he also has a fiery temper. Determined not to be like his father, he refuses to show weakness to anyone - even if the only way he can master his feelings is with his fists. When outsiders threaten the traditions of his clan, Okonowo takes violent action. Will the great man's dangerous pride eventually destroy him? + Okonkwo is a wealthy and respected warrior of the Umuofia clan, a lower Nigerian tribe that is part of a consortium of nine connected villages, including Okonkwo’s village, Iguedo. In his youth, he brought honor to his village by beating Amalinze the Cat in a wrestling contest. Until his match with Okonkwo, the Cat had been undefeated for seven years. Okonkwo is completely unlike his now deceased father, Unoka, who feared the sight of blood and was always borrowing and losing money, which meant that his wife and children often went hungry. Unoka was, however, a skilled flute player and had a gift for, and love of, language."
                          
                    }, {
                        author: "Hans Christian Andersen",
                        country: "Denmark",
                        imageLink: "resources/images/fairy-tales.jpg",
                        language: "Danish",
                        link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
                        pages: 784,
                        title: "Fairy tales",
                        year: "1836",
                        summary:"FYI, the tales don't go in any particular order, so feel free to skip around. That being said, a lot of the better-known tales are clustered in the beginning, so keep that in mind as you poke around.  The details differ in each tale, but in most of 'em, the good guys win and the bad guys are punished. It sounds stale until you start looking at who's good, who's bad, and why. We see a lot of wicked witches, evil stepmothers, and mean fairies, but not so many straight-up evil dudes. Well, except for some giants and cannibals. But you get the idea. A lot of the antagonists are bad because they violate a social more or two, and they're punished horribly at the tales' ends."
                    },{
                      
                        author: "Dante Alighieri",
                        country: "Italy",
                        imageLink: "resources/images/the-divine-comedy.jpg",
                        language: "Italian",
                        link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
                        pages: 928,
                        title: "The Divine Comedy",
                        year: "1315",
                        summary:"Dante Alighieri is the author of the Divine Comedy. He is a famous Italian epic poet. Dante was born into a middle-class Florentine family. He began writing poetry at an early age, and the lyrics fascinated him. He fell in love with a girl named Beatrice whom he saw only twice in his life but she was his inspiration for the legendary masterpieces. She died at an early age which left him heartbroken. In the Divine comedy poem, he is the main character. The plot is set up in 1300, around the time Dante was in exile from his native Florence. But the actual writing was done by him between 1308 and 1321 at the time of his death. The Divine Comedy summary gives a picture of the realms of Dante’s afterlife."
                      },{
                        author: "Maureeb Gallery",
                        country: "Sumer and Akkadian Empire",
                        imageLink: "resources/images/the-epic-of-gilgamesh.jpg",
                        language: "Akkadian",
                        link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
                        pages: 160,
                        title: "The Epic Of Gilgamesh",
                        year: "-1700",
                        summary:"The epic’s prelude offers a general introduction to Gilgamesh, king of Uruk, who was two-thirds god and one-third man. He built magnificent ziggurats, or temple towers, surrounded his city with high walls, and laid out its orchards and fields. He was physically beautiful, immensely strong, and very wise. Although Gilgamesh was godlike in body and mind, he began his kingship as a cruel despot. He lorded over his subjects, raping any woman who struck his fancy, whether she was the wife of one of his warriors or the daughter of a nobleman. He accomplished his building projects with forced labor, and his exhausted subjects groaned under his oppression. The gods heard his subjects’ pleas and decided to keep Gilgamesh in check by creating a wild man named Enkidu, who was as magnificent as Gilgamesh. Enkidu became Gilgamesh’s great friend, and Gilgamesh’s heart was shattered when Enkidu died of an illness inflicted by the gods. Gilgamesh then traveled to the edge of the world and learned about the days before the deluge and other secrets of the gods, and he recorded them on stone tablets."
                      }, {
                        "author": "Stephan Mıtchell",
                        "country": "Achaemenid Empire",
                        "imageLink": "resources/images/the-book-of-job.jpg",
                        "language": "Hebrew",
                        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
                        "pages": 176,
                        "title": "The Book Of Job",
                        "year": "-600",
                        "summary":"In the course of one day, Job receives four messages, each bearing separate news that his livestock, servants, and ten children have all died due to marauding invaders or natural catastrophes. Job tears his clothes and shaves his head in mourning, but he still blesses God in his prayers. Satan appears in heaven again, and God grants him another chance to test Job. This time, Job is afflicted with horrible skin sores. His wife encourages him to curse God and to give up and die, but Job refuses, struggling to accept his circumstances."
                      },{
                        "author": "Geraldine Mc.Caughrean",
                        "country": "India/Iran/Iraq/Egypt/Tajikistan",
                        "imageLink": "resources/images/one-thousand-and-one-nights.jpg",
                        "language": "Arabic",
                        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
                        "pages": 288,
                        "title": "One Thousand and One Nights",
                        "year": "1200",
                        "summary":"Though each collection features different stories, they are all centered around the frame story of the sultan Shahrayar and his wife, Scheherazade. After finding out that his first wife is unfaithful, Shahrayar kills her and swears to marry a different woman each night before killing her the following morning to prevent further betrayal. Scheherazade, his vizier's daughter, concocts a plan to end this pattern. She marries Shahrayar, and then begins to tell him a story that night. However, she stops the story in the middle, so that he will be excited to hear the rest the following night. The next evening, she finishes that story and then begins another, following the same pattern for 1,001 nights, until Shahrayar has a change of heart. The stories she tells comprise the collection."
                      },{
                        "author": "Fenguen",
                        "country": "Iceland",
                        "imageLink": "resources/images/njals-saga.jpg",
                        "language": "Old Norse",
                        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
                        "pages": 384,
                        "title": "Nj\u00e1l's Saga",
                        "year": "1350",
                        "summary":"Njal's Saga can be thought of as roughly three distinct climactic episodes: the death of Gunnar, the burning of Njal, and Kari's revenge. Inevitably there are far too many characters and subplots to fit squarely into these sections, but this breakdown may help the reader to determine which characters to focus on. But before even Gunnar and Njal are introduced, we begin with Hrut and his brother Hoskuld.Hrut marries Unn and then goes abroad, where he has an affair with Queen Gunnhild of Norway, who puts a sexual curse on him. Hoskuld's daughter, Hallgerd, is forced to marry and is unhappy. Her foster-father kills the man she married. She marries another man willingly, but her foster-father also kills him."
                      },{
                        "author": "Jane Austen",
                        "country": "United Kingdom",
                        "imageLink": "resources/images/pride-and-prejudice.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
                        "pages": 226,
                        "title": "Pride and Prejudice",
                        "year": "1813",
                        "summary":"The news that a wealthy young gentleman named Charles Bingley has rented the manor of Netherfield Park causes a great stir in the nearby village of Longbourn, especially in the Bennet household. The Bennets have five unmarried daughters—from oldest to youngest, Jane, Elizabeth, Mary, Kitty, and Lydia—and Mrs. Bennet is desperate to see them all married. After Mr. Bennet pays a social visit to Mr. Bingley, the Bennets attend a ball at which Mr. Bingley is present. He is taken with Jane and spends much of the evening dancing with her. His close friend, Mr. Darcy, is less pleased with the evening and haughtily refuses to dance with Elizabeth, which makes everyone view him as arrogant and obnoxious."
                      }, {
                        "author": "Honor\u00e9 de Balzac",
                        "country": "France",
                        "imageLink": "resources/images/le-pere-goriot.jpg",
                        "language": "French",
                        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
                        "pages": 443,
                        "title": "Le P\u00e8re Goriot",
                        "year": "1835",
                        "summary":"The story takes place in Paris in the year 1819, in a decrepit, dirty, ill-smelling boardinghouse on the left bank of the Seine.Mme. Vauquer, a stingy old widow who owns the place, rules over her tenants. They are people with modest means and desires, like Mlle. Michonneau, the old maid; Poiret, a puppet-like human being; and a young orphan, Victorine Taillefer. Three tenants stand out in this company: Eugène de Rastignac, a young student from the provinces, of noble origin, but poor and eager to try his luck in the capital; Vautrin, the strong man, bon vivant and humorous, but mysterious and alarming; and Père Goriot, a retired merchant, who seems to be suffering from a mysterious sorrow."
                      },{
                        "author": "Samuel Beckett",
                        "country": "Republic of Ireland",
                        "imageLink": "resources/images/molloy-malone-dies-the-unnamable.jpg",
                        "language": "French, English",
                        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
                        "pages": 256,
                        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
                        "year": "1952",
                        "summary":"In order to describe and discuss these three novels, collectivelyreferred to as The Trilogy, the reader must set aside all previous conceptions and expectations regarding the novel form, for, like no literature since James Joyce’s Finnegans Wake (1939), Samuel Beckett’s awesome postwar work expands the definition of epic literature beyond all recognizable boundaries. While the first-person narrator (whose name and “habits of mind” may change but who represents the author in ever-contracting modes of existence) may on the surface seem cogent and communicative, the convolutions of his train of thought are so complex and reflexive that the “story” of his journey must be pieced together from the shards of his shattered narrative. Taken separately, each novel is its own perplexing narrative through landscapes and womblike environments and journeys in space and time, from the narrator’s search for his mother, through a dying man’s categorization of what is left of his physical world, to an abstract mind-state in which the narrator has become pure voice without substance. Taken together, they offer the rawest, most philosophically honest portrait of the artist ever undertaken by a modern writer."
                      }, {
                        "author": "Giovanni Boccaccio",
                        "country": "Italy",
                        "imageLink": "resources/images/the-decameron.jpg",
                        "language": "Italian",
                        "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
                        "pages": 1024,
                        "title": "The Decameron",
                        "year": "1351",
                        "summary":"t's Florence, Italy, 1348, and the Black Death has ravaged the city. Whole families have died. Neighborhoods are empty. Chaos reigns and the routines of daily life have been abandoned. In the church of Santa Maria Novella, a group of seven young gentlewomen gather to pray and discuss their sad life, hoping to find some way of alleviating their suffering. The oldest of the group, Pampinea, hits on a solution: road trip.  It seems like a good idea to get out of a city filled with contagion. There's nothing to do but watch the bodies pile up and hear the news about who died. Plus, it's dangerous to stay somewhere where all social and moral controls are gone and people are succumbing to carnal pleasures.Better to leave for the country and enjoy the beauty of nature where the houses are far enough apart that you're not watching your neighbors die every time you look out the window. The prevailing medical advice at the time suggested that healthy air and a cheerful frame of mind could decrease your chances of catching the deadly disease."
                      },{
                        "author": "Jorge Luis Borges",
                        "country": "Argentina",
                        "imageLink": "resources/images/ficciones.jpg",
                        "language": "Spanish",
                        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
                        "pages": 224,
                        "title": "Ficciones",
                        "year": "1965",
                        "summary":"Many of the stories are told in the first-person point of view of the narrator. This narrator often utilizes the authorial voice in which the narrator makes it clear to the reader that it is the voice of the writer himself rather than a fictional narrator who happens to utilize the first person point of view. In fact, in one of these stories the narrator is referred to in the author's name by a character in the story. By using this point of view, the writer becomes a participant in the story, a character to whom things happen in the course of the story's plot development.In some of the stories, the author writes his stories to seem like non-fiction articles in which he critiques other writers. In these stories, the author writes about literature and the impact of these specific books or stories on the reader as though he were critiquing the work of actual writers. In other stories, the author talks about events he claims happed to him. In one such story, the author talks about finding an encyclopedia about a planet that does not exist. In another, the author talks about staying overnight in the home of an Englishman who tells him a story about his involvement in the Irish rebellion of the early twentieth century."
                      },{
                        "author": "Emily Bront\u00eb",
                        "country": "United Kingdom",
                        "imageLink": "resources/images/wuthering-heights.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
                        "pages": 342,
                        "title": "Wuthering Heights",
                        "year": "1847",
                        "summary":"In the late winter months of 1801, a man named Lockwood rents a manor house called Thrushcross Grange in the isolated moor country of England. Here, he meets his dour landlord, Heathcliff, a wealthy man who lives in the ancient manor of Wuthering Heights, four miles away from the Grange. In this wild, stormy countryside, Lockwood asks his housekeeper, Nelly Dean, to tell him the story of Heathcliff and the strange denizens of Wuthering Heights. Nelly consents, and Lockwood writes down his recollections of her tale in his diary; these written recollections form the main part of Wuthering Heights."
                      },{
                        "author": "Albert Camus",
                        "country": "Algeria, French Empire",
                        "imageLink": "resources/images/l-etranger.jpg",
                        "language": "French",
                        "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
                        "pages": 185,
                        "title": "The Stranger",
                        "year": "1942",
                        "summary":"Meursault, the narrator, is a young man living in Algiers. After receiving a telegram informing him of his mother’s death, he takes a bus to Marengo, where his mother had been living in an old persons’ home. He sleeps for almost the entire trip. When he arrives, he speaks to the director of the home. The director allows Meursault to see his mother, but Meursault finds that her body has already been sealed in the coffin. He declines the caretaker’s offer to open the coffin."
                      }, {
                        "author": "Paul Celan",
                        "country": "Romania, France",
                        "imageLink": "resources/images/poems-paul-celan.jpg",
                        "language": "German",
                        "link": "\n",
                        "pages": 320,
                        "title": "Poems",
                        "year": "1952",
                        "summary":"Sir Walter Ralegh, like so many other Renaissance courtiers, considered the writing of poetry one of the polite arts, to be practiced in one’s leisure moments for the pleasure of friends. In his busy political, military, and adventuring career, his poetic efforts apparently carried little weight, and he never seems to have encouraged their publication, although he was much interested in presenting to the public his History of the World (1614) and his treatises on his expeditions to the new world. As a result of this carelessness, on his part and on the part of publishers who did publish his work and who sometimes published work that was not his under his name, over the years countless verses have been attributed to him, and no one can be sure how many of them he actually wrote. The small body of work that is unquestionably his, however, shows him to be a poet of high ability."
                      },{
                        "author": "Louis-Ferdinand C\u00e9line",
                        "country": "France",
                        "imageLink": "resources/images/voyage-au-bout-de-la-nuit.jpg",
                        "language": "French",
                        "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
                        "pages": 505,
                        "title": "Journey to the End of the Night",
                        "year": "1932",
                        "summary":"Journey to the End of the Nightis the first and most famous novel by Louis-Ferdinand Celine. Beyond the stylistic revolution brought by Celine, this is a novel of initiation in which Bardamu, the hero, will learn the misery and emptiness of existence.Summary of Journey to the End of the Night by CelineBardamu joined the army and accidentally discovers the horror of World War I, but became friends with Robinson, his brother in arms. Wounded and reformed, he attended a few women of low (Lola, Musyne) and then left France for Africa. There he finds the brutality of colonial life. Bardamu contracted a tropical disease and is transported by ship UNTIL the United States. He visited New York and Detroit, where he was hired as a worker at Ford. The discovery of life does not stop working to bind temporarily to Molly, a prostitute. But he returned to France to become a doctor at Drancy, a poor city. There he discovers the daily misery, death and greed. Tired of the patients, he joined a troupe of music hall, while Robinson, who met a woman (Madelon), became blind. He returned to Paris to work in a psychiatric hospital. Dr. Baritone, who runs the establishment, goes mad. Robinson will be killed by his mistress, leaving Bardamu alone."
                      },{
                        "author": "Miguel de Cervantes",
                        "country": "Spain",
                        "imageLink": "resources/images/don-quijote-de-la-mancha.jpg",
                        "language": "Spanish",
                        "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
                        "pages": 1056,
                        "title": "Don Quijote De La Mancha",
                        "year": "1610",
                        "summary":"Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked. After a first failed adventure, he sets out on a second one with a somewhat befuddled laborer named Sancho Panza, whom he has persuaded to accompany him as his faithful squire. In return for Sancho’s services, Don Quixote promises to make Sancho the wealthy governor of an isle. On his horse, Rocinante, a barn nag well past his prime, Don Quixote rides the roads of Spain in search of glory and grand adventure. He gives up food, shelter, and comfort, all in the name of a peasant woman, Dulcinea del Toboso, whom he envisions as a princess."
                      },{
                        "author": "Geoffrey Chaucer",
                        "country": "England",
                        "imageLink": "resources/images/the-canterbury-tales.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
                        "pages": 544,
                        "title": "The Canterbury Tales",
                        "year": "1450",
                        "summary":"At the Tabard Inn, a tavern in Southwark, near London, the narrator joins a company of twenty-nine pilgrims. The pilgrims, like the narrator, are traveling to the shrine of the martyr Saint Thomas Becket in Canterbury. The narrator gives a descriptive account of twenty-seven of these pilgrims, including a Knight, Squire, Yeoman, Prioress, Monk, Friar, Merchant, Clerk, Man of Law, Franklin, Haberdasher, Carpenter, Weaver, Dyer, Tapestry-Weaver, Cook, Shipman, Physician, Wife, Parson, Plowman, Miller, Manciple, Reeve, Summoner, Pardoner, and Host. (He does not describe the Second Nun or the Nun’s Priest, although both characters appear later in the book.) The Host, whose name, we find out in the Prologue to the Cook’s Tale, is Harry Bailey, suggests that the group ride together and entertain one another with stories. He decides that each pilgrim will tell two stories on the way to Canterbury and two on the way back. Whomever he judges to be the best storyteller will receive a meal at Bailey’s tavern, courtesy of the other pilgrims. The pilgrims draw lots and determine that the Knight will tell the first tale."

                      }, {
                        "author": "Anton Chekhov",
                        "country": "Russia",
                        "imageLink": "resources/images/stories-of-anton-chekhov.jpg",
                        "language": "Russian",
                        "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
                        "pages": 194,
                        "title": "Stories",
                        "year": "1886",
                        "summary":"Mary Jane, a Manhattan secretary, arrives two hours late to visit her old college roommate, Eloise Wengler, one cold and icy afternoon. While the weather worsens outside, the two women drink and talk about their past, including the death of Eloise's old boyfriend, Walt. Eventually, Mary Jane falls asleep. Angry and frustrated, Eloise denies her maid's request to let her husband spend the night because of the bad weather and orders her daughter, Ramona, to stop sleeping on the edge of her bed to accommodate an imaginary friend."
                      }, {
                        "author": "Joseph Conrad",
                        "country": "United Kingdom",
                        "imageLink": "resources/images/nostromo.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Nostromo\n",
                        "pages": 320,
                        "title": "Nostromo",
                        "year": "1904",
                        "summary":"The novel opens with simple description of the landscape of Costaguana (which we can only assume translates to The Coast of The Iguanas, right?), the fictional nation in which events take place. There are no characters in this chapter, and we get no firm idea of when in time this description comes from. By opening the novel this way, Conrad may be trying to give us a hint that this isn't the most plot-driven story in the universe. Thanks for the heads up, Conrad.It takes a couple of chapters for a clear set of plot points to emerge, and even then, there's a ton of jumping around. That being said, we'll lay out the novel's events for you in more or less linear form, because we're total sweethearts like that."
                      },{
                        "author": "Charles Dickens",
                        "country": "United Kingdom",
                        "imageLink": "resources/images/great-expectations.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Great_Expectations\n",
                        "pages": 194,
                        "title": "Great Expectations",
                        "year": "1861",
                        "summary":"Pip, a young orphan living with his sister and her husband in the marshes of Kent, sits in a cemetery one evening looking at his parents’ tombstones. Suddenly, an escaped convict springs up from behind a tombstone, grabs Pip, and orders him to bring him food and a file for his leg irons. Pip obeys, but the fearsome convict is soon captured anyway. The convict protects Pip by claiming to have stolen the items himself."
                      }, {
                        "author": "Denis Diderot",
                        "country": "France",
                        "imageLink": "resources/images/jacques-the-fatalist.jpg",
                        "language": "French",
                        "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
                        "pages": 596,
                        "title": "Jacques the Fatalist",
                        "year": "1796",
                        "summary":"Jacques the Fatalist and His Master is a philosophical novel in which Diderot, through a fictional narrative, examines the problem of moral responsibility and the consequences of accepting a philosophy of determinism. Jacques and his Master start out on a journey and soon find themselves the victims of chance occurrences. One of the horses suddenly bolts for no apparent reason and the two travelers end up at an inn, where they are robbed. The progress of the entire journey is governed by chance (fate); neither Jacques nor his Master has any control over where they go. Jacques explains all of these occurrences and others throughout the journey by saying that they were predetermined, or as he defines the situations, written on the great wheel of fate."
                          }, {
                        "author": "Alfred D\u00f6blin",
                        "country": "Germany",
                        "imageLink": "resources/images/berlin-alexanderplatz.jpg",
                        "language": "German",
                        "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
                        "pages": 600,
                        "title": "Berlin Alexanderplatz",
                        "year": "1929",
                        "summary":"The novel’s main plot centres on small-time criminal Franz Biberkopf, who at the beginning of the novel is released from Tegel prison in Berlin, where he served four years after having murdered his girlfriend in an act of rage. Although determined to live a reformed life from now on, Franz is soon drawn into criminal activities again. Bieberkopf’s descent into the Berlin underworld is triggered by his interactions with Reinhold, a gangster boss and nymphomaniac. At first, Reinhold passes on to Franz the girls he himself has grown tired of. But soon, Reinhold tries to make use of Franz in his criminal endeavours as well. When Franz refuses to help Reinhold’s gang during a robbery, Reinhold throws him out of a moving car. Franz survives but loses his right arm. Surprisingly, Franz refrains from any attempts at revenge and confines himself to silent resignation. He begins a love affair with the young prostitute Mieze, who supports him financially."

                      },{
                        "author": "Fyodor Dostoevsky",
                        "country": "Russia",
                        "imageLink": "resources/images/crime-and-punishment.jpg",
                        "language": "Russian",
                        "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
                        "pages": 551,
                        "title": "Crime and Punishment",
                        "year": "1866",
                        "summary":"Rodion Romanovich Raskolnikov, a former student, lives in a tiny garret on the top floor of a run-down apartment building in St. Petersburg. He is sickly, dressed in rags, short on money, and talks to himself, but he is also handsome, proud, and intelligent. He is contemplating committing an awful crime, but the nature of the crime is not yet clear. He goes to the apartment of an old pawnbroker, Alyona Ivanovna, to get money for a watch and to plan the crime. Afterward, he stops for a drink at a tavern, where he meets a man named Marmeladov, who, in a fit of drunkenness, has abandoned his job and proceeded on a five-day drinking binge, afraid to return home to his family. Marmeladov tells Raskolnikov about his sickly wife, Katerina Ivanovna, and his daughter, Sonya, who has been forced into prostitution to support the family. Raskolnikov walks with Marmeladov to Marmeladov’s apartment, where he meets Katerina and sees firsthand the squalid conditions in which they live."
                      }, {
                        "author": "Fyodor Dostoevsky",
                        "country": "Russia",
                        "imageLink": "resources/images/the-idiot.jpg",
                        "language": "Russian",
                        "link": "https://en.wikipedia.org/wiki/The_Idiot\n",
                        "pages": 656,
                        "title": "The Idiot",
                        "year": 1869,
                        "summary":"Myshkin's only relation in St. Petersburg is the very distant Lizaveta Prokofyevna Yepanchin. Madame Yepanchin is the wife of General Yepanchin, a wealthy and respected man in his late fifties. The prince makes the acquaintance of the Yepanchins, who have three daughters, Alexandra, Adelaida, and Aglaya, the latter being the youngest and the most beautiful."
                      },{
                        "author": "Fyodor Dostoevsky",
                        "country": "Russia",
                        "imageLink": "resources/images/the-possessed.jpg",
                        "language": "Russian",
                        "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
                        "pages": 768,
                        "title": "The Possessed",
                        "year": 1872,
                        "summary":"The novel follows the story of two families, the Stavrogins and the Verkhovenskys and the circle of people that revolve around these two families. Stepan Verkhovensky, an intellectual, liberal, and ex-professor tutors Mrs. Stavrogin's son, Nicholas and keeps a small circle of political radicals. Nicholas Stavrogin, a charismatic but morally questionable and rootless young man, returns to his provincial town and brings the various sundry affairs with local women and hangers on of political radicals with him. One of these men is Peter Verkhovensky, the estranged son of Stepan who has become involved in radical politics. Other young men associated with Nicholas who have become involved in radical politics are Shatov and Kirilov. Shatov, once a socialist member of Peter's group and now a reactionary, wishes to leave the group, though Peter will not let him leave. Kirilov is a friend of Shatov's who accompanied Shatov on a trip to America before he also rejected socialism in favor of a strange philosophy that glorifies suicide."
                      },{
                        "author": "Fyodor Dostoevsky",
                        "country": "Russia",
                        "imageLink": "resources/images/the-brothers-karamazov.jpg",
                        "language": "Russian",
                        "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
                        "pages": 824,
                        "title": "The Brothers Karamazov",
                        "year": 1880,
                        "summary":"In his youth, Fyodor Pavlovich Karamazov is a coarse, vulgar man whose main concerns are making money and seducing young women. He marries twice and has three sons: Dmitri, the child of his first wife, and Ivan and Alyosha, children of his second wife. Fyodor Pavlovich never has any interest in his sons, and when their mothers die, he sends them away to be brought up by relatives and friends. At the beginning of the novel, Dmitri Karamazov, who is now a twenty-eight-year-old soldier, has just returned to Fyodor Pavlovich’s town. Fyodor Pavlovich is unhappy to see Dmitri because Dmitri has come to claim an inheritance left to him by his mother. Fyodor Pavlovich plans to keep the inheritance for himself. The two men swiftly fall into conflict over the money, and the coldly intellectual Ivan, who knows neither his father nor his brother well, is eventually called in to help settle their dispute. The kind, faithful Alyosha, who is about twenty, also lives in the town, where he is an acolyte, or apprentice, at the monastery,"
                      }, {
                        "author": "George Eliot",
                        "country": "United Kingdom",
                        "imageLink": "resources/images/middlemarch.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Middlemarch\n",
                        "pages": 800,
                        "title": "Middlemarch",
                        "year": 1871,
                        "summary":"Dorothea is an earnest intelligent woman who makes a serious error in judgment when she chooses to marry Edward Casaubon, a pompous scholar many years her senior. Dorothea hopes to be actively involved in his work, but he wants her to serve as a secretary. She comes to doubt both his talent and his alleged magnum opus. Furthermore, the controlling Casaubon becomes jealous when she develops a friendship with Will Ladislaw, his idealistic cousin. Although disappointed, Dorothea remains committed to the marriage and tries to appease her husband. After Casaubon has a heart attack, Dorothea is clearly devoted to him, but he bars Ladislaw from visiting, believing that his cousin will pursue Dorothea when he dies."
                      },{
                        "author": "Ralph Ellison",
                        "country": "United States",
                        "imageLink": "resources/images/invisible-man.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Invisible_Man\n",
                        "pages": 581,
                        "title": "Invisible Man",
                        "year": 1952,
                        "summary":"While Invisible Man bears comparison with the existentialist novels of Sartre and Camus, it also maps out the story of one man’s identity against the struggles of collective self-definition. This takes the narrator-protagonist through the circumscribed social possibilities afforded to African-Americans, from enslaved grandparents through southern education, to models associated with Booker T. Washington, through to the full range of Harlem politics. Ellison’s almost sociological clarity in the way he shows his central character working through these possibilities is skillfully worked into a novel about particular people, events, and situations, from the nightmare world of the ironically named Liberty Paints to the Marxist-Leninist machinations of the Brotherhood. In the process, Ellison offers sympathetic but severe critiques of the ideological resources of black culture, such as religion and music."
                      },{
                        "author": "Euripides",
                        "country": "Greece",
                        "imageLink": "resources/images/medea.jpg",
                        "language": "Greek",
                        "link": "https://en.wikipedia.org/wiki/Medea_(play)\n",
                        "pages": 104,
                        "title": "Medea",
                        "year": -431,
                        "summary":"Outside the royal palace, a nurse laments the events that have lead to the present crisis. After a long series of trials and adventures, which ultimately forced Jason and Medea to seek exile in Corinth, the pair had settled down and established their family, achieving a degree of fame and respectability. Jason's recent abandonment of that family has crushed Medea emotionally, to the degree that she curses her own existence, as well as that of her two children."
                      },{
                        "author": "William Faulkner",
                        "country": "United States",
                        "imageLink": "resources/images/absalom-absalom.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
                        "pages": 313,
                        "title": "Absalom, Absalom!",
                        "year": 1936,
                        "summary":"In 1833, a wild, imposing man named Thomas Sutpen comes to Jefferson, Mississippi, with a group of slaves and a French architect in tow. He buys a hundred square miles of land from an Indian tribe, raises a manor house, plants cotton, and marries the daughter of a local merchant, and within a few years is entrenched among the local aristocracy. Sutpen has a son and a daughter, Henry and Judith, who grow up in a life of uncultivated ease in the northern Mississippi countryside."
                      },{
                        "author": "William Faulkner",
                        "country": "United States",
                        "imageLink": "resources/images/the-sound-and-the-fury.jpg",
                        "language": "English",
                        "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
                        "pages": 326,
                        "title": "The Sound and the Fury",
                        "year": 1929,
                        "summary":"Attempting to apply traditional plot summary to The Sound and the Fury is difficult. At a basic level, the novel is about the three Compson brothers’ obsessions with the their sister Caddy, but this brief synopsis represents merely the surface of what the novel contains. A story told in four chapters, by four different voices, and out of chronological order, The Sound and the Fury requires intense concentration and patience to interpret and understand."
                      },{
                        "author": "Gustave Flaubert",
                        "country": "France",
                        "imageLink": "resources/images/madame-bovary.jpg",
                        "language": "French",
                        "link": "https://en.wikipedia.org/wiki/Madame_Bovary\n",
                        "pages": 528,
                        "title": "Madame Bovary",
                        "year": 1857,
                        "summary":"Madame Bovary begins when Charles Bovary is a young boy, unable to fit in at his new school and ridiculed by his new classmates. As a child, and later when he grows into a young man, Charles is mediocre and dull. He fails his first medical exam and only barely manages to become a second-rate country doctor. His mother marries him off to a widow who dies soon afterward, leaving Charles much less money than he expected."
                      },{
                        "author": "Gustave Flaubert",
                        "country": "France",
                        "imageLink": "resources/images/l-education-sentimentale.jpg",
                        "language": "French",
                        "link": "https://en.wikipedia.org/wiki/Sentimental_Education\n",
                        "pages": 606,
                        "title": "Sentimental Education",
                        "year": 1869,
                        "summary":"Frédéric Moreau watches Paris disappear as his boat heads for his childhood home, Nogent-sur-Seine. On the boat, he sees a beautiful woman, Madame Arnoux, and instantly falls in love with her. At home, he spends time with Charles Deslauriers, his best friend, who encourages him to befriend Monsieur Arnoux as a way of getting closer to Madame. He also tells Frédéric to take advantage of Frédéric’s mother’s friend Roque, who has connections to a man in high society, Monsieur Dambreuse."
                      },{
                        "author": "Federico Garc\u00eda Lorca",
                        "country": "Spain",
                        "imageLink": "resources/images/gypsy-ballads.jpg",
                        "language": "Spanish",
                        "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
                        "pages": 218,
                        "title": "Gypsy Ballads",
                        "year": 1928,
                        "summary":"Since it is the first poem in Romancero gitano, 1924-1927 (1928; The Gypsy Ballads of García Lorca, 1951, 1953), “Ballad of the Moon, Moon” sets the tone and also signals the role of the moon and other natural elements in the book. The moon appears in the smithy (gypsies were often blacksmiths) dressed as a woman, wearing a bustle of white lilies (suggested by the moon’s whiteness), and she begins a lascivious dance in front of a little boy left in the shop by his parents. García Lorca renders the spell cast on the boy through rhyme and repetition: “The boy stares and stares at her./ The boy keeps staring hard.” Captivated, the boy warns the moon that she must flee before the gypsies return or they will chop her up for necklaces and silver rings, typical gypsy jewelry. The words that he uses to caution the moon are incantatory, “Run away, moon, run away, moon.”"
                      },{
                        "author": "Gabriel Garc\u00eda M\u00e1rquez",
                        "country": "Colombia",
                        "imageLink": "resources/images/one-hundred-years-of-solitude.jpg",
                        "language": "Spanish",
                        "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
                        "pages": 417,
                        "title": "One Hundred Years of Solitude",
                        "year": 1967,
                        "summary":"More than a century goes by over the course of the book, and so most of the events that García Márquez describes are the major turning points in the lives of the Buendías: births, deaths, marriages, love affairs. Some of the Buendía men are wild and sexually rapacious, frequenting brothels and taking lovers. Others are quiet and solitary, preferring to shut themselves up in their rooms to make tiny golden fish or to pore over ancient manuscripts. The women, too, range from the outrageously outgoing, like Meme, who once brings home seventy-two friends from boarding school, to the prim and proper Fernanda del Carpio, who wears a special nightgown with a hole at the crotch when she consummates her marriage with her husband."
                      },

            ]
            oModel.setProperty("/secondbooksModel", secondbooksmodel);
        },
            bookchange: function (oEvent,) {
            
                var change = oModel.getProperty(
                    oEvent.getSource().getBindingContext().getPath()
                )
                oModel.setProperty("/bookchange", change);

        }

            }
        );
    });