class CreateGrandings < ActiveRecord::Migration[5.0]
  def change
    create_table :grandings do |t|
      t.integer :member_id
      t.integer :rater_id
      t.integer :excitement
      t.integer :possibility
      t.integer :youg
      t.integer :total

      t.timestamps
    end
  end
end
