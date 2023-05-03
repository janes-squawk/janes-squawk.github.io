let titleDiv = "<h1>Jane's Squawk!</h1>";
let subtitleDiv = "<h2>A (Virtual) Bird Walk Through Queens</h2>"
let bylineDiv = "<p>with Stephen Albonesi & Rawnak Zaman</p>";

let footerDiv = 
  '<p>Created for <a href="https://www.mas.org/janes-walk-nyc-2023/" target="_blank">Jane\'s Walk 2023</a> + Find us on <a href = "https://github.com/janes-squawk/janes-squawk.github.io" target="_blank">GitHub</a>';

let divChapter1 =
  '<h2>Welcome to our Jane\'s Walk! So glad you\'re joining us!</h2>' + 
  '<p>We\'re two Queens residents who were curious to learn about the hundreds of birds that visit our borough every year, and which ones New Yorkers can expect this spring.</p>' +
  '<p>As you might have guessed, we\'re not professional birders! Rather, we\'re researchers, mapmakers, and data analysts who wanted to use these skills to tell a story about the incredible birds in our borough. In addition to understanding the geography, science, and numbers behind birds in Queens, we\'ll lead you on a virtual walk of the West Pond Trail at the Jamaica Bay Wildlife Refuge, one of the best places to spot birds in New York City.</p>';

let divChapter2 =
  '<h2>First, a little context.</h2>' +
  '<p>Over 400 bird species have been documented in New York City, more than half the species regularly found in North America. Of these, over 370 species have been documented in Queens, more than any other borough according to <a href="https://ebird.org/about" target="_blank">eBird</a>, an open-source database managed by the Cornell Lab of Ornithology (and our primary data source).</p>' +
  '<p>Jane\'s Walk is one of the best weekends of the year to spot many of these birds. That\'s because the festival happens in the middle of the spring bird migration, which occurs from about March to June in New York City for most birds, with a peak in May for shorebirds and most songbirds.</p>';

let divChapter3 =
  '<img src="assets/images/Atlantic-Flyway-Map-fwsgov.jpg" alt="Atlantic Flyway" width=70%><p class="imageCredit">Source: U.S. Fish & Wildlife Service</p>' +
  '<p>Queens\' distinction as the <a href="https://www.nycaudubon.org/events-birding/birding-resources/birding-in-nyc/birding-in-queens" target="_blank">"birdiest borough"</a> is due in part to its location along the Atlantic Flyway, one of four major north-south routes that birds travel in North America during the spring and fall migrations. The 3,000-mile route generally starts in Greenland and the Canadian Arctic, then follows the Atlantic coast through Canada and the United States to the tropical areas of the Caribbean and South America.</p>';

let divChapter4 =
  '<h2>Queens is for Birders</h2>' +
  '<img src="assets/images/janes-squawk-birding-jamaica-bay-wildlife-refuge.jpg" alt="Birding at Jamaica Bay Wildlife Refuge" width=100%></img>' + 
  '<p>Broadly, Queens boasts <a href="https://www.nycgovparks.org/sub_about/parks_divisions/nrg/documents/NRG_Publication_A_Guide_to_the_Birds_of_Queens.pdf" target="_blank">five types of bird habitats</a>: field, forest, freshwater, salt marsh, and seashore. From the eager chirping that ushers in the early morning to flocks that manuever in neat formation over buildings and bodies of water, birds are an ever-present neighbor.</p>';

let divChapter5 =
  '<h2>Habitat: Fields</h2>' +
  '<img src="assets/images/qns-wildflower-meadow-edward-mertz-qcc.jpg" width=100%>' +
  '<p class="imageCredit">Photo by <a href="https://www.qcc.cuny.edu/biologicalsciences/natureoncampus/index.html" target="_blank">Edward Mertz</a></p>' +
  '<p>The growth of grasses and plants on fertile land can lead to the formation of <a href="https://www.nycaudubon.org/our-work/conservation/habitat-protection/grasslands-and-capped-landfills" target="_blank">grasslands</a>. Although they are among the <a href="https://www.nycgovparks.org/learn/ecosystems/grasslands-in-new-york-city-parks" target="_blank">rarest</a> of habitats in New York City because of human development and invasive species, fields have been allowed to thrive on many underutilized sites to the great benefit of nesting and migrating birds. Fields require maintenance for the managed growth and cultivation of native species as well as limited pesticide use. And where fields meet other habitats, like forests, the fusion of plant species attracts more animals, including birds.</p>';

