import { CorsOptions, CorsOptionsDelegate } from "@nestjs/common/interfaces/external/cors-options.interface";
import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const optionsCors: CorsOptions | CorsOptionsDelegate<any> = {
    allowedHeaders: "*",
    origin: "*"
};


export const optionsSwagger = new DocumentBuilder()
    .setTitle("API JOINNUS UNOFFICIAL")
    .setDescription("Esta api esta obtiene los datos el sitio https://www.joinnus.com/")
    .setVersion("1.0")
    .build();

export const optionsCustomSwagger: SwaggerCustomOptions = {
    explorer: true,
    swaggerOptions: { filter: true, showRequestDuration: true },
}