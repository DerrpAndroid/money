class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.references :user, foreign_key: true
      t.string :to_user
      t.date :date_completed
      t.float :rate_achieved
      t.float :charges

      t.timestamps
    end
  end
end
