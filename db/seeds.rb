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
Follow.destroy_all

demo = User.create!(email: 'demo_user@demo.com', password: 'demo_password', fname:'demo_firstname', lname:'demo_lastname', username:'demo')

post1 = Post.create!(title: 'Egg Salad', description: 'Beautiful Egg Salad for brunch', location: 'NYC', user_id: demo.id, photo: {
  io: URI.open("https://unsplash.com/photos/fdlZBWIP0aM/download?force=true&w=1920"), 
  filename: 'joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg'
})
pos2 = Post.create!(title: 'Vegan Salad Bowl', description: 'Vegan Salad Bowl', location: 'NYC', user_id: demo.id,photo: {
  io: URI.open("https://unsplash.com/photos/IGfIGP5ONV0/download?force=true&w=1920"),
  filename: 'anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
})
post3 = Post.create!(title: 'Meatballs', description: 'Meatballs', location: 'SF', user_id: demo.id,photo: {
  io: URI.open("https://unsplash.com/photos/OFismyezPnY/download?force=true&w=1920"),
  filename: 'anna-pelzer-IGfIGP5ONV0-unsplash'
})
post4 = Post.create!(title: 'Ice Cream',description: 'Ice Cream', location: 'SF', user_id:demo.id,photo: {
  io: URI.open("https://unsplash.com/photos/TLD6iCOlyb0/download?force=true&w=1920"),
  filename: 'ian-dooley-TLD6iCOlyb0-unsplash'
})
post5 = Post.create!(title: 'Drinking',description: 'Drinking in a field', user_id:demo.id,photo: {
  io: URI.open("https://unsplash.com/photos/BudPSphV1Wc/download?force=true&w=1920"),
  filename: 'shushan-meloyan-BudPSphV1Wc-unsplash.jpg'
})


anthill499 = User.create!(email: 'anthill499@gmail.com', password: 'ant_password121', fname:'Anthony', lname:'Huang', username:'anthill499')

post6 = Post.create!(title: 'Friendship',description: 'Fist bumping', user_id:anthill499.id, photo: {
  io: URI.open("https://unsplash.com/photos/XB_yndXE4ks/download?force=true&w=19200"),
  filename: 'taylor-smith-XB_yndXE4ks-unsplash.jpg'
})
post7 = Post.create!(title: 'BMW', description: 'car', user_id:anthill499.id, photo: {
  io: URI.open("https://unsplash.com/photos/dOohBCvMjyg/download?force=true&w=1920"),
  filename: 'joshua-naidoo-dOohBCvMjyg-unsplash.jpg'
})
post20 = Post.create!(title: 'Club', description: '', user_id:anthill499.id, photo: {
  io: URI.open("https://unsplash.com/photos/A_0C42zmz1Q/download?force=true&w=1920"),
  filename: 'antoine-julien-A_0C42zmz1Q-unsplash.jpg'
})

alex = User.create!(email: 'alexsaintlam@gmail.com', password: 'saintlamspassword', fname:'Alex', lname:'Lam', username:'AlexS')

post8 = Post.create!(title: 'Glistening Nug', description: 'Beautiful', user_id: alex.id, photo: {
  io: URI.open("https://unsplash.com/photos/4NyJGaMfMiI/download?force=true&w=1920"),
  filename: 'dad-grass-4NyJGaMfMiI-unsplash.jpg'
})
post9 = Post.create!(title: 'J', description: 'Relaxing morning', user_id: alex.id, photo: {
  io: URI.open("https://unsplash.com/photos/4msfw7Pe1iU/download?force=true&w=1920"),
  filename: 'ahmed-zayan-4msfw7Pe1iU-unsplash.jpg'
})
post10 = Post.create!(title: 'Glass', description: 'Glass', user_id: alex.id, photo: {
  io: URI.open("https://unsplash.com/photos/jVisH3WX4ME/download?force=true&w=1920"),
  filename: 'grav-jVisH3WX4ME-unsplash.jpg'
})

cindy = User.create!(email: 'cindyj@gmail.com', password: 'cindaepassword', fname:'Cindy', lname:'Jiang', username:'ahumanpinto')
post11 = Post.create!(title: 'Glass', description: 'Glass', user_id: cindy.id, photo: {
  io: URI.open("https://unsplash.com/photos/jVisH3WX4ME/download?force=true&w=1920"),
  filename: 'grav-jVisH3WX4ME-unsplash.jpg'
})
post12 = Post.create!(title: 'Glass', description: 'Glass', user_id: cindy.id, photo: {
  io: URI.open("https://unsplash.com/photos/RKdLlTyjm5g/download?force=true&w=1920"),
  filename: 'daniel-barnes-RKdLlTyjm5g-unsplash.jpg'
})
post13 = Post.create!(title: 'Sexy Watermellon', user_id: cindy.id, photo: {
  io: URI.open("https://unsplash.com/photos/BmXgBeLymH0/download?force=true&w=1920"),
  filename: 'dainis-graveris-BmXgBeLymH0-unsplash.jpg'
})

james = User.create!(email: 'james@gmail.com', password: 'jjamespassword', fname:'James', lname:'Chen', username:'JChen')
post14 = Post.create!(title: 'Mice', description:'Mice', user_id: james.id, photo: {
  io: URI.open("https://unsplash.com/photos/-dtKoaHpi9M/download?force=true&w=1920"),
  filename: 'nick-fewings--dtKoaHpi9M-unsplash.jpg'
})
post15 = Post.create!(title: 'CAT', user_id: james.id,photo: {
  io: URI.open("https://cdn.discordapp.com/attachments/870105274218872872/888192865325428796/XhFB8oiBMnWzwWR1awU5wqhRUwtXSVy5zSsA00MWr9d4C-a0TIiNSCWoZLDz4ljruM43quP3XxqtkOoZ1R5n-mVxDGm7uQ1Rk82v.png"),
  filename: 'cat.png'
})
post17 = Post.create!(title: 'Clubbing', user_id: james.id,photo: {
  io: URI.open("https://unsplash.com/photos/eAx2eoI_07E/download?force=true&w=1920"),
  filename: 'alfonso-scarpa-eAx2eoI_07E-unsplash.jpg'
})

Follow.create!(followee_id: james.id, follower_id: cindy.id)
Follow.create!(followee_id: james.id, follower_id: demo.id)
Follow.create!(followee_id: demo.id, follower_id: cindy.id)
Follow.create!(followee_id: demo.id, follower_id: alex.id)
Follow.create!(followee_id: cindy.id, follower_id: anthill499.id)
Follow.create!(followee_id: anthill499.id, follower_id: demo.id)
