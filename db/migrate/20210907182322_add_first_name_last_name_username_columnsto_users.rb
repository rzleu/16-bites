class AddFirstNameLastNameUsernameColumnstoUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :username, :string, null: false, unique: true
  end
end
