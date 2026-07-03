export interface Scholar {
  id: string;
  name: string;
  institution: string;
  field: string;
  type: "foundational" | "contemporary";
  bio: string;
  works: { title: string; year: number; publisher: string }[];
  scholarUrl: string;
  website?: string;
}

function googleScholar(name: string) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(name)}`;
}

export const scholars: Scholar[] = [
  {
    id: "v1", name: "Gillian Beer", institution: "University of Cambridge",
    field: "Victorian Studies", type: "foundational",
    bio: "One of the most influential Victorian scholars, known for her work on the relationship between literature and science, particularly Darwinism.",
    works: [
      { title: "Darwin's Plots", year: 1983, publisher: "Cambridge UP" },
      { title: "Open Fields: Science in Cultural Encounter", year: 1996, publisher: "Oxford UP" },
    ],
    scholarUrl: googleScholar("Gillian Beer"),
  },
  {
    id: "v2", name: "Sharon Marcus", institution: "Columbia University",
    field: "Victorian Studies", type: "contemporary",
    bio: "Pioneer of surface reading and scholar of Victorian culture, celebrity, and gender.",
    works: [
      { title: "Between Women: Friendship, Desire, and Marriage in Victorian England", year: 2007, publisher: "Princeton UP" },
      { title: "The Drama of Celebrity", year: 2019, publisher: "Princeton UP" },
    ],
    scholarUrl: googleScholar("Sharon Marcus"),
    website: "https://english.columbia.edu/content/sharon-marcus",
  },
  {
    id: "v3", name: "Talia Schaffer", institution: "CUNY Graduate Center",
    field: "Victorian Studies", type: "contemporary",
    bio: "Leading scholar of Victorian literature, material culture, and ethics of care.",
    works: [
      { title: "Romance's Rival: Familiar Marriage in Victorian Fiction", year: 2016, publisher: "Oxford UP" },
      { title: "Communities of Care: The Social Ethics of Victorian Fiction", year: 2021, publisher: "Princeton UP" },
    ],
    scholarUrl: googleScholar("Talia Schaffer"),
  },
  {
    id: "r1", name: "Anne Mellor", institution: "UCLA",
    field: "Romantic Studies", type: "foundational",
    bio: "Preeminent scholar of British Romanticism and gender, known for her feminist rereadings of canonical Romantic texts.",
    works: [
      { title: "Romanticism and Gender", year: 1993, publisher: "Routledge" },
      { title: "Mary Shelley: Her Life, Her Fiction, Her Monsters", year: 1988, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Anne Mellor Romanticism"),
  },
  {
    id: "r2", name: "Jerome McGann", institution: "University of Virginia",
    field: "Romantic Studies", type: "foundational",
    bio: "Highly influential critic of Romantic ideology and pioneer of digital editorial theory.",
    works: [
      { title: "The Romantic Ideology", year: 1983, publisher: "U of Chicago P" },
      { title: "A Critique of Modern Textual Criticism", year: 1983, publisher: "U of Chicago P" },
    ],
    scholarUrl: googleScholar("Jerome McGann"),
    website: "https://www.iath.virginia.edu/jjm2f",
  },
  {
    id: "r3", name: "Adriana Craciun", institution: "Boston University",
    field: "Romantic Studies", type: "contemporary",
    bio: "Innovative scholar working at the intersection of Romantic literature, polar exploration, and environmental history.",
    works: [
      { title: "Writing Arctic Disaster: Authorship and Exploration", year: 2016, publisher: "Cambridge UP" },
      { title: "British Women Writers and the French Revolution", year: 2005, publisher: "Palgrave" },
    ],
    scholarUrl: googleScholar("Adriana Craciun"),
  },
  {
    id: "m1", name: "Michael Levenson", institution: "University of Virginia",
    field: "Modernist Studies", type: "foundational",
    bio: "Leading authority on literary modernism, tracing its intellectual and formal genealogies.",
    works: [
      { title: "A Genealogy of Modernism", year: 1984, publisher: "Cambridge UP" },
      { title: "Modernism", year: 2011, publisher: "Yale UP" },
    ],
    scholarUrl: googleScholar("Michael Levenson modernism"),
  },
  {
    id: "m2", name: "Douglas Mao", institution: "Johns Hopkins University",
    field: "Modernist Studies", type: "contemporary",
    bio: "Scholar of modernism and aesthetics, known for his work on beauty, objects, and literary form.",
    works: [
      { title: "Solid Objects: Modernism and the Test of Production", year: 1998, publisher: "Princeton UP" },
      { title: "Fateful Beauty: Aesthetic Environments, Juvenile Development", year: 2008, publisher: "Princeton UP" },
    ],
    scholarUrl: googleScholar("Douglas Mao modernism"),
  },
  {
    id: "m3", name: "Jessica Berman", institution: "University of Maryland",
    field: "Modernist Studies", type: "contemporary",
    bio: "Works on modernist literature, cosmopolitanism, and global networks of literary culture.",
    works: [
      { title: "Modernist Commitments: Ethics, Politics, and Transnational Modernism", year: 2011, publisher: "Columbia UP" },
      { title: "Modernist Fiction, Cosmopolitanism and the Politics of Community", year: 2001, publisher: "Cambridge UP" },
    ],
    scholarUrl: googleScholar("Jessica Berman modernism"),
  },
  {
    id: "p1", name: "Gayatri Chakravorty Spivak", institution: "Columbia University",
    field: "Postcolonial Studies", type: "foundational",
    bio: "One of the most influential theorists of postcolonialism and deconstruction. Her essay 'Can the Subaltern Speak?' is a foundational text in critical theory.",
    works: [
      { title: "A Critique of Postcolonial Reason", year: 1999, publisher: "Harvard UP" },
      { title: "An Aesthetic Education in the Era of Globalization", year: 2012, publisher: "Harvard UP" },
      { title: "Death of a Discipline", year: 2003, publisher: "Columbia UP" },
    ],
    scholarUrl: googleScholar("Gayatri Chakravorty Spivak"),
    website: "https://english.columbia.edu/content/gayatri-chakravorty-spivak",
  },
  {
    id: "p2", name: "Homi K. Bhabha", institution: "Harvard University",
    field: "Postcolonial Studies", type: "foundational",
    bio: "Theorist of cultural hybridity, mimicry, and ambivalence whose work transformed postcolonial and cultural studies.",
    works: [
      { title: "The Location of Culture", year: 1994, publisher: "Routledge" },
      { title: "Nation and Narration", year: 1990, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Homi Bhabha"),
    website: "https://english.harvard.edu/people/homi-k-bhabha",
  },
  {
    id: "p3", name: "Simon Gikandi", institution: "Princeton University",
    field: "Postcolonial Studies", type: "contemporary",
    bio: "Preeminent scholar of African and postcolonial literatures, working on the relationship between slavery, modernity, and aesthetics.",
    works: [
      { title: "Maps of Englishness: Writing Identity in the Culture of Colonialism", year: 1996, publisher: "Columbia UP" },
      { title: "Slavery and the Culture of Taste", year: 2011, publisher: "Princeton UP" },
    ],
    scholarUrl: googleScholar("Simon Gikandi"),
  },
  {
    id: "p4", name: "Yogita Goyal", institution: "UCLA",
    field: "Postcolonial Studies", type: "contemporary",
    bio: "Works on the Black Atlantic, African literature, and the genre politics of postcolonial fiction.",
    works: [
      { title: "Runaway Genres: The Global Afterlives of Slavery", year: 2019, publisher: "NYU Press" },
      { title: "Romance, Diaspora, and Black Atlantic Literature", year: 2010, publisher: "Cambridge UP" },
    ],
    scholarUrl: googleScholar("Yogita Goyal"),
  },
  {
    id: "e1", name: "Lawrence Buell", institution: "Harvard University",
    field: "Ecocriticism", type: "foundational",
    bio: "Founder of modern ecocriticism, whose work established the field's key concepts and methods.",
    works: [
      { title: "The Environmental Imagination", year: 1995, publisher: "Harvard UP" },
      { title: "The Future of Environmental Criticism", year: 2005, publisher: "Blackwell" },
      { title: "Writing for an Endangered World", year: 2001, publisher: "Harvard UP" },
    ],
    scholarUrl: googleScholar("Lawrence Buell ecocriticism"),
  },
  {
    id: "e2", name: "Timothy Morton", institution: "Rice University",
    field: "Ecocriticism", type: "contemporary",
    bio: "Influential theorist of ecology, objects, and the Anthropocene, known for the concepts of dark ecology and hyperobjects.",
    works: [
      { title: "Ecology Without Nature", year: 2007, publisher: "Harvard UP" },
      { title: "Hyperobjects: Philosophy and Ecology after the End of the World", year: 2013, publisher: "U of Minnesota P" },
      { title: "Dark Ecology: For a Logic of Future Coexistence", year: 2016, publisher: "Columbia UP" },
    ],
    scholarUrl: googleScholar("Timothy Morton ecology"),
    website: "https://www.timothymorton.org",
  },
  {
    id: "e3", name: "Stacy Alaimo", institution: "University of Texas at Arlington",
    field: "Ecocriticism", type: "contemporary",
    bio: "Theorist of material ecocriticism and transcorporeality, exploring the porous boundaries between human bodies and environments.",
    works: [
      { title: "Bodily Natures: Science, Environment, and the Material Self", year: 2010, publisher: "Indiana UP" },
      { title: "Exposed: Environmental Politics and Pleasures in Posthuman Times", year: 2016, publisher: "U of Minnesota P" },
    ],
    scholarUrl: googleScholar("Stacy Alaimo"),
  },
  {
    id: "e4", name: "Stephanie LeMenager", institution: "University of Oregon",
    field: "Ecocriticism", type: "contemporary",
    bio: "Works on petroculture, climate change, and the affective dimensions of environmental crisis.",
    works: [
      { title: "Living Oil: Petroleum Culture in the American Century", year: 2014, publisher: "Oxford UP" },
      { title: "Technology and the Feeling of Aliveness", year: 2023, publisher: "Duke UP" },
    ],
    scholarUrl: googleScholar("Stephanie LeMenager"),
  },
  {
    id: "t1", name: "Fredric Jameson", institution: "Duke University",
    field: "Literary Theory", type: "foundational",
    bio: "The foremost Marxist literary critic in the Anglophone world, whose work on postmodernism, narrative, and realism has shaped the field for decades.",
    works: [
      { title: "The Political Unconscious", year: 1981, publisher: "Cornell UP" },
      { title: "Postmodernism, or The Cultural Logic of Late Capitalism", year: 1991, publisher: "Duke UP" },
      { title: "The Antinomies of Realism", year: 2013, publisher: "Verso" },
    ],
    scholarUrl: googleScholar("Fredric Jameson"),
  },
  {
    id: "t2", name: "Terry Eagleton", institution: "University of Lancaster",
    field: "Literary Theory", type: "foundational",
    bio: "Prolific Marxist critic and theorist whose introductory and polemical works have shaped generations of literary scholars.",
    works: [
      { title: "Literary Theory: An Introduction", year: 1983, publisher: "Blackwell" },
      { title: "The Event of Literature", year: 2012, publisher: "Yale UP" },
      { title: "How to Read Literature", year: 2013, publisher: "Yale UP" },
    ],
    scholarUrl: googleScholar("Terry Eagleton"),
  },
  {
    id: "t3", name: "Rita Felski", institution: "University of Virginia",
    field: "Literary Theory", type: "contemporary",
    bio: "Leading figure in postcritical reading and the sociology of literature, challenging the dominance of critique in literary studies.",
    works: [
      { title: "Uses of Literature", year: 2008, publisher: "Blackwell" },
      { title: "The Limits of Critique", year: 2015, publisher: "U of Chicago P" },
      { title: "Hooked: Art and Attachment", year: 2020, publisher: "U of Chicago P" },
    ],
    scholarUrl: googleScholar("Rita Felski"),
    website: "https://english.virginia.edu/people/rf8r",
  },
  {
    id: "t4", name: "Caroline Levine", institution: "Cornell University",
    field: "Literary Theory", type: "contemporary",
    bio: "Formalist theorist who expanded the concept of form beyond literature to social and political structures.",
    works: [
      { title: "Forms: Whole, Rhythm, Hierarchy, Network", year: 2015, publisher: "Princeton UP" },
      { title: "The Serious Pleasures of Suspense", year: 2003, publisher: "U of Virginia P" },
    ],
    scholarUrl: googleScholar("Caroline Levine literary theory"),
  },
  {
    id: "a1", name: "Henry Louis Gates Jr.", institution: "Harvard University",
    field: "American Literature", type: "foundational",
    bio: "Preeminent scholar of African American literature and culture, known for his theories of signification and recovery of lost Black literary texts.",
    works: [
      { title: "The Signifying Monkey: A Theory of African American Literary Criticism", year: 1988, publisher: "Oxford UP" },
      { title: "Figures in Black: Words, Signs, and the Racial Self", year: 1987, publisher: "Oxford UP" },
    ],
    scholarUrl: googleScholar("Henry Louis Gates Jr"),
    website: "https://hutchinscenter.fas.harvard.edu/henry-louis-gates-jr",
  },
  {
    id: "a2", name: "Toni Morrison", institution: "Princeton University",
    field: "American Literature", type: "foundational",
    bio: "Nobel laureate novelist and critic whose fiction and critical writing transformed the study of race and American literature.",
    works: [
      { title: "Playing in the Dark: Whiteness and the Literary Imagination", year: 1992, publisher: "Harvard UP" },
      { title: "Beloved", year: 1987, publisher: "Knopf" },
    ],
    scholarUrl: googleScholar("Toni Morrison"),
  },
  {
    id: "a3", name: "Stephanie Burt", institution: "Harvard University",
    field: "American Literature", type: "contemporary",
    bio: "Leading contemporary poetry critic and scholar, known for accessible and rigorous readings of modern and contemporary poetry.",
    works: [
      { title: "The Poem Is You: 60 Contemporary American Poems and How to Read Them", year: 2016, publisher: "Harvard UP" },
      { title: "Don't Read Poetry: A Book About How to Read Poems", year: 2019, publisher: "Basic Books" },
    ],
    scholarUrl: googleScholar("Stephanie Burt poetry"),
    website: "https://english.harvard.edu/people/stephanie-burt",
  },
  {
    id: "w1", name: "David Damrosch", institution: "Harvard University",
    field: "World Literature", type: "foundational",
    bio: "Leading theorist of world literature as a mode of reading and circulation rather than a fixed canon.",
    works: [
      { title: "What Is World Literature?", year: 2003, publisher: "Princeton UP" },
      { title: "How to Read World Literature", year: 2008, publisher: "Wiley-Blackwell" },
      { title: "Around the World in 80 Books", year: 2021, publisher: "Penguin" },
    ],
    scholarUrl: googleScholar("David Damrosch world literature"),
    website: "https://complit.fas.harvard.edu/people/david-damrosch",
  },
  {
    id: "w2", name: "Franco Moretti", institution: "Stanford University",
    field: "World Literature", type: "foundational",
    bio: "Pioneer of distant reading and world-systems approaches to literature, transforming how scholars think about literary history at scale.",
    works: [
      { title: "Distant Reading", year: 2013, publisher: "Verso" },
      { title: "The Way of the World", year: 1987, publisher: "Verso" },
      { title: "Atlas of the European Novel", year: 1998, publisher: "Verso" },
    ],
    scholarUrl: googleScholar("Franco Moretti"),
  },
  {
    id: "w3", name: "Rebecca Walkowitz", institution: "Rutgers University",
    field: "World Literature", type: "contemporary",
    bio: "Works on translation, world literature, and the global dimensions of contemporary fiction.",
    works: [
      { title: "Born Translated: The Contemporary Novel in an Age of World Literature", year: 2015, publisher: "Columbia UP" },
      { title: "Cosmopolitan Style: Modernism Beyond the Nation", year: 2006, publisher: "Columbia UP" },
    ],
    scholarUrl: googleScholar("Rebecca Walkowitz"),
  },
  {
    id: "w4", name: "Pheng Cheah", institution: "UC Berkeley",
    field: "World Literature", type: "contemporary",
    bio: "Philosopher and literary theorist who rethinks world literature through postcolonial and phenomenological frameworks.",
    works: [
      { title: "What Is a World? On Postcolonial Literature as World Literature", year: 2016, publisher: "Duke UP" },
      { title: "Inhuman Conditions: On Cosmopolitanism and Human Rights", year: 2006, publisher: "Harvard UP" },
    ],
    scholarUrl: googleScholar("Pheng Cheah"),
  },
  {
    id: "g1", name: "Eve Kosofsky Sedgwick", institution: "CUNY Graduate Center",
    field: "Gender & Queer Studies", type: "foundational",
    bio: "Founder of queer theory whose work on homosociality, the closet, and queer reading practices transformed literary and cultural studies.",
    works: [
      { title: "Between Men: English Literature and Male Homosocial Desire", year: 1985, publisher: "Columbia UP" },
      { title: "Epistemology of the Closet", year: 1990, publisher: "U of California P" },
      { title: "Tendencies", year: 1993, publisher: "Duke UP" },
    ],
    scholarUrl: googleScholar("Eve Kosofsky Sedgwick"),
  },
  {
    id: "g2", name: "Sara Ahmed", institution: "Kingston University",
    field: "Gender & Queer Studies", type: "contemporary",
    bio: "Feminist and queer theorist working on affect, orientation, and the lived experience of diversity and institutional power.",
    works: [
      { title: "Queer Phenomenology: Orientations, Objects, Others", year: 2006, publisher: "Duke UP" },
      { title: "The Promise of Happiness", year: 2010, publisher: "Duke UP" },
      { title: "Living a Feminist Life", year: 2017, publisher: "Duke UP" },
    ],
    scholarUrl: googleScholar("Sara Ahmed"),
    website: "https://www.saranahmed.com",
  },
  {
    id: "g3", name: "Heather Love", institution: "University of Pennsylvania",
    field: "Gender & Queer Studies", type: "contemporary",
    bio: "Queer theorist known for work on feeling, failure, and the politics of backward-looking affect in queer culture.",
    works: [
      { title: "Feeling Backward: Loss and the Politics of Queer History", year: 2007, publisher: "Harvard UP" },
      { title: "Underdogs: Social Deviance and Queer Theory", year: 2021, publisher: "U of Chicago P" },
    ],
    scholarUrl: googleScholar("Heather Love queer theory"),
  },
  {
    id: "tr1", name: "Lawrence Venuti", institution: "Temple University",
    field: "Translation Studies", type: "foundational",
    bio: "Leading theorist of translation ethics, foreignization, and the translator's invisibility in literary culture.",
    works: [
      { title: "The Translator's Invisibility: A History of Translation", year: 1995, publisher: "Routledge" },
      { title: "The Translation Studies Reader", year: 2000, publisher: "Routledge" },
      { title: "Translation Changes Everything", year: 2013, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Lawrence Venuti translation"),
  },
  {
    id: "tr2", name: "Emily Apter", institution: "NYU",
    field: "Translation Studies", type: "contemporary",
    bio: "Works on the politics of translation, untranslatability, and the global circulation of theory.",
    works: [
      { title: "The Translation Zone: A New Comparative Literature", year: 2006, publisher: "Princeton UP" },
      { title: "Against World Literature: On the Politics of Untranslatability", year: 2013, publisher: "Verso" },
    ],
    scholarUrl: googleScholar("Emily Apter translation"),
    website: "https://as.nyu.edu/faculty/emily-apter.html",
  },
  {
    id: "ren1", name: "Stephen Greenblatt", institution: "Harvard University",
    field: "Renaissance / Early Modern", type: "foundational",
    bio: "Founder of New Historicism whose work on self-fashioning and cultural poetics transformed Renaissance studies.",
    works: [
      { title: "Renaissance Self-Fashioning: From More to Shakespeare", year: 1980, publisher: "U of Chicago P" },
      { title: "Will in the World: How Shakespeare Became Shakespeare", year: 2004, publisher: "Norton" },
      { title: "The Swerve: How the World Became Modern", year: 2011, publisher: "Norton" },
    ],
    scholarUrl: googleScholar("Stephen Greenblatt"),
    website: "https://english.harvard.edu/people/stephen-greenblatt",
  },
  {
    id: "ren2", name: "Ayanna Thompson", institution: "George Washington University",
    field: "Renaissance / Early Modern", type: "contemporary",
    bio: "Leading scholar of Shakespeare, race, and performance, challenging colorblind approaches to the Renaissance canon.",
    works: [
      { title: "Passing Strange: Shakespeare, Race, and Contemporary America", year: 2011, publisher: "Oxford UP" },
      { title: "Colorblind Shakespeare: New Perspectives on Race and Performance", year: 2006, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Ayanna Thompson Shakespeare"),
  },
  {
    id: "ren3", name: "Margreta de Grazia", institution: "University of Pennsylvania",
    field: "Renaissance / Early Modern", type: "contemporary",
    bio: "Influential scholar of Shakespeare and textual history, rethinking foundational assumptions about the Hamlet text.",
    works: [
      { title: "Hamlet Without Hamlet", year: 2007, publisher: "Cambridge UP" },
      { title: "Shakespeare Verbatim: The Reproduction of Authenticity", year: 1991, publisher: "Oxford UP" },
    ],
    scholarUrl: googleScholar("Margreta de Grazia Shakespeare"),
  },
  {
    id: "med1", name: "Carolyn Dinshaw", institution: "NYU",
    field: "Medieval Studies", type: "foundational",
    bio: "Pioneer of queer medieval studies, exploring anachronism, affect, and non-normative temporalities in medieval texts.",
    works: [
      { title: "Getting Medieval: Sexualities and Communities, Pre- and Postmodern", year: 1999, publisher: "Duke UP" },
      { title: "How Soon Is Now?: Medieval Texts, Amateur Readers", year: 2012, publisher: "Duke UP" },
    ],
    scholarUrl: googleScholar("Carolyn Dinshaw medieval"),
  },
  {
    id: "med2", name: "James Simpson", institution: "Harvard University",
    field: "Medieval Studies", type: "contemporary",
    bio: "Medievalist and early modernist who rethinks periodization and the cultural history of reading and reform.",
    works: [
      { title: "Reform and Cultural Revolution: 1350-1547", year: 2002, publisher: "Oxford UP" },
      { title: "Burning to Read: English Fundamentalism and Its Reformation Opponents", year: 2007, publisher: "Harvard UP" },
    ],
    scholarUrl: googleScholar("James Simpson medieval Harvard"),
  },
  {
    id: "int1", name: "N. Katherine Hayles", institution: "Duke University",
    field: "Media Studies / Intermediality", type: "foundational",
    bio: "Pioneering theorist of electronic literature, posthumanism, and the relationship between print and digital media.",
    works: [
      { title: "Writing Machines", year: 2002, publisher: "MIT Press" },
      { title: "Electronic Literature: New Horizons for the Literary Art", year: 2008, publisher: "Notre Dame UP" },
      { title: "How We Think: Digital Media and Contemporary Technogenesis", year: 2012, publisher: "U of Chicago P" },
    ],
    scholarUrl: googleScholar("N Katherine Hayles"),
    website: "https://english.duke.edu/people/n-katherine-hayles",
  },
  {
    id: "int2", name: "Marie-Laure Ryan", institution: "Independent Scholar",
    field: "Media Studies / Intermediality", type: "contemporary",
    bio: "Leading narratologist working across media, known for her theories of storyworlds, immersion, and transmedia storytelling.",
    works: [
      { title: "Narrative as Virtual Reality: Immersion and Interactivity in Literature and Electronic Media", year: 2001, publisher: "Johns Hopkins UP" },
      { title: "Storyworlds Across Media", year: 2014, publisher: "U of Nebraska P" },
    ],
    scholarUrl: googleScholar("Marie-Laure Ryan narrative"),
  },
  {
    id: "int3", name: "Henry Jenkins", institution: "USC",
    field: "Media Studies / Intermediality", type: "foundational",
    bio: "Foundational theorist of participatory culture, fan studies, and transmedia storytelling.",
    works: [
      { title: "Textual Poachers: Television Fans and Participatory Culture", year: 1992, publisher: "Routledge" },
      { title: "Convergence Culture: Where Old and New Media Collide", year: 2006, publisher: "NYU Press" },
    ],
    scholarUrl: googleScholar("Henry Jenkins"),
    website: "http://henryjenkins.org",
  },
  {
    id: "dh1", name: "Ted Underwood", institution: "University of Illinois",
    field: "Digital Humanities", type: "contemporary",
    bio: "Literary historian and computational critic who uses machine learning to study long-term changes in literary culture.",
    works: [
      { title: "Distant Horizons: Digital Evidence and Literary Change", year: 2019, publisher: "U of Chicago P" },
      { title: "Why Literary Periods Mattered", year: 2013, publisher: "Stanford UP" },
    ],
    scholarUrl: googleScholar("Ted Underwood digital humanities"),
    website: "https://tedunderwood.com",
  },
  {
    id: "dh2", name: "Lauren Klein", institution: "Emory University",
    field: "Digital Humanities", type: "contemporary",
    bio: "Digital humanist working on data feminism, food, and the politics of information visualization.",
    works: [
      { title: "Data Feminism", year: 2020, publisher: "MIT Press" },
      { title: "An Archive of Taste: Race and Eating in the Early United States", year: 2020, publisher: "U of Minnesota P" },
    ],
    scholarUrl: googleScholar("Lauren Klein data feminism"),
    website: "https://lklein.com",
  },
  {
    id: "dh3", name: "Johanna Drucker", institution: "UCLA",
    field: "Digital Humanities", type: "foundational",
    bio: "Theorist of digital media, book arts, and the history of graphic design, with foundational contributions to digital humanities methodology.",
    works: [
      { title: "Graphesis: Visual Forms of Knowledge Production", year: 2014, publisher: "Harvard UP" },
      { title: "SpecLab: Digital Aesthetics and Projects in Speculative Computing", year: 2009, publisher: "U of Chicago P" },
      { title: "The Digital Humanities Coursebook", year: 2021, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Johanna Drucker digital humanities"),
  },
  {
    id: "dh4", name: "Matthew Kirschenbaum", institution: "University of Maryland",
    field: "Digital Humanities", type: "contemporary",
    bio: "Works on the materiality of digital media, the history of word processing, and forensic approaches to digital texts.",
    works: [
      { title: "Mechanisms: New Media and the Forensic Imagination", year: 2008, publisher: "MIT Press" },
      { title: "Track Changes: A Literary History of Word Processing", year: 2016, publisher: "Harvard UP" },
    ],
    scholarUrl: googleScholar("Matthew Kirschenbaum"),
    website: "https://mkirschenbaum.wordpress.com",
  },
    {
    id: "n1", name: "David Herman", institution: "Durham University",
    field: "Narrative Studies", type: "foundational",
    bio: "Leading narratologist whose work bridges cognitive science, linguistics, and literary theory.",
    works: [
      { title: "Storytelling and the Sciences of Mind", year: 2013, publisher: "MIT Press" },
      { title: "Narratology Beyond the Human: Storytelling and Animal Life", year: 2018, publisher: "Oxford UP" },
      { title: "Narrative Theory: Core Concepts and Critical Debates", year: 2012, publisher: "Ohio State UP" },
    ],
    scholarUrl: googleScholar("David Herman narratology"),
  },
  {
    id: "n2", name: "Monika Fludernik", institution: "University of Freiburg",
    field: "Narrative Studies", type: "foundational",
    bio: "Theorist of natural narratology, whose work recenters embodied experience in narrative theory.",
    works: [
      { title: "Towards a Natural Narratology", year: 1996, publisher: "Routledge" },
      { title: "An Introduction to Narratology", year: 2009, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Monika Fludernik narratology"),
  },
  {
    id: "n3", name: "James Phelan", institution: "Ohio State University",
    field: "Narrative Studies", type: "foundational",
    bio: "Rhetorical narratologist who explores how narratives engage readers through character, progression, and ethical dimensions.",
    works: [
      { title: "Narrative as Rhetoric: Technique, Audiences, Ethics, Ideology", year: 1996, publisher: "Ohio State UP" },
      { title: "Living to Tell About It", year: 2005, publisher: "Cornell UP" },
      { title: "Experiencing Fiction", year: 2007, publisher: "Ohio State UP" },
    ],
    scholarUrl: googleScholar("James Phelan narrative rhetoric"),
  },
  {
    id: "dis1", name: "Rosemarie Garland-Thomson", institution: "Emory University",
    field: "Disability Studies", type: "foundational",
    bio: "Foundational theorist of disability and staring, whose work established disability studies as a literary and cultural field.",
    works: [
      { title: "Extraordinary Bodies: Figuring Physical Disability in American Culture and Literature", year: 1997, publisher: "Columbia UP" },
      { title: "Staring: How We Look", year: 2009, publisher: "Oxford UP" },
    ],
    scholarUrl: googleScholar("Rosemarie Garland-Thomson disability"),
  },
  {
    id: "dis2", name: "Robert McRuer", institution: "George Washington University",
    field: "Disability Studies", type: "contemporary",
    bio: "Theorist of crip theory and the intersections of queerness and disability in culture and politics.",
    works: [
      { title: "Crip Theory: Cultural Signs of Queerness and Disability", year: 2006, publisher: "NYU Press" },
      { title: "Crip Times: Disability, Globalization, and Resistance", year: 2018, publisher: "NYU Press" },
    ],
    scholarUrl: googleScholar("Robert McRuer crip theory"),
  },
  {
    id: "dis3", name: "Tobin Siebers", institution: "University of Michigan",
    field: "Disability Studies", type: "foundational",
    bio: "Influential theorist of disability aesthetics who challenged able-bodied assumptions in art and literary criticism.",
    works: [
      { title: "Disability Theory", year: 2008, publisher: "U of Michigan P" },
      { title: "Disability Aesthetics", year: 2010, publisher: "U of Michigan P" },
    ],
    scholarUrl: googleScholar("Tobin Siebers disability"),
  },
  {
    id: "cr1", name: "Saidiya Hartman", institution: "Columbia University",
    field: "Critical Race Studies", type: "contemporary",
    bio: "Groundbreaking scholar of slavery, Black life, and the afterlives of racial subjection, known for her practice of critical fabulation.",
    works: [
      { title: "Scenes of Subjection: Terror, Slavery, and Self-Making in Nineteenth-Century America", year: 1997, publisher: "Oxford UP" },
      { title: "Lose Your Mother: A Journey Along the Atlantic Slave Route", year: 2007, publisher: "Farrar, Straus and Giroux" },
      { title: "Wayward Lives, Beautiful Experiments", year: 2019, publisher: "Norton" },
    ],
    scholarUrl: googleScholar("Saidiya Hartman"),
  },
  {
    id: "cr2", name: "Fred Moten", institution: "NYU",
    field: "Critical Race Studies", type: "contemporary",
    bio: "Poet-theorist whose work on Black performance, sound, and social life has transformed critical theory and literary studies.",
    works: [
      { title: "In the Break: The Aesthetics of the Black Radical Tradition", year: 2003, publisher: "U of Minnesota P" },
      { title: "Black and Blur", year: 2017, publisher: "Duke UP" },
      { title: "The Undercommons: Fugitive Planning and Black Study", year: 2013, publisher: "Minor Compositions" },
    ],
    scholarUrl: googleScholar("Fred Moten"),
  },
  {
    id: "cr3", name: "Hortense Spillers", institution: "Vanderbilt University",
    field: "Critical Race Studies", type: "foundational",
    bio: "Seminal theorist of race, gender, and the Black body whose essay 'Mama's Baby, Papa's Maybe' is a landmark in critical theory.",
    works: [
      { title: "Black, White, and in Color: Essays on American Literature and Culture", year: 2003, publisher: "U of Chicago P" },
      { title: "Comparative American Identities: Race, Sex, and Nationality in the Modern Text", year: 1991, publisher: "Routledge" },
    ],
    scholarUrl: googleScholar("Hortense Spillers"),
  },
  {
    id: "bh1", name: "Roger Chartier", institution: "Collège de France",
    field: "Book History", type: "foundational",
    bio: "Historian of reading and print culture whose work on the cultural uses of texts has shaped book history as a discipline.",
    works: [
      { title: "The Order of Books: Readers, Authors, and Libraries in Europe", year: 1994, publisher: "Stanford UP" },
      { title: "The Cultural Uses of Print in Early Modern France", year: 1987, publisher: "Princeton UP" },
    ],
    scholarUrl: googleScholar("Roger Chartier book history"),
  },
  {
    id: "bh2", name: "Leah Price", institution: "Rutgers University",
    field: "Book History", type: "contemporary",
    bio: "Historian of reading practices and the material book, exploring what people actually do with books beyond reading.",
    works: [
      { title: "How to Do Things with Books in Victorian Britain", year: 2012, publisher: "Princeton UP" },
      { title: "What We Talk About When We Talk About Books", year: 2019, publisher: "Basic Books" },
    ],
    scholarUrl: googleScholar("Leah Price book history"),
  },
  {
    id: "bh3", name: "Matthew Kirschenbaum", institution: "University of Maryland",
    field: "Book History", type: "contemporary",
    bio: "Works on the materiality of digital media and the history of writing technologies, bridging book history and digital humanities.",
    works: [
      { title: "Mechanisms: New Media and the Forensic Imagination", year: 2008, publisher: "MIT Press" },
      { title: "Track Changes: A Literary History of Word Processing", year: 2016, publisher: "Harvard UP" },
    ],
    scholarUrl: googleScholar("Matthew Kirschenbaum"),
    website: "https://mkirschenbaum.wordpress.com",
  },
];

