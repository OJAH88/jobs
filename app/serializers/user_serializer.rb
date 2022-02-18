class UserSerializer < ApplicationSerializer
  attributes :id, :name, :email, :applications
  has_many :applications
end
