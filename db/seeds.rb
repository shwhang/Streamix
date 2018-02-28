# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all

#Users
demoUser = User.create(email: "saehee@gmail.com", password: "shibchill");

#Profiles
demoProfile1 = Profile.create(
  name: "Jake",
  user_id: demoUser.id,
  avatar: File.open('app/assets/images/avatars/avatar8.png')
)

demoProfile2 = Profile.create(
  name: "Marceline",
  user_id: demoUser.id,
  avatar: File.open('app/assets/images/avatars/avatar4.png')
)
