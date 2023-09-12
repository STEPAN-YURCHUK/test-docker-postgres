import { Body, Controller, Get, Post } from '@nestjs/common'
import { BooksService } from './books.service'
import { CreateBookDto } from './dto/create.book.dto'

@Controller('books')
export class BooksController {
	constructor(private booksService: BooksService) {}

	@Post('create')
	createBook(@Body() dto: CreateBookDto) {
		return this.booksService.create(dto)
	}

	@Get('getAll')
	getAllBook() {
		return this.booksService.getAll()
	}
}
