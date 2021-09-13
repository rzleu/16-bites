# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Post.destroy_all

demo = User.create(email: 'demo_user@demo.com', password: 'demodemodemo', fname:'demo', lname:'demopassword', username:'demo_user')

post1 = Post.create!(title: 'Cake', description: 'Chocolately', location: 'NYC', user_id: demo.id)
post1.photo.attach(io: URI.open("https://unsplash.com/photos/4MJiMtD5Veo/download?force=true"), filename: 'fotis-fotopoulos-4MJiMtD5Veo-unsplash.jpg')

post1 = Post.create!(title: 'Pancakes', description: 'pancakes are awesome', location: 'Seattle', user_id: demo.id)
post1.photo.attach(io: URI.open("https://unsplash.com/photos/eeqbbemH9-c/download?force=true"), filename: 'chad-montano-eeqbbemH9-c-unsplash.jpg')