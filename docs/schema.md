# Database Schema

### Users
Column Name| Data Type | Details
-----------|-----------|--------
id | integer | not null, primary key
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique


### Profiles
Column Name| Data Type | Details
-----------|-----------|--------
id | integer | not null, primary key
name | string | not null
avatar_id | string | not null, forein key
user_id | integer | not null, indexed, foreign key

### Avatar
Column Name| Data Type | Details
-----------|-----------|--------
id | integer | not null, primary_key
name | string | not null
image(aws_url) | string | not null, primary_key

### Medias
Column Name| Data Type | Details
-----------|-----------|--------
id| integer | not null, primary key
title | string | not null
year | integer | not null
mpaa_rating | string | not null
description | string | not null
has_episodes | boolean | not null
genre_id | integer | not null, foreign key
playlist_id | integer | not null, foreign key

Associations:
[] belong_to :genres
[] has_many :videos
[] has_many :episodes

### Videos
Column Name| Data Type | Details
-----------|-----------|--------
id| integer | not null, primary key
video(url) | string | not null
video_thumb(url) | string | not null
video_medium(url) | string | not null
media_id | integer | not null, foreign key
episode_id | integer | not null, foreign key

Associations:
[] belongs_to :medias
[] belongs_to :episodes

### Genres
Column Name| Data Type | Details
-----------|-----------|--------
id| integer | not null, primary key
name| string | not null

Associations:
[] has_many :medias

### Episodes
Column Name| Data Type | Details
-----------|-----------|--------
id | integer | not null, primary key
title | string | not null
description | string | not null
media_id | integer | not null, foreign key
