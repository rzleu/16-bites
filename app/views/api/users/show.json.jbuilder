json.partial! '/api/users/user', user: @user

json.posts @user.posts do |post|
  json.extract! post, :id, :title, :description, :location, :category, :keywords
  json.photoUrl url_for(post.photo) if post.photo.attached?
end