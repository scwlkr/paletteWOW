class UpdateUsersForGoogleOauth < ActiveRecord::Migration[8.1]
  def change
    remove_index :users, :reset_password_token if index_exists?(:users, :reset_password_token)
    remove_column :users, :encrypted_password, :string, default: "", null: false
    remove_column :users, :reset_password_token, :string
    remove_column :users, :reset_password_sent_at, :datetime
    remove_column :users, :remember_created_at, :datetime

    rename_column :users, :name, :full_name if column_exists?(:users, :name)

    add_column :users, :uid, :string
    add_column :users, :provider, :string
    add_column :users, :avatar_url, :string

    add_index :users, [ :provider, :uid ], unique: true
  end
end
