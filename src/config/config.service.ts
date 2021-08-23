import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';

@Injectable()
export class ConfigService {
    constructor(private readonly envConfig: { [key: string]: string }) {
        const isDevEnv = process.env.NODE_ENV !== 'production';

        if (isDevEnv) {
            const envFilePath = __dirname + '/../../.env';
            const existPath = fs.existsSync(envFilePath);
            if (!existPath) {
                console.log(".env file dont exists");
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        } else {
            this.envConfig = {
                PORT: process.env.PORT,
            }
        }
    }


    public get(key: string): string {
        return this.envConfig[key];
    }

}
