class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :posts, dependent: :destroy
  
  has_many :follows,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :followees,
    foreign_key: :follower_id,
    class_name: :Follow
  
  has_many :following,
    through: :followees,
    source: :followee
    


  def self.find_by_credentials(login, password)
    user = User.find_by(email: login) || User.find_by(username: login)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
