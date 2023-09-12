import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateBookDto } from './dto/create.book.dto'
import { Book } from './models/book.model'

@Injectable()
export class BooksService {
	constructor(@InjectModel(Book) private bookRepository: typeof Book) {}

	async create(dto: CreateBookDto) {
		const book = await this.bookRepository.create(dto)
		return book
	}
}
