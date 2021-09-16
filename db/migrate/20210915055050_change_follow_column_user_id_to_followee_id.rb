class ChangeFollowColumnUserIdToFolloweeId < ActiveRecord::Migration[6.1]
  def change
    rename_column :follows, :user_id, :followee_id
  end
end
