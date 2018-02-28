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

#Avatars
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

#Users
demoUser = User.create(email: "saehee@gmail.com", password: "shibchill");

#Profiles
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
