# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Profile.destroy_all
Avatar.destroy_all
Genre.destroy_all
Medium.destroy_all
Video.destroy_all

# AVATARS
defaultAvatar= Avatar.create(
  name: "avatar-default",
  image: File.open('app/assets/images/avatars/default-avatar.png')
)
avatar1 = Avatar.create(
  name: "avatar-1",
  image: File.open('app/assets/images/avatars/avatar1.png')
)
avatar2 = Avatar.create(
  name: "avatar-2",
  image: File.open('app/assets/images/avatars/avatar2.png')
)
avatar3 = Avatar.create(
  name: "avatar-3",
  image: File.open('app/assets/images/avatars/avatar3.png')
)
avatar4 = Avatar.create(
  name: "avatar-4",
  image: File.open('app/assets/images/avatars/avatar4.png')
)
avatar5 = Avatar.create(
  name: "avatar-5",
  image: File.open('app/assets/images/avatars/avatar5.png')
)
avatar6 = Avatar.create(
  name: "avatar-6",
  image: File.open('app/assets/images/avatars/avatar6.png')
)
avatar7 = Avatar.create(
  name: "avatar-7",
  image: File.open('app/assets/images/avatars/avatar7.png')
)
avatar8 = Avatar.create(
  name: "avatar-8",
  image: File.open('app/assets/images/avatars/avatar8.png')
)
avatar9 = Avatar.create(
  name: "avatar-9",
  image: File.open('app/assets/images/avatars/avatar9.png')
)

# USERS
demoUser = User.create(email: "saehee@gmail.com", password: "shibchill");

# PROFILES
demoProfile1 = Profile.create(
  name: "Jake",
  user_id: demoUser.id,
  avatar_id: avatar5.id
)

demoProfile2 = Profile.create(
  name: "Marceline",
  user_id: demoUser.id,
  avatar_id: avatar6.id
)

#GENRES
action = Genre.create(name: "action")
cats = Genre.create(name: "cats")
horror = Genre.create(name: "horror")
nature = Genre.create(name: "nature")
romance = Genre.create(name: "romance")
travel = Genre.create(name: "travel")

