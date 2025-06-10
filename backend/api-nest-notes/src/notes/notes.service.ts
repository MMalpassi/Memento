import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {

  constructor(
    @InjectRepository(Note)
    private noteRepository:Repository<Note>
  ){

  }

  async create(createNoteDto: CreateNoteDto) {
    return await this.noteRepository.save(createNoteDto);
  }

  async findAll() {
    return await this.noteRepository.find();
  }

  async findOne(id: number) {
    return await this.noteRepository.findOneBy({id});
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    await this.noteRepository.update(id, updateNoteDto);
    return await this.noteRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.noteRepository.delete(id);
  }
}
