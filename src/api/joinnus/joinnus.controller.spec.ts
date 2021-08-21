import { Test, TestingModule } from '@nestjs/testing';
import { JoinnusController } from './joinnus.controller';
import { JoinnusService } from './joinnus.service';

describe('JoinnusController', () => {
  let controller: JoinnusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoinnusController],
      providers: [JoinnusService],
    }).compile();

    controller = module.get<JoinnusController>(JoinnusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
