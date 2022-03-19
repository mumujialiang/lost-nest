import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
  })
  @ApiProperty({
    description: '日期',
    example: '2022-03-20',
  })
  date: string;

  @Column({
    type: 'text',
  })
  @ApiProperty({
    description: '图片链接',
    example:
      'https://tse1-mm.cn.bing.net/th/id/R-C.14b4b74e379683bd23230006fe98567d?rik=R1GP9ELf5%2ftOEg&riu=http%3a%2f%2fimg.keaitupian.cn%2fuploads%2f2020%2f10%2f15%2f69b37a9935dd4c9e8e2ba7d1990d5a53.jpg&ehk=nEx9koLXtYAN%2bQJr4SLVQ7LJNdfKzrS1%2fxsna%2bjnJf8%3d&risl=&pid=ImgRaw&r=0',
  })
  img: string;

  @Column()
  @ApiProperty({
    description: '描述',
    example: 'hello',
  })
  description: string;

  @Column()
  @ApiProperty({
    description: '电话',
    example: '13232456578',
  })
  tel: string;

  @Column()
  @ApiProperty({
    description: '电话号码所属区域',
    example: 86,
  })
  telPrefix: number;

  @Column({
    type: 'float',
  })
  @ApiProperty({
    description: '纬度',
    example: 39.874531,
  })
  lat: number;

  @Column({
    type: 'float',
  })
  @ApiProperty({
    description: '经度',
    example: 116.397083,
  })
  lng: number;
}
