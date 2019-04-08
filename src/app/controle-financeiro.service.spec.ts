import { TestBed } from '@angular/core/testing';

import { ControleFinanceiroService } from './controle-financeiro.service';

describe('ControleFinanceiroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControleFinanceiroService = TestBed.get(ControleFinanceiroService);
    expect(service).toBeTruthy();
  });
});
