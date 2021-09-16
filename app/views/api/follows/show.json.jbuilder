json.array! @follows do |follow|
  json.extract! follow, :id, :followee_id, :follower_id
end
