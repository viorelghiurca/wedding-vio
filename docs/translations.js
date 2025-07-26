// Complete translations object for all 5 languages
const translations = {
    de: {
        'title': 'Herzlich Willkommen zu unserer Hochzeit',
        'subtitle': 'Gasthaus Rieser Hof, Rudelstetten',
        'nav-location': 'Hochzeitsort',
        'nav-hotels': 'Hotels',
        'nav-restaurants': 'Restaurants',
        'nav-attractions': 'Sehenswürdigkeiten',
        'location-title': 'Hochzeitsort',
        'venue-name': 'Gasthaus Rieser Hof',
        'venue-address': 'St. Ulrich Strasse 12, 86733 Rudelstetten',
        'venue-phone': 'Tel: 09085/513',
        'venue-description': 'Das Gasthaus Rieser Hof liegt mitten im Geopark Ries und bietet eine schwäbische Landküche mit regionalen Spezialitäten. Als besondere Attraktion gibt es den Haustrunk - ein selbstgebrautes Bier!',
        'hotels-title': 'Empfohlene Hotels',
        'restaurants-title': 'Empfohlene Restaurants',
        'attractions-title': 'Sehenswürdigkeiten',
        'address': 'Adresse:',
        'distance': 'Entfernung:',
        'category': 'Kategorie:',
        'parking': 'Parken:',
        'cuisine': 'Küche:',
        'location': 'Ort:',
        'type': 'Art:',
        'highlights': 'Highlights:',
        'btn-website': 'Website besuchen',
        'btn-maps': 'In Karten öffnen',
        'btn-search': 'Suchen',
        'btn-info': 'Infos',
        
        // JUFA Hotel
        'jufa-distance': 'ca. 15 km von Rudelstetten',
        'jufa-category': '3-Sterne Familienhotel',
        'jufa-parking': '3€ pro Nacht',
        'jufa-description': 'Familienfreundliches Hotel mit Sonnenterrasse, direkt an der historischen Stadtmauer von Nördlingen. Thematische Zimmer im Planetensystem-Design.',
        
        // 2ND home Hotel
        '2nd-home-name': '2ND home Hotel',
        '2nd-home-address': 'Luntenbuck 9, 86720 Nördlingen',
        '2nd-home-distance': 'ca. 15 km von Rudelstetten',
        '2nd-home-category': 'Modernes Hotel',
        '2nd-home-description': 'Modernes Hotel mit stilvollen Zimmern und einer gemütlichen Atmosphäre, ideal für einen entspannten Aufenthalt.',
        
        // Hey Lou Hotel
        'heylou-address': 'Maria-Penn-Straße 5, 86720 Nördlingen',
        'heylou-distance': 'ca. 15 km von Rudelstetten',
        'heylou-category': 'Design Hotel',
        'heylou-description': 'Modernes Design-Hotel in Nördlingen, das mit stilvollem Ambiente und komfortabler Ausstattung überzeugt.',
        
        // Restaurants
        'romana-address': 'Marktplatz, 86732 Oettingen',
        'romana-distance': 'ca. 20 km von Rudelstetten',
        'romana-cuisine': 'Italienisch & International',
        'romana-description': 'Beliebtes italienisches Restaurant am Marktplatz von Oettingen mit authentischer Küche und gemütlicher Atmosphäre.',
        
        'huebele-address': 'Herrengasse 11, 86720 Nördlingen',
        'huebele-distance': 'ca. 15 km von Rudelstetten',
        'huebele-cuisine': 'Kroatische Küche',
        'huebele-description': 'Gemütliches Restaurant mit traditioneller deutscher Küche und einem charmanten Innenhof.',
        
        'schloessle-address': 'Baldinger Str. 1, 86720 Nördlingen',
        'schloessle-distance': 'ca. 15 km von Rudelstetten',
        'schloessle-cuisine': 'Regionale Küche',
        'schloessle-description': 'Historisches Restaurant im Herzen von Nördlingen mit regionalen Spezialitäten und gemütlichem Ambiente.',
        
        // Attractions
        'noerdlingen-title': 'Nördlingen - Die Stadt im Rieskrater',
        'noerdlingen-distance': 'ca. 15 km von Rudelstetten',
        'noerdlingen-highlights': 'Stadtmauer, Daniel-Turm, Altstadt',
        'noerdlingen-description': 'Mittelalterliche Stadt mit vollständig erhaltener Stadtmauer. Berühmt als Drehort für verschiedene Filme und die einzigartige Lage im Rieskrater.',
        
        'stadtmauer-title': 'Stadtmauer Nördlingen',
        'stadtmauer-distance': 'ca. 15 km von Rudelstetten',
        'stadtmauer-highlights': 'Einzigartig in Deutschland, begehbarer Wehrgang',
        'stadtmauer-description': 'Die vollständig erhaltene und begehbare Stadtmauer von Nördlingen ist ein einzigartiges Denkmal in Deutschland und bietet einen wunderschönen Rundgang um die Altstadt.',
        
        'ofnet-title': 'Ofnethöhlen',
        'ofnet-location': 'Bei Nördlingen am Riegelberg',
        'ofnet-distance': 'ca. 18 km von Rudelstetten',
        'ofnet-type': 'Prähistorische Höhlen',
        'ofnet-description': 'Berühmte steinzeitliche Fundstätte mit zwei Höhlen. Wichtiger archäologischer Ort mit wunderschönem Wanderweg und Naturerlebnis.',
        
        'minigolf-title': 'Minigolfplatz Nördlingen',
        'minigolf-address': 'Am Sportpark 1, 86720 Nördlingen',
        'minigolf-distance': 'ca. 15 km von Rudelstetten',
        'minigolf-type': 'Freizeitaktivität',
        'minigolf-description': 'Ein beliebter Minigolfplatz in Nördlingen, ideal für Familien und Freunde, die eine entspannte Zeit verbringen möchten.',
        
        'danielturm-title': 'Danielturm Nördlingen',
        'danielturm-address': 'Kirchgasse 1, 86720 Nördlingen',
        'danielturm-distance': 'ca. 15 km von Rudelstetten',
        'danielturm-type': 'Aussichtsturm',
        'danielturm-description': 'Der Danielturm ist der Glockenturm der St. Georgskirche und bietet einen atemberaubenden Panoramablick über Nördlingen und den Rieskrater.',
        
        'footer-text': 'Wir freuen uns auf eine wundervolle Feier mit Ihnen! ♥',
        'footer-ad-text': 'Website entwickelt von:',
        'footer-github': 'GitHub'
    },
    
    en: {
        'title': 'Welcome to Our Wedding',
        'subtitle': 'Gasthaus Rieser Hof, Rudelstetten',
        'nav-location': 'Wedding Venue',
        'nav-hotels': 'Hotels',
        'nav-restaurants': 'Restaurants',
        'nav-attractions': 'Attractions',
        'location-title': 'Wedding Venue',
        'venue-name': 'Gasthaus Rieser Hof',
        'venue-address': 'St. Ulrich Strasse 12, 86733 Rudelstetten',
        'venue-phone': 'Phone: 09085/513',
        'venue-description': 'The Gasthaus Rieser Hof is located in the heart of the Ries Geopark and offers Swabian regional cuisine with local specialties. A special attraction is the house brew - a self-brewed beer!',
        'hotels-title': 'Recommended Hotels',
        'restaurants-title': 'Recommended Restaurants',
        'attractions-title': 'Attractions',
        'address': 'Address:',
        'distance': 'Distance:',
        'category': 'Category:',
        'parking': 'Parking:',
        'cuisine': 'Cuisine:',
        'location': 'Location:',
        'type': 'Type:',
        'highlights': 'Highlights:',
        'btn-website': 'Visit Website',
        'btn-maps': 'Open in Maps',
        'btn-search': 'Search',
        'btn-info': 'Info',
        
        // JUFA Hotel
        'jufa-distance': 'approx. 15 km from Rudelstetten',
        'jufa-category': '3-star family hotel',
        'jufa-parking': '3€ per night',
        'jufa-description': 'Family-friendly hotel with sun terrace, directly at the historic city wall of Nördlingen. Themed rooms in planetary system design.',
        
        // 2ND home Hotel
        '2nd-home-name': '2ND home Hotel',
        '2nd-home-address': 'Luntenbuck 9, 86720 Nördlingen',
        '2nd-home-distance': 'approx. 15 km from Rudelstetten',
        '2nd-home-category': 'Modern Hotel',
        '2nd-home-description': 'Modern hotel with stylish rooms and a cozy atmosphere, ideal for a relaxed stay.',
        
        // Hey Lou Hotel
        'heylou-address': 'Maria-Penn-Straße 5, 86720 Nördlingen',
        'heylou-distance': 'approx. 15 km from Rudelstetten',
        'heylou-category': 'Design Hotel',
        'heylou-description': 'Modern design hotel in Nördlingen, convincing with stylish ambience and comfortable furnishings.',
        
        // Restaurants
        'romana-address': 'Marktplatz, 86732 Oettingen',
        'romana-distance': 'approx. 20 km from Rudelstetten',
        'romana-cuisine': 'Italian & International',
        'romana-description': 'Popular Italian restaurant at the market square of Oettingen with authentic cuisine and cozy atmosphere.',
        
        'huebele-address': 'Herrengasse 11, 86720 Nördlingen',
        'huebele-distance': 'approx. 15 km from Rudelstetten',
        'huebele-cuisine': 'Croatian Cuisine',
        'huebele-description': 'Cozy restaurant with traditional German cuisine and a charming courtyard.',
        
        'schloessle-address': 'Baldinger Str. 1, 86720 Nördlingen',
        'schloessle-distance': 'approx. 15 km from Rudelstetten',
        'schloessle-cuisine': 'Regional Cuisine',
        'schloessle-description': 'Historic restaurant in the heart of Nördlingen with regional specialties and cozy atmosphere.',
        
        // Attractions
        'noerdlingen-title': 'Nördlingen - The City in the Ries Crater',
        'noerdlingen-distance': 'approx. 15 km from Rudelstetten',
        'noerdlingen-highlights': 'City Wall, Daniel Tower, Old Town',
        'noerdlingen-description': 'Medieval city with completely preserved city wall. Famous as filming location for various movies and the unique location in the Ries crater.',
        
        'stadtmauer-title': 'Nördlingen City Wall',
        'stadtmauer-distance': 'approx. 15 km from Rudelstetten',
        'stadtmauer-highlights': 'Unique in Germany, walkable rampart',
        'stadtmauer-description': 'The completely preserved and walkable city wall of Nördlingen is a unique monument in Germany and offers a beautiful circular walk around the old town.',
        
        'ofnet-title': 'Ofnet Caves',
        'ofnet-location': 'Near Nördlingen at Riegelberg',
        'ofnet-distance': 'approx. 18 km from Rudelstetten',
        'ofnet-type': 'Prehistoric caves',
        'ofnet-description': 'Famous Stone Age archaeological site with two caves. Important archaeological location with beautiful hiking trail and nature experience.',
        
        'minigolf-title': 'Minigolf Course Nördlingen',
        'minigolf-address': 'Am Sportpark 1, 86720 Nördlingen',
        'minigolf-distance': 'approx. 15 km from Rudelstetten',
        'minigolf-type': 'Leisure activity',
        'minigolf-description': 'A popular minigolf course in Nördlingen, ideal for families and friends who want to spend a relaxed time.',
        
        'danielturm-title': 'Daniel Tower Nördlingen',
        'danielturm-address': 'Kirchgasse 1, 86720 Nördlingen',
        'danielturm-distance': 'approx. 15 km from Rudelstetten',
        'danielturm-type': 'Observation tower',
        'danielturm-description': 'The Daniel Tower is the bell tower of St. George\'s Church and offers a breathtaking panoramic view over Nördlingen and the Ries crater.',
        
        'footer-text': 'We look forward to a wonderful celebration with you! ♥',
        'footer-ad-text': 'Website developed by:',
        'footer-github': 'GitHub'
    },
    
    ro: {
        'title': 'Bun venit la nunta noastră',
        'subtitle': 'Gasthaus Rieser Hof, Rudelstetten',
        'nav-location': 'Locația nunții',
        'nav-hotels': 'Hoteluri',
        'nav-restaurants': 'Restaurante',
        'nav-attractions': 'Atracții',
        'location-title': 'Locația nunții',
        'venue-name': 'Gasthaus Rieser Hof',
        'venue-address': 'St. Ulrich Strasse 12, 86733 Rudelstetten',
        'venue-phone': 'Telefon: 09085/513',
        'venue-description': 'Gasthaus Rieser Hof se află în inima Geoparcului Ries și oferă bucătărie regională șvabă cu specialități locale. O atracție specială este băutura casei - o bere fabricată propriu!',
        'hotels-title': 'Hoteluri recomandate',
        'restaurants-title': 'Restaurante recomandate',
        'attractions-title': 'Atracții turistice',
        'address': 'Adresă:',
        'distance': 'Distanță:',
        'category': 'Categorie:',
        'parking': 'Parcare:',
        'cuisine': 'Bucătărie:',
        'location': 'Locație:',
        'type': 'Tip:',
        'highlights': 'Puncte de atracție:',
        'btn-website': 'Vizitează site-ul',
        'btn-maps': 'Deschide în hărți',
        'btn-search': 'Caută',
        'btn-info': 'Informații',
        
        // JUFA Hotel
        'jufa-distance': 'aprox. 15 km de Rudelstetten',
        'jufa-category': 'Hotel pentru familii 3 stele',
        'jufa-parking': '3€ pe noapte',
        'jufa-description': 'Hotel prietenos cu familiile cu terasă la soare, direct la zidul istoric al orașului Nördlingen. Camere tematice în design de sistem planetar.',
        
        // 2ND home Hotel
        '2nd-home-name': '2ND home Hotel',
        '2nd-home-address': 'Luntenbuck 9, 86720 Nördlingen',
        '2nd-home-distance': 'aprox. 15 km de Rudelstetten',
        '2nd-home-category': 'Hotel modern',
        '2nd-home-description': 'Hotel modern cu camere elegante și o atmosferă confortabilă, ideal pentru un sejur relaxant.',
        
        // Hey Lou Hotel
        'heylou-address': 'Maria-Penn-Straße 5, 86720 Nördlingen',
        'heylou-distance': 'aprox. 15 km de Rudelstetten',
        'heylou-category': 'Hotel de design',
        'heylou-description': 'Hotel de design modern în Nördlingen, care convinge prin ambianța sa elegantă și dotările confortabile.',
        
        // Restaurants
        'romana-address': 'Marktplatz, 86732 Oettingen',
        'romana-distance': 'aprox. 20 km de Rudelstetten',
        'romana-cuisine': 'Italiană & Internațională',
        'romana-description': 'Restaurant italian popular în piața centrală din Oettingen cu bucătărie autentică și atmosferă confortabilă.',
        
        'huebele-address': 'Herrengasse 11, 86720 Nördlingen',
        'huebele-distance': 'aprox. 15 km de Rudelstetten',
        'huebele-cuisine': 'Bucătărie croată',
        'huebele-description': 'Restaurant confortabil cu bucătărie tradițională germană și o curte fermecătoare.',
        
        'schloessle-address': 'Baldinger Str. 1, 86720 Nördlingen',
        'schloessle-distance': 'aprox. 15 km de Rudelstetten',
        'schloessle-cuisine': 'Bucătărie regională',
        'schloessle-description': 'Restaurant istoric în inima orașului Nördlingen, cu specialități regionale și o atmosferă confortabilă.',
        
        // Attractions
        'noerdlingen-title': 'Nördlingen - Orașul din craterul Ries',
        'noerdlingen-distance': 'aprox. 15 km de Rudelstetten',
        'noerdlingen-highlights': 'Zidul orașului, Turnul Daniel, Orașul vechi',
        'noerdlingen-description': 'Oraș medieval cu zid complet conservat. Faimos ca locație de filmare pentru diverse filme și locația unică în craterul Ries.',
        
        'stadtmauer-title': 'Zidul orașului Nördlingen',
        'stadtmauer-distance': 'aprox. 15 km de Rudelstetten',
        'stadtmauer-highlights': 'Unic în Germania, bastion accesibil',
        'stadtmauer-description': 'Zidul orașului Nördlingen, complet conservat și accesibil, este un monument unic în Germania și oferă o plimbare frumoasă în jurul orașului vechi.',
        
        'ofnet-title': 'Peșterile Ofnet',
        'ofnet-location': 'Lângă Nördlingen la Riegelberg',
        'ofnet-distance': 'aprox. 18 km de Rudelstetten',
        'ofnet-type': 'Peșteri preistorice',
        'ofnet-description': 'Famós sit arheologic din Epoca de Piatră cu două peșteri. Locație arheologică importantă cu traseu de drumeție frumos și experiență în natură.',
        
        'minigolf-title': 'Teren de minigolf Nördlingen',
        'minigolf-address': 'Am Sportpark 1, 86720 Nördlingen',
        'minigolf-distance': 'aprox. 15 km de Rudelstetten',
        'minigolf-type': 'Activitate de agrement',
        'minigolf-description': 'Un teren de minigolf popular în Nördlingen, ideal pentru familii și prieteni care doresc să petreacă un timp relaxant.',
        
        'danielturm-title': 'Turnul Daniel Nördlingen',
        'danielturm-address': 'Kirchgasse 1, 86720 Nördlingen',
        'danielturm-distance': 'aprox. 15 km de Rudelstetten',
        'danielturm-type': 'Turn de observație',
        'danielturm-description': 'Turnul Daniel este clopotnița Bisericii Sf. Gheorghe și oferă o vedere panoramică uimitoare asupra orașului Nördlingen și a craterului Ries.',
        
        'footer-text': 'Așteptăm cu nerăbdare o celebrare minunată cu voi! ♥',
        'footer-ad-text': 'Website dezvoltat de:',
        'footer-github': 'GitHub'
    },
    
    hr: {
        'title': 'Dobrodošli na naše vjenčanje',
        'subtitle': 'Gasthaus Rieser Hof, Rudelstetten',
        'nav-location': 'Mjesto vjenčanja',
        'nav-hotels': 'Hoteli',
        'nav-restaurants': 'Restorani',
        'nav-attractions': 'Atrakcije',
        'location-title': 'Mjesto vjenčanja',
        'venue-name': 'Gasthaus Rieser Hof',
        'venue-address': 'St. Ulrich Strasse 12, 86733 Rudelstetten',
        'venue-phone': 'Telefon: 09085/513',
        'venue-description': 'Gasthaus Rieser Hof nalazi se u srcu Ries Geoparka i nudi švapsku regionalnu kuhinju s lokalnim specijalitetima. Posebna atrakcija je kućno piće - domaće pivo!',
        'hotels-title': 'Preporučeni hoteli',
        'restaurants-title': 'Preporučeni restorani',
        'attractions-title': 'Turistične atrakcije',
        'address': 'Adresa:',
        'distance': 'Udaljenost:',
        'category': 'Kategorija:',
        'parking': 'Parkiranje:',
        'cuisine': 'Kuhinja:',
        'location': 'Lokacija:',
        'type': 'Tip:',
        'highlights': 'Naglasci:',
        'btn-website': 'Posjeti web stranicu',
        'btn-maps': 'Otvori u kartama',
        'btn-search': 'Traži',
        'btn-info': 'Informacije',
        
        // JUFA Hotel
        'jufa-distance': 'cca. 15 km od Rudelstettena',
        'jufa-category': 'Obiteljski hotel 3 zvjezdice',
        'jufa-parking': '3€ po noći',
        'jufa-description': 'Obiteljski hotel s terasom za sunčanje, izravno uz povijesni gradski zid Nördlingena. Tematske sobe u dizajnu planetarnog sustava.',
        
        // 2ND home Hotel
        '2nd-home-name': '2ND home Hotel',
        '2nd-home-address': 'Luntenbuck 9, 86720 Nördlingen',
        '2nd-home-distance': 'cca. 15 km od Rudelstettena',
        '2nd-home-category': 'Moderni hotel',
        '2nd-home-description': 'Moderni hotel sa stilskim sobama i ugodnom atmosferom, idealan za opuštajući boravak.',
        
        // Hey Lou Hotel
        'heylou-address': 'Maria-Penn-Straße 5, 86720 Nördlingen',
        'heylou-distance': 'cca. 15 km od Rudelstettena',
        'heylou-category': 'Dizajnerski hotel',
        'heylou-description': 'Moderan dizajnerski hotel u Nördlingenu, koji uvjerava stilskim ambijentom i udobnom opremom.',
        
        // Restaurants
        'romana-address': 'Marktplatz, 86732 Oettingen',
        'romana-distance': 'cca. 20 km od Rudelstettena',
        'romana-cuisine': 'Talijanska i internacionalna',
        'romana-description': 'Popularan talijanski restoran na tržišnom trgu Oettingena s autentičnom kuhinjom i ugodnom atmosferom.',
        
        'huebele-address': 'Herrengasse 11, 86720 Nördlingen',
        'huebele-distance': 'cca. 15 km od Rudelstettena',
        'huebele-cuisine': 'Hrvatska kuhinja',
        'huebele-description': 'Ugodan restoran s tradicionalnom njemačkom kuhinjom i šarmantnim dvorištem.',
        
        'schloessle-address': 'Baldinger Str. 1, 86720 Nördlingen',
        'schloessle-distance': 'cca. 15 km od Rudelstettena',
        'schloessle-cuisine': 'Regionalna kuhinja',
        'schloessle-description': 'Povijesni restoran u srcu Nördlingena s regionalnim specijalitetima i ugodnom atmosferom.',
        
        // Attractions
        'noerdlingen-title': 'Nördlingen - Grad u Ries krateru',
        'noerdlingen-distance': 'cca. 15 km od Rudelstettena',
        'noerdlingen-highlights': 'Gradski zid, Danielov toranj, Stari grad',
        'noerdlingen-description': 'Srednjovjekovni grad s potpuno sačuvanim gradskim zidom. Poznat kao lokacija snimanja za razne filmove i jedinstven položaj u Ries krateru.',
        
        'stadtmauer-title': 'Gradski zid Nördlingen',
        'stadtmauer-distance': 'cca. 15 km od Rudelstettena',
        'stadtmauer-highlights': 'Jedinstven u Njemačkoj, prohodan bedem',
        'stadtmauer-description': 'Potpuno očuvan i prohodan gradski zid Nördlingena jedinstven je spomenik u Njemačkoj i nudi prekrasnu kružnu šetnju oko starog grada.',
        
        'ofnet-title': 'Ofnet špilje',
        'ofnet-location': 'Blizu Nördlingena na Riegelbergu',
        'ofnet-distance': 'cca. 18 km od Rudelstettena',
        'ofnet-type': 'Pretpovijesne špilje',
        'ofnet-description': 'Poznato arheološko nalazište iz kamenog doba s dvije špilje. Važna arheološka lokacija s prekrasnom stazom za pješačenje i prirodnim iskustvom.',
        
        'minigolf-title': 'Minigolf teren Nördlingen',
        'minigolf-address': 'Am Sportpark 1, 86720 Nördlingen',
        'minigolf-distance': 'cca. 15 km od Rudelstettena',
        'minigolf-type': 'Rekreativna aktivnost',
        'minigolf-description': 'Popularan minigolf teren u Nördlingenu, idealan za obitelji i prijatelje koji žele provesti opušteno vrijeme.',
        
        'danielturm-title': 'Danielov toranj Nördlingen',
        'danielturm-address': 'Kirchgasse 1, 86720 Nördlingen',
        'danielturm-distance': 'cca. 15 km od Rudelstettena',
        'danielturm-type': 'Vidikovac',
        'danielturm-description': 'Danielov toranj je zvonik crkve sv. Jurja i nudi zadivljujući panoramski pogled na Nördlingen i Ries krater.',
        
        'footer-text': 'Radujemo se divnom slavlju s vama! ♥',
        'footer-ad-text': 'Web stranicu razvio:',
        'footer-github': 'GitHub'
    },
    
    it: {
        'title': 'Benvenuti al nostro matrimonio',
        'subtitle': 'Gasthaus Rieser Hof, Rudelstetten',
        'nav-location': 'Luogo del matrimonio',
        'nav-hotels': 'Hotel',
        'nav-restaurants': 'Ristoranti',
        'nav-attractions': 'Attrazioni',
        'location-title': 'Luogo del matrimonio',
        'venue-name': 'Gasthaus Rieser Hof',
        'venue-address': 'St. Ulrich Strasse 12, 86733 Rudelstetten',
        'venue-phone': 'Telefono: 09085/513',
        'venue-description': 'Il Gasthaus Rieser Hof si trova nel cuore del Geoparco Ries e offre cucina regionale sveva con specialità locali. Un\'attrazione speciale è la bevanda della casa - una birra prodotta in proprio!',
        'hotels-title': 'Hotel consigliati',
        'restaurants-title': 'Ristoranti consigliati',
        'attractions-title': 'Attrazioni turistiche',
        'address': 'Indirizzo:',
        'distance': 'Distanza:',
        'category': 'Categoria:',
        'parking': 'Parcheggio:',
        'cuisine': 'Cucina:',
        'location': 'Posizione:',
        'type': 'Tipo:',
        'highlights': 'Punti salienti:',
        'btn-website': 'Visita il sito web',
        'btn-maps': 'Apri nelle mappe',
        'btn-search': 'Cerca',
        'btn-info': 'Informazioni',
        
        // JUFA Hotel
        'jufa-distance': 'ca. 15 km da Rudelstetten',
        'jufa-category': 'Hotel per famiglie 3 stelle',
        'jufa-parking': '3€ a notte',
        'jufa-description': 'Hotel per famiglie con terrazza solarium, direttamente alle mura storiche della città di Nördlingen. Camere tematiche nel design del sistema planetario.',
        
        // 2ND home Hotel
        '2nd-home-name': '2ND home Hotel',
        '2nd-home-address': 'Luntenbuck 9, 86720 Nördlingen',
        '2nd-home-distance': 'ca. 15 km da Rudelstetten',
        '2nd-home-category': 'Hotel moderno',
        '2nd-home-description': 'Hotel moderno con camere eleganti e un\'atmosfera accogliente, ideale per un soggiorno rilassante.',
        
        // Hey Lou Hotel
        'heylou-address': 'Maria-Penn-Straße 5, 86720 Nördlingen',
        'heylou-distance': 'ca. 15 km da Rudelstetten',
        'heylou-category': 'Hotel di design',
        'heylou-description': 'Moderno hotel di design a Nördlingen, che convince con un\'atmosfera elegante e arredi confortevoli.',
        
        // Restaurants
        'romana-address': 'Marktplatz, 86732 Oettingen',
        'romana-distance': 'ca. 20 km da Rudelstetten',
        'romana-cuisine': 'Italiana e internazionale',
        'romana-description': 'Popolare ristorante italiano nella piazza del mercato di Oettingen con cucina autentica e atmosfera accogliente.',
        
        'huebele-address': 'Herrengasse 11, 86720 Nördlingen',
        'huebele-distance': 'ca. 15 km da Rudelstetten',
        'huebele-cuisine': 'Cucina croata',
        'huebele-description': 'Ristorante accogliente con cucina tradizionale tedesca e un incantevole cortile.',
        
        'schloessle-address': 'Baldinger Str. 1, 86720 Nördlingen',
        'schloessle-distance': 'ca. 15 km da Rudelstetten',
        'schloessle-cuisine': 'Cucina regionale',
        'schloessle-description': 'Ristorante storico nel cuore di Nördlingen con specialità regionali e un\'atmosfera accogliente.',
        
        // Attractions
        'noerdlingen-title': 'Nördlingen - La città nel cratere Ries',
        'noerdlingen-distance': 'ca. 15 km da Rudelstetten',
        'noerdlingen-highlights': 'Mura della città, Torre Daniel, Centro storico',
        'noerdlingen-description': 'Città medievale con mura completamente conservate. Famosa come location cinematografica per vari film e la posizione unica nel cratere Ries.',
        
        'stadtmauer-title': 'Mura di Nördlingen',
        'stadtmauer-distance': 'ca. 15 km da Rudelstetten',
        'stadtmauer-highlights': 'Uniche in Germania, bastione percorribile',
        'stadtmauer-description': 'Le mura di Nördlingen, completamente conservate e percorribili, sono un monumento unico in Germania e offrono un bellissimo giro intorno al centro storico.',
        
        'ofnet-title': 'Grotte di Ofnet',
        'ofnet-location': 'Vicino a Nördlingen al Riegelberg',
        'ofnet-distance': 'ca. 18 km da Rudelstetten',
        'ofnet-type': 'Grotte preistoriche',
        'ofnet-description': 'Famoso sito archeologico dell\'Età della Pietra con due grotte. Importante location archeologica con bellissimo sentiero escursionistico ed esperienza naturale.',
        
        'minigolf-title': 'Campo da minigolf Nördlingen',
        'minigolf-address': 'Am Sportpark 1, 86720 Nördlingen',
        'minigolf-distance': 'ca. 15 km da Rudelstetten',
        'minigolf-type': 'Attività ricreativa',
        'minigolf-description': 'Un popolare campo da minigolf a Nördlingen, ideale per famiglie e amici che vogliono trascorrere un momento di relax.',
        
        'danielturm-title': 'Torre Daniel Nördlingen',
        'danielturm-address': 'Kirchgasse 1, 86720 Nördlingen',
        'danielturm-distance': 'ca. 15 km da Rudelstetten',
        'danielturm-type': 'Torre panoramica',
        'danielturm-description': 'La Torre Daniel è il campanile della Chiesa di San Giorgio e offre una vista panoramica mozzafiato su Nördlingen e sul cratere del Ries.',
        
        'footer-text': 'Non vediamo l\'ora di una celebrazione meravigliosa con voi! ♥',
        'footer-ad-text': 'Sito web sviluppato da:',
        'footer-github': 'GitHub'
    }
};