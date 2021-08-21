import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "@nestjs/core";
import { JoinnusModule } from "src/api/joinnus/joinnus.module";

const routes: Routes = [
    {
        path: '/api',
        children: [
            {
                path: '/joinnus',
                module: JoinnusModule,
            },

        ],
    },
];

@Module({
    imports: [
        RouterModule.register(
            routes
        ), JoinnusModule], // as usual, nothing new
})
export class RouterApiModule { }