# MEDIUM
action1 = Medium.create(
  title: "Rollercoaster",
  year: 1999,
  mpaa_rating: "Rated-R",
  description: "An adventurous journey to the land of the Mysteria, where young ladies ride a magical ride.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action2 = Medium.create(
  title: "Summer Fun",
  year: 2017,
  mpaa_rating: "Rated-R",
  description: "The trials of troubled young loers and the relationships they have with the people around them.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action3 = Medium.create(
  title: "High Up",
  year: 2012,
  mpaa_rating: "PG-13",
  description: "As a child, Jerry has always wished to be a human rocket ship. Watch a flashback to his past.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action4 = Medium.create(
  title: "Super Boy",
  year: 3030,
  mpaa_rating: "PG",
  description: "Watch this boy wonder throw an airplane into the sky.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action5 = Medium.create(
  title: "Happy Dog",
  year: 2016,
  mpaa_rating: "PG",
  description: "A blissful Dog's adventure into the woods. Watch that smile till the end...",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action6 = Medium.create(
  title: "Dis a Fight?",
  year: 2010,
  mpaa_rating: "Rated-R",
  description: "Yo is this a fight or something else? Be prepared for the surprise at the end.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action7 = Medium.create(
  title: "The MiliDoc",
  year: 2017,
  mpaa_rating: "PG",
  description: "A real insider in the military practices within the US government.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

action8 = Medium.create(
  title: "Blue Surfer",
  year: 1999,
  mpaa_rating: "PG",
  description: "The legendary Johnny Massive Attack Seviper conquers nature's almighty wall, the Blue Surf.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: action.id
)

# Cats Medium
cat1 = Medium.create(
  title: "Danny Tanner",
  year: 1990,
  mpaa_rating: "PG",
  description: "The Tanner House is nothing without the head of the house. He cooks, he cleans, he works hard for his family. Look at him go.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat2 = Medium.create(
  title: "Lazier Cat",
  year: 2001,
  mpaa_rating: "PG",
  description: "No, this cat is not Garfield. In fact, it's Garfield's evil twin. Ever heard of him. Well, of course not, when this cat is lazier than Garfield.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat3 = Medium.create(
  title: "Catlander",
  year: 2011,
  mpaa_rating: "Rated-R",
  description: "This fashion icon takes to screen to impress everyone with the ultimate face pose. The cat that inspired Zoolander.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat4 = Medium.create(
  title: "Baby Claws II",
  year: 2017,
  mpaa_rating: "PG-13",
  description: "The ultimate kitty back with the ultimate move that will help defend CatVille from the Paws Patrol.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat5 = Medium.create(
  title: "Novicaine",
  year: 2013,
  mpaa_rating: "PG-13",
  description: "Tragic, but beautiful story of a beautiful cat and her love of a fun filled world where humans dream to be everyday from the hours of 9 to 5.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat6 = Medium.create(
  title: "Cat and Mouse",
  year: 2005,
  mpaa_rating: "Rated-R",
  description: "The classic tale of the battle between cat and mouse. This is not a Tom and Jerry story, perepare to see some action packed violence.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat7 = Medium.create(
  title: "Abandonment",
  year: 2014,
  mpaa_rating: "PG",
  description: "The documentary of how trillions of cats are left to fend for themselves, due to the careless act of humans.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

cat8 = Medium.create(
  title: "Up, Left, and Right",
  year: 2017,
  mpaa_rating: "PG",
  description: "The everyday rituals of a typical domestic cat and a sadistic owner with a cat toy, Who could resist the temptation?",
  has_episodes: false,
  playlist_id: 0,
  genre_id: cats.id
)

# Horror Videos
horror1 = Medium.create(
  title: "Ghost City",
  year: 1980,
  mpaa_rating: "PG-13",
  description: "This city may seem inhabited by humans at first. But new travelers soon find that everyone they have come in contact with was an entity of some sort.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror2 = Medium.create(
  title: "Aggressive Waters",
  year: 1989,
  mpaa_rating: "PG-13",
  description: "Is this a natural waterfall or the aggressive act of a water nymph. This is a must watch for a peer your pants kind of night.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror3 = Medium.create(
  title: "!DQ Blizzard",
  year: 1991,
  mpaa_rating: "PG-13",
  description: "The fearful vengeance of Santa Claus, leads this family to be stranded in a zero temperature storm with a Yeti that lives near by.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror4 = Medium.create(
  title: "Dreamer",
  year: 1982,
  mpaa_rating: "PG-13",
  description: "The reality of what happens to people who never fulfill their dream. This man was a rocker who had dreams, but met misfortune and now he haunts those that are near with awful noise.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror5 = Medium.create(
  title: "Merry Go Round",
  year: 1989,
  mpaa_rating: "PG-13",
  description: "The lost children biding their time before their inevitable doom. In these final moments, we watch these joyous children enjoy themselves, before things take a turn.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror6 = Medium.create(
  title: "The Artist",
  year: 1976,
  mpaa_rating: "Rated-R",
  description: "The story of a tragic man, heartbroken and sad contemplates an escape. The journey to his death is psychological non-thriller.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror7 = Medium.create(
  title: "Just Bad Dancing",
  year: 1960,
  mpaa_rating: "Rated-R",
  description: "Just Bad Dancing, is truly so horrfying. It has been critcally acclaimed where audience members have left 1 second into watching this film.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)

horror8 = Medium.create(
  title: "Killer Billy",
  year: 1987,
  mpaa_rating: "Rated-R",
  description: "A Savage billy goat is let loose on to villagers. Billy goes on a rampage with only murder in sight.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: horror.id
)


# Nature Medium
nature1 = Medium.create(
  title: "Jellyfish",
  year: 2011,
  mpaa_rating: "PG",
  description: "The documentary that reveals the secrest of the jellyfish and the imaginary land that they live in.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature2 = Medium.create(
  title: "Fly",
  year: 2017,
  mpaa_rating: "PG",
  description: "See what birds, see what they feel. Rise above the clouds and Fly. Dream on these once puffy marshmallows.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature3 = Medium.create(
  title: "Japanese Cherry Blossoms",
  year: 2012,
  mpaa_rating: "PG",
  description: "The beautiful flower tree, the japanese call Sakura. Watch the story of how they traveled from Japan to America.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature4 = Medium.create(
  title: "Salmon Call",
  year: 2015,
  mpaa_rating: "PG",
  description: "Watch these crazy Sockeye Salmons scream and call out to defend the territory and their beautiful children. See them defend with every last breathe.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature5 = Medium.create(
  title: "Sunrise Timelapse",
  year: 2014,
  mpaa_rating: "PG",
  description: "Observe how the sun rises from the ashes like a phoenix with multiple lives. It is a beautiful sight to see.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature6 = Medium.create(
  title: "Waterfall",
  year: 2015,
  mpaa_rating: "PG",
  description: "The serene sounds of this amazing healing waterfall on an autumn evening.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature7 = Medium.create(
  title: "Firrrreeeeeee",
  year: 2013,
  mpaa_rating: "PG",
  description: "The Hot, Burning Passion with a heated twist. A beautiful, but dangerous story. Get to close, you might just get burnt alive.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

nature8 = Medium.create(
  title: "Weeds",
  year: 2013,
  mpaa_rating: "PG",
  description: "The story of the rise of an illegal plant that was illegalized for inappropriate reasons.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: nature.id
)

# Romance Medium
romance1 = Medium.create(
  title: "The Ending",
  year: 2016,
  mpaa_rating: "PG",
  description: "No one ever watches the wedding of every romance movie. Finally romance lovers get a chance to watch the permanent happily ever after.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance2 = Medium.create(
  title: "The Real Love",
  year: 2012,
  mpaa_rating: "PG",
  description: "Endless Possibilities of who you seek, who you like, you hate, and who you love. This the analytical and pragmatic observation of true love.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance3 = Medium.create(
  title: "The One",
  year: 2017,
  mpaa_rating: "PG",
  description: "The beautiful love story of how one man found love, and although his husband is no longer around. He lives for tomorrow like his husband had wished for him to have continued living.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance4 = Medium.create(
  title: "Beast Love",
  year: 2012,
  mpaa_rating: "Rated-R",
  description: "This man's peculiar attraction to this squirrel is no more than a platonic friendship.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance5 = Medium.create(
  title: "Aerial Romance",
  year: 2017,
  mpaa_rating: "PG",
  description: "They take a drone to video tape their love from high up in the skies. A wonderful way to capture the 10 year long love that they have shared.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance6 = Medium.create(
  title: "The First Meeting",
  year: 2017,
  mpaa_rating: "PG-13",
  description: "Girl meets Boy. Boy meets Girl. Watch the hot firey chemistry between these two. As the night continues, they realize they are perfect for each other.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance7 = Medium.create(
  title: "The Great Mundane",
  year: 2011,
  mpaa_rating: "PG",
  description: "This lovely couple have been married for 20 years, and they continue to love each other everyday. Watch them in a quiet afternoon with their mundane adventures.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

romance8 = Medium.create(
  title: "Wait",
  year: 2011,
  mpaa_rating: "PG",
  description: "Watch this man wait for the love of his life, as he ponders as to why he loved her in the first place.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: romance.id
)

# Travel Medium
travel1 = Medium.create(
  title: "Galapagos",
  year: 2011,
  mpaa_rating: "PG",
  description: "A beautiful view of the famous Galapagos Island. The rich blue waters and the green lands make this a great travel adventure for those seeking a journey.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)

travel2 = Medium.create(
  title: "Sunset",
  year: 2015,
  mpaa_rating: "PG",
  description: "The suns goes home to sleep, as the rest of the world leisurely wait for the sun's bedtime",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)


travel3 = Medium.create(
  title: "Sandy Vacation",
  year: 2013,
  mpaa_rating: "PG",
  description: "The warm terrain, the heated weather. What person would not enjoy going here to lay out and relax.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)

travel4 = Medium.create(
  title: "Serenity",
  year: 2000,
  mpaa_rating: "PG",
  description: "Serenity is the name of the lost waters with bluest color known to a body of water. Just be careful of the Kraken and its territorial nature.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)


travel5 = Medium.create(
  title: "Stockholm",
  year: 2000,
  mpaa_rating: "PG",
  description: "A beautiful travel place for those looking for history and adventure all in one sitting.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)

travel6 = Medium.create(
  title: "Sea of Stars",
  year: 2012,
  mpaa_rating: "PG",
  description: "Get lost in the beautiful site of the Milky Way and all the stars that it can't bother to contain.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)

travel7 = Medium.create(
  title: "Paris",
  year: 2012,
  mpaa_rating: "PG",
  description: "A great arch to talk about in terms of Art and Architecture.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)

travel8 = Medium.create(
  title: "Orange View",
  year: 2013,
  mpaa_rating: "PG",
  description: "The beautiful horizon where the skies, meet the grounds.",
  has_episodes: false,
  playlist_id: 0,
  genre_id: travel.id
)

# Access AWS for Videos and Video's thumbnails

def get_thumbnail_urls(video_url, thumbnail_urls)
  last_slash_idx = video_url.rindex("/")
  video_tag = Regexp.new(video_url[last_slash_idx + 1...-4]) #removes .mp4 extension

  thumbs = []
  #grabs all thumbnails with match video name
  thumbnail_urls.each do |thumbnail_url|
    if video_tag.match thumbnail_url
      url = "https://s3.amazonaws.com/streamix-pro/" + thumbnail_url
      thumbs << url
    end
  end

  thumbs.join(' ')
end

def createVideos
  s3 = Aws::S3::Resource.new(region: 'us-east-1')
  bucket = s3.bucket("streamix-pro").objects

  video_urls = []
  thumbnail_urls = []

  bucket.each do |bucket|
    url = bucket.key

    if /.mp4/.match url
      video_urls << url
    else
      thumbnail_urls << url
    end
  end

  url = "https://s3.amazonaws.com/streamix-pro/"

  genres = Genre.all.map {|genre| genre.name }

  medium = Medium.all.each_with_index do |medium, idx|
    video_url = video_urls[idx]

    Video.create ( {
        medium_id: medium.id,
        episode_id: 0,
        video_url: url + video_url,
        thumbnails: get_thumbnail_urls(video_url, thumbnail_urls)

    })
  end
end

createVideos
