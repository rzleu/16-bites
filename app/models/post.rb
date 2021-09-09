class Post < ApplicationRecord
  validates :title, :user_id, presence:  true

  belongs_to :user,
    foreign_key: :user_id,
    primary_key: :id

  has_one_attached :photo
end
