class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 7, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  def password= (password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials (username, password)
    @user = User.find_by(username: username)

    if BCrypt::Password.new(@user.password_digest).is_password?(password)
      return @user
    else
      return false;
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