let divChapter6 =
  '<h2>Habitat: Forests</h2>' + 
  '<img src="assets/images/trails-of-forest-park-raysawak-wikicommons.JPG" width=100%>' + 
  '<p class="imageCredit">Photo by <a href="https://commons.wikimedia.org/wiki/File:Trails_of_Forest_Park.JPG" target="_blank">RaySawak</a> via Wikimedia Commons</p>' + 
  '<p>Queens\' forest land consists of many species of trees of varying maturity. This enables a diversity of bird species to take shelter and sustenance in the tall tree canopies and undergrowth beneath. <a href="https://nycaudubon.org/events-birding/birding-resources/birding-in-nyc/birding-in-queens/forest-park?&_ga=2.64092527.1737851004.1681271488-1871949272.1681271488#water-hole" target="_blank">Forest Park</a>, pictured here, is located on the site of an ancient glacier. The depressions the glacier left on the land resulted in present-day ponds, gullies, and one particularly popular “Water Hole” that draws migrating songbirds. To protect these critical breeding grounds and stopover locations for migrating birds, <a href="https://www.nycaudubon.org/our-work/conservation/habitat-protection/forests-and-upland-parks">forest conservation</a> is a necessity.</p>';

let divChapter7 =
  '<h2>Habitat: Freshwater</h2>' + 
  '<img src="assets/images/flushing-meadows-willow-lake-2019-tdorante10-wikicommons.jpg" width=100%>' +
  '<p class="imageCredit">Photo by <a href="https://commons.wikimedia.org/wiki/File:Flushing_Meadows_Willow_Lake_td_(2019-04-10)_08.jpg" target="_blank">Tdorante10</a> via Wikimedia Commons</p>' +
  '<p>Freshwater habitats include lakes, ponds, and cattail marshes. Flushing Meadows-Corona Park\'s <a href="https://www.nycgovparks.org/parks/flushing-meadows-corona-park/highlights/11312" target="_blank">Willow Lake</a>, pictured here, and the surrounding marshes and meadows attract waterfowl, hawks, and other animals. Like other habitats, freshwater wetlands are home to native plant species that provide a key migratory stop along the Atlantic flyway. Today, just <a href="https://www.nycgovparks.org/learn/ecosystems/wetlands-in-new-york-city-parks" target="_blank">one percent</a> of the city\'s historical wetlands remain, a sobering statistic given their important roles in ecosystems and stormwater flood mitigation.</p>';

let divChapter8 =
  '<h2>Habitat: Salt Marshes</h2>' + 
  '<img src="assets/images/udalls-cove-virginia-point-udallscoveorg.jpg" width=100%>' +
  '<p class="imageCredit">Photo by <a href="https://www.udallscove.org/history" target="_blank">Udalls Cove Preservation Committee</a></p>' +
  '<p>Vegetation in salt marshes has acclimated to both freshwater and saltwater, and some segments will also regularly submerge under water. One particular species of grass, <a href="https://www.nycgovparks.org/parks/udalls-park-preserve/highlights/11328" target="_blank">saltmarsh cordgrass</a>, thrives in sediment-rich deposits along the shore and provides the added benefit of acting as a natural filtration system for debris, producing mud that adds biodiversity. Like fields, many of which were once salt marshes themselves, they are also at the edges of other habitats. Wetlands such as these have to contend not only with pollution and stormwater runoff, but also <a href="https://www.nycaudubon.org/our-work/conservation/habitat-protection/coastal-wetlands-and-beaches" target="_blank">impermeable development</a> that continues to be built atop vulnerable watersheds.</p>';

