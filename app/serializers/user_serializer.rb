class UserSerializer < ApplicationSerializer
  attributes :id, :name, :email
  has_many :applications
end
