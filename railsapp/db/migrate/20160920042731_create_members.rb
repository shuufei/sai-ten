class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :detail
      t.string :image

      t.timestamps
    end
  end
end