let divChapter9 =
  '<h2>Habitat: Seashore</h2>' +
  '<img src="assets/images/piping-plover-and-new-chicks-wildlifenycgov.jpg" width=100%>' +
  '<p class="imageCredit">Photo by <a href="https://www.nyc.gov/site/wildlifenyc/animals/piping-plovers.page" target="_blank">WildlifeNYC</a></p>' +
  '<p>The Rockaway Penninsula is a hotspot for migratory birds in spring and autumn. Unfortunately, certain species of birds that nest along its beaches are threatened by encroaching human activity. On the southern side of the Breezy Point neighborhood is a federally protected area for Piping Plovers, a threatened or endangered species that has all but disappeared from some of its other habitats in the U.S.</p>';

let divChapter10 = 
  '<h2>Now it\'s our turn!</h2>' +
  '<img src="assets/images/janes-squawk-west-pond-jamaica-bay-wildlife-refuge.jpg" width=100%>' +
  '<p>With all this in mind, we set out for the West Pond Trail of Jamaica Bay Wildlife Refuge last week to see if we could observe any of the birds from our research. The approximately two-mile trail is located in Broad Channel, an inhabited island in the middle of Jamaica Bay.</p>' +
  '<p>Jamaica Bay Wildlife Refuge is a spectacular oasis comprised of 9,000 acres (20 square miles) of open bay, saltmarsh, mudflats, upland fields and woodland, small freshwater ponds, and two brackish man-made impoundments. Part of the Gateway National Recreation Area, the Refuge is the U.S. Department of the Interior\'s only wildlife refuge administered by the National Park Service.</p>';

let divChapter11 = 
  '<p>Over <a href="https://www.nycaudubon.org/events-birding/birding-resources/birding-in-nyc/birding-in-queens/jamaica-bay-wildlife-refuge" target="_blank">332 bird species</a> have been sighted at the refuge over the last 25 years, in addition to other native wildlife like horseshoe crabs, diamondback terrapin, and muskrats. Of these, approximately 70 bird species nest regularly at the refuge. In spring, Jamaica Bay is visited by numerous shorebirds, waterfowl, wading birds, terns, flycatchers, cuckoos, warblers, and tanagers.</p>' + 
  '<p>Created in 1953 by the Parks Department to improve habitat diversity in Jamaica Bay, the brackish, 45-acre West Pond is known to be especially good for viewing migratory shorebirds in breeding plumage, including the black bellied and semipalmated plovers, red knot, and short-billed dowitcher.</p>';

let divChapter12 = 
  '<img src="assets/images/stop-1.jpeg" width=100%>' +
  '<p>We began our walk at 10 a.m. on a breezy but sunny morning in early May that felt particularly welcoming after the weekend of torrential rains that closed out the month of April. The West Pond\'s gravel trail begins in an area with dense brush and the occasional tree. It was here that we immediately heard the rapid twittering of a House Wren.</p>' + 
  '<img src="assets/images/test.jpg">' + 
  '<audio controls src="assets/sounds/house-wren.wav"></audio>';

let divChapter13 = 
  '<img src="assets/images/stop-2.jpeg" width=100%>' +
  '<p>In just a few hundred feet, we came across a clearing to the left of the trail that had a view of an expansive salt marsh and the Rockaway Peninsula in the distance. Standing stoically in the salt flats was a Great Egret, its snow white feathers contrasting with the dull brown and greens of the marsh.</p>' +
  '<p>As we gazed southward, an Osprey soared overhead. And quietly, slowly, a flock of [pipers] waded through the mud, their bills prodding the ground for insects and other food.</p>';

let divChapter14 = 
  '<p>Continuing through the scrub brush, we were startled when a Red-winged Blackbird flew down and perched prominently on a bush branch beside the trail. Almost in curiosity, it cocked its head back and forth in between shrill "twee" calls. But our attention was quickly diverted by the stunning size of a [Ring-billed Gull or Herring Gull] that flapped overhead as it headed for the open bay.</p>';

