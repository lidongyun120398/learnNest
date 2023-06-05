import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';

//Controller 对象：接收 http 请求，调用 Service，返回响应
// Service 对象：实现业务逻辑
// Repository 对象：实现对数据库的增删改查
//数据库链接对象 DataSource，配置对象 Config

//Controller 依赖了 Service 实现业务逻辑
// Service 依赖了 Repository 来做增删改查
// Repository 依赖 DataSource 来建立连接
// DataSource 又需要从 Config 对象拿到用户名密码

@Module({
  controllers: [PersonController],
  providers: [],
})
export class PersonModule {}
