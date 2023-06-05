import { Controller, Get, Param, Query, Body, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('api/person')
export class PersonController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  //传参事例

  //query
  //query 是 url 中 ? 后的字符串，需要做 url encode,在 Nest 里，通过 @Query 装饰器来取
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }

  //url param
  //url param 是 url 中的参数，Nest 里通过 :参数名 的方式来声明，然后通过 @Param(参数名) 的装饰器取出来注入到 controller
  // @Controller('api/person') 的路由和 @Get(':id') 的路由会拼到一起，也就是只有 /api/person/xxx 的 get 请求才会走到这个方法。
  @Get(':id')
  urlParam(@Param('id') id: string) {
    return `received: id=${id}`;
  }

  //form urlencoded
  //form urlencoded 是通过 body 传输数据，其实是把 query 字符串放在了 body 里
  //用 Nest 接收的话，使用 @Body 装饰器，Nest 会解析请求体，然后注入到 dto 中。dto 是 data transfer object，就是用于封装传输的数据的对象
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  //json
  //json 需要指定 content-type 为 application/json，内容会以 JSON 的方式传输
  //后端代码同样使用 @Body 来接收，不需要做啥变动。form urlencoded 和 json 都是从 body 取值，Nest 内部会根据 content type 做区分，使用不同的解析方式
  // @Post()
  // body(@Body() createPersonDto: CreatePersonDto) {
  //   return `received: ${JSON.stringify(createPersonDto)}`;
  // }
  //与form unlencoded相同,主要是前端传递的content type来决定

  //form data
  //Nest 解析 form data 使用 FilesInterceptor 的拦截器，用 @UseInterceptors 装饰器启用，然后通过 @UploadedFiles 来取。非文件的内容，同样是通过 @Body 来取
  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  body2(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