let divChapter15 = 
  '<img src="assets/images/stop-4.jpeg" width=100%>' + 
  '<p>Again, the trail gave way to an expansive view, this time of West Pond itself. Acrobatically zipping and changing direction as they flew above the pond were dozens of Tree Swallows, their blue-green feathers shimmering in the sunlight as they chased flies. (At the time, we hadn\'t yet identified them by name, but  definitely marveled at the vibrancy of their feathers!).</p>' + 
  '<p>This was also our first glimpse of swimming birds; namely, Mallards and a flock of Bufflehead Ducks, with their unmistakable tufted white heads.</p>';

let divChapter16 = 
  '<p>As we curved clockwise around the eastern edge of the pond, we caught up to several other birders in an open area surrounded by dense green scrub brush. We shared a collective moment of genuine excitement when a bright bird appeared through the foliage: a Scarlet Tanager! Its striking orange-red plumage seemed to glow as it hopped its way around the bushes. Then another appeared. We learned from our fellow birders that this was a relatively special encounter for this time of the season.</p>';

let divChapter17 = 
  '<img src="assets/images/stop-6.jpeg" width=100%>' +
  '<p>At this point, we agreed that anything else would be icing on the cake. So as we rounded the easternmost curve of the trail, we were excited to see dozens of Brants, their white bodies and black heads bobbing among the whitecaps of the bay with the Manhattan skyline as a backdrop.</p>';

let divChapter18 = 
  '<p>As we re-entered the cover of the scrub brush, the high-pitched musical sounds of a Brown Thrasher and Song Sparrow filled the still air. And while we couldn\'t see the bright plumage of the Northern Cardinal, we heard its familiar call as well.</p>';

let divChapter19 = 
  '<img src="assets/images/stop-8.jpeg" width=100%>' + 
  '<p>As we approached the halfway point of the walk, we encountered two familiar faces: Canada Geese. These two seemed unfazed by our presence, perhaps because their attention appeared to be on some goslings to-be.</p>';

let divChapter20 = 
  '<p>Earlier, a friendly birder whom we encountered on the trail had encouraged us to be on the lookout for the Eastern Towhee, a bird that neither of us had heard of before. And indeed, as we progressed along the trail\'s northern straightaway, we spotted the tiny bird perched on a branch, its orange belly and black-capped head a striking combination. (When we caught up to our fellow birder on the trail, we swapped notes and learned that he\'d also glimpsed a Towhee in the undergrowth!)</p>';

let divChapter21 = 
  '<p>After rounding the final corner of the loop, we were presented with two options: continue down the gravel trail or divert down an offbeaten grassy path through the woods. Of course we chose the latter!</p>' +
  '<p>As we immersed ourselves in the woods at the edge of the marsh, we were immediately rewarded with the cheerful spring chorus of at least half a dozen birds, including a Yellow Warbler, Carolina Wren, White Throated Sparrow, Common Yellothroat, and Northern Parula.</p>';

let divChapter22 = 
  '<p>Coming out of the woods, we returned to the trail and the final straightaway back to the visitor center. Walking along the familiar gravel path, we heard the overhead cackle of Laughing Gulls, soaring one by one with their blue caps and wingtips against the clear blue sky.</p>';

let divChapter23 = 
  '<p>We joked that they were mocking the amateurs squinting up and trying to make out who they are (How many types of gulls are there? So many!). But at the end of the day, it was these amateurs--with our reams of sightings notes, photos and voice memos, and memories--who smiled the entire drive back, excited for this newfound hobby and an experience that was more than we could have ever hoped when we started this project.</p>';

let divChapter24 =
  '<h2>Thank you for joining us!</h2>' +
  '<p>If, like us, you feel inspired to go birding, check out the following resources:<br>list</p>' +
  '<p>And for fellow data viz enthusiasts, here are the resources we used to develop this website:<br><a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Template</a><br><a href="https://pointsunknown.nyc/web%20mapping/mapbox/2021/07/20/11A_MapboxStorytelling.html" target=_blank">Points Unknown</a><br>GBIF.org (14 April 2023) GBIF Occurrence Download <a href="https://doi.org/10.15468/dl.tfsus5">https://doi.org/10.15468/dl.tfsus5</a></p>' 

