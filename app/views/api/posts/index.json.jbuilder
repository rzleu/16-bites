json.array! @posts do |post|
  json.partial! '/api/posts/post', post: post
  json.photoUrl url_for(post.photo) if post.photo.attached?
end