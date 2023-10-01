import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorModule } from './author/author.module';
import {ConfigModule} from "@nestjs/config";



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Maxell:Mohammad1211@nodeappproject.ef1yq2p.mongodb.net/elearn?retryWrites=true&w=majority\n'),CoursesModule,AuthorModule,ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
