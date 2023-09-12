import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { BooksModule } from './books/books.module'
import { Book } from './books/models/book.model'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: 'db',
			port: 5432,
			username: 'root',
			password: 'root',
			database: 'books',
			models: [Book],
			autoLoadModels: true,
		}),
		BooksModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
