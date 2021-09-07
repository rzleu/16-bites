class AddUniqueIndextoEmailAndUsername < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :email, false
    add_index :users, :username, unique: true

  end
end
