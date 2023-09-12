import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { BooksController } from './books/books.controller'
import { BooksModule } from './books/books.module'
import { BooksService } from './books/books.service'
import { Book } from './books/models/book.model'

@Module({
	imports: [
		BooksModule,
		ConfigModule.forRoot({ isGlobal: true }),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'root',
			password: 'root',
			database: 'books',
			models: [Book],
			autoLoadModels: true,
		}),
	],
	controllers: [BooksController],
	providers: [BooksService],
})
export class AppModule {}
