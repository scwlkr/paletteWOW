class CreatePalettes < ActiveRecord::Migration[8.1]
  def change
    create_table :palettes do |t|
      t.string :name
      t.references :user, null: true, foreign_key: true

      t.timestamps
    end
  end
end
