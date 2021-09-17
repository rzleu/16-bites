@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :fname, :lname, :email, :username
        json.posts user.posts.each do |post| 
          json.extract! post, :id, :title, :description, :location
          json.photo url_for(post.photo) if post.photo.attached?
        end
        json.followers user.followers, :id, :email, :username,:fname, :lname unless user.followers.empty?
        json.following user.following, :id, :email, :username, :lname unless user.following.empty?
    end
end
