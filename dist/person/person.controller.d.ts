/// <reference types="multer" />
import { CreatePersonDto } from './dto/create-person.dto';
export declare class PersonController {
    constructor();
    query(name: string, age: number): string;
    urlParam(id: string): string;
    body(createPersonDto: CreatePersonDto): string;
    body2(createPersonDto: CreatePersonDto, files: Array<Express.Multer.File>): string;
}
