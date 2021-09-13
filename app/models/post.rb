class Post < ApplicationRecord
  validates :title, :user_id, presence:  true

  validate :ensure_photo

  belongs_to :user,
    foreign_key: :user_id,
    primary_key: :id

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end
end
