import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table({ tableName: 'books' })
export class Book extends Model<Book> {
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
	})
	name: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	title: string

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	author: string

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	price: number
}
