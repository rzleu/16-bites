class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true
  validates :followee_id, uniqueness: {scope: :follower_id}

  belongs_to :follower, 
    foreign_key: :follower_id, 
    class_name: :User

  belongs_to :followee, 
    foreign_key: :followee_id, 
    class_name: :User
end
