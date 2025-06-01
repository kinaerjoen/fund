import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { config } from 'src/config/app.config';
const { MEDIA_FOLDER_PATH } = config;

const ensureMediaDir = () => {
  if (!fs.existsSync(MEDIA_FOLDER_PATH)) {
    fs.mkdirSync(MEDIA_FOLDER_PATH, { recursive: true });
  }
};

export const deleteFiles = (files: string[]) => {
  files.forEach((filename) => {
    const filePath = join(MEDIA_FOLDER_PATH, filename);
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file ${filename}:`, err);
        }
      });
    }
  });
};

@Controller('media')
export class MediaController {
  constructor() {
    ensureMediaDir();
  }

  @Post('upload')
  @UseGuards(AccessTokenGuard)
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: (req, file, cb) => {
          ensureMediaDir();
          cb(null, MEDIA_FOLDER_PATH);
        },
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  upload(@UploadedFiles() files: any) {
    if (!files || files.length === 0) {
      return [];
    }
    return files.map((file: any) => file.filename);
  }

  @Get(':filename')
  async getPicture(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(MEDIA_FOLDER_PATH, filename);
    if (!fs.existsSync(filePath)) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }
    const file = fs.createReadStream(filePath);
    file.on('error', (err) => {
      console.error(`Error reading file ${filename}:`, err);
      throw new HttpException('Error reading file', HttpStatus.INTERNAL_SERVER_ERROR);
    });
    file.pipe(res);
  }

  @Delete(':filename')
  @UseGuards(AccessTokenGuard)
  async deletePicture(@Param('filename') filename: string) {
    const filePath = join(MEDIA_FOLDER_PATH, filename);
    if (!fs.existsSync(filePath)) {
      throw new HttpException('File not found', HttpStatus.NOT_FOUND);
    }
    try {
      await fs.promises.unlink(filePath);
      return { message: 'File deleted successfully' };
    } catch (err) {
      console.error(`Error deleting file ${filename}:`, err);
      throw new HttpException('Error deleting file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
