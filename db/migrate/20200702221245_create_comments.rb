class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :review_id, null: false
      t.integer :user_id, null: false
      t.text :content, null: false
      t.timestamps
    end

    add_index :comments, :review_id
    add_index :comments, :user_id
  end
end
