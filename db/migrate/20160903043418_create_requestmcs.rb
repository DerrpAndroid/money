class CreateRequestmcs < ActiveRecord::Migration[5.0]
  def change
    create_table :requestmcs do |t|
      t.references :user, foreign_key: true
      t.float :amount
      t.integer :to_currency
      t.integer :from_currency
      t.boolean :variable
      t.float :floor
      t.float :ceiling
      t.string :to_user_email

      t.timestamps
    end
  end
end
