class Follow < ApplicationRecord
  validates :user_id, :follower_id, presence: true
  validates :user_id, uniqueness: {scope: :follower_id}
end
