  json.extract! post, :id, :title, :description, :location, :keywords, :user_id
  json.user post.user, :fname, :lname