class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :applications do |t|
      t.string :company
      t.string :position
      t.string :contact
      t.date :deadline
      t.date :sentn
      t.string :response
      t.boolean :offer
      t.boolean :accepted
      t.string :notes
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