var config = {
  style: 'mapbox://styles/rnzee/clh6kql9s00aw01qjhaw9agbe',
  accessToken: 'pk.eyJ1Ijoicm56ZWUiLCJhIjoiY2xnd3BsamtkMTJkZDNqa2xjaWhrcXY1dSJ9.Wnj9Xg4bX4AmEO05bTnTOw',
  showMarkers: false,
  markerColor: '#49C2FF',
  inset: false,
  theme: 'light',
  use3dTerrain: false,
  auto: false,
  title: titleDiv,
  subtitle: subtitleDiv,
  byline: bylineDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "welcome",
      alignment: "centered",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
    },
    {
      id: "context-1",
      alignment: "right",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [-73.75160, 40.67468],
        zoom: 10.8,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "context-2",
      alignment: "centered",
      hidden: false,
      chapterDiv: divChapter3,
      location: {
        center: [-74, 40.725],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "2-context-iii",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter4,
      location: {
        center: [-73.86707, 40.69039],
        zoom: 11,
        zoomSmall: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: '3-habitat-fi',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter5,
      location: {
        center: [-73.75762, 40.76089],
        pitch: 40.00,
        zoom: 18,
        zoomSmall: 16,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ]
    },
    {
      id: '3-habitat-fo',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter6,
      location: {
        center: [-73.84919, 40.70229],
        pitch: 40.00,
        zoom: 14.25,
        zoomSmall: 13,
        bearing: 0.00,
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ]
    },
    {
      id: '3-habitat-fr',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter7,
      location: {
        center: [-73.83533, 40.72785],
        pitch: 40.00,
        zoom: 14.25,
        zoomSmall: 13,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ]
    },
    {
      id: '3-habitat-sa',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter8,
      location: {
        center: [-73.74585, 40.77927],
        pitch: 40.00,
        zoom: 16.15,
        zoomSmall: 15,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ]
    },
    {
      id: '3-habitat-sea',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter9,
      location: {
        center: [-73.92195, 40.55287],
        pitch: 40.00,
        zoom: 14.25,
        zoomSmall: 13,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ]
    },
    {
      id: '4-jw-intro-i',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter10,
      location: {
        center: [-73.83030, 40.61819],
        pitch: 40.00,
        zoom: 14.25,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: '4-jw-intro-ii',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter11,
      location: {
        center: [-73.83030, 40.61819],
        pitch: 40.00,
        zoom: 14.25,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [
        {
          layer: "ebird-spring21",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "ebird-spring21",
          opacity: 1,
          duration: 300,
        },
      ]
    },
    {
      id: 'walk-stop-1',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter12,
      location: {
        center: [-73.82563, 40.61656],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-2',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter13,
      location: {
        center: [-73.82668, 40.61637],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-3',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter14,
      location: {
        center: [-73.82792, 40.61625],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-4',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter15,
      location: {
        center: [-73.82972, 40.61592],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
    id: 'walk-stop-5',
    alignment: 'right',
    hidden: false,
    chapterDiv: divChapter16,
    location: {
      center: [-73.83458, 40.61658],
      pitch: 40.00,
      zoom: 19,
      bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
    },
    {
    id: 'walk-stop-6',
    alignment: 'left',
    hidden: false,
    chapterDiv: divChapter17,
    location: {
      center: [-73.83466, 40.61710],
      pitch: 40.00,
      zoom: 19,
      bearing: 0.00
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
    },
    {
      id: 'walk-stop-7',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter18,
      location: {
        center: [-73.83433, 40.61794],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-8',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter19,
      location: {
        center: [-73.83433, 40.61794],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-9',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter20,
      location: {
        center: [-73.83130, 40.62135],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-10',
      alignment: 'right',
      hidden: false,
      chapterDiv: divChapter21,
      location: {
        center: [-73.82747, 40.62224],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-11',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter22,
      location: {
        center: [-73.82600, 40.61876],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'walk-stop-12',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter23,
      location: {
        center: [-73.82600, 40.61876],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'resources',
      alignment: 'left',
      hidden: false,
      chapterDiv: divChapter24,
      location: {
        center: [-73.82600, 40.61876],
        pitch: 40.00,
        zoom: 19,
        bearing: 0.00
      }
    },
  ]
};