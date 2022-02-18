class User < ApplicationRecord
    has_many :applications
    validates :email, presence: true, uniqueness: true
end
