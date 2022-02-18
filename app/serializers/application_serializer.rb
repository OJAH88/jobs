class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :company, :position, :contact, :deadline, :sentn, :response, :offer, :accepted, :notes, :user_id
  has_one :user
end
