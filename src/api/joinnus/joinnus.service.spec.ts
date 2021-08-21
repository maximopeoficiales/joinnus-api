import { Test, TestingModule } from '@nestjs/testing';
import { JoinnusService } from './joinnus.service';

describe('JoinnusService', () => {
  let service: JoinnusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinnusService],
    }).compile();

    service = module.get<JoinnusService>(JoinnusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